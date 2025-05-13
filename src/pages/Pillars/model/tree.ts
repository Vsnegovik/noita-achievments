export async function getTexturedTree(
  textureUrl: string,
  lightMaskUrl: string,
  width: number,
  height: number,
  blockSize: number,
): Promise<HTMLCanvasElement> {
  const [textureImg, lightMaskImg] = await Promise.all([
    loadImage(textureUrl),
    loadImage(lightMaskUrl),
  ])

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')!
  ctx.imageSmoothingEnabled = false

  // Отрисовка текстуры
  const textureCanvas = document.createElement('canvas')
  textureCanvas.width = width
  textureCanvas.height = height
  const textureCtx = textureCanvas.getContext('2d')!
  textureCtx.drawImage(textureImg, 0, 0, width, height)
  const textureData = textureCtx.getImageData(0, 0, width, height).data

  // Отрисовка маски освещения
  const lightMaskCanvas = document.createElement('canvas')
  lightMaskCanvas.width = width
  lightMaskCanvas.height = height
  const lightMaskCtx = lightMaskCanvas.getContext('2d')!
  lightMaskCtx.drawImage(lightMaskImg, 0, 0, width, height)
  const lightMaskData = lightMaskCtx.getImageData(0, 0, width, height).data

  const output = ctx.createImageData(width, height)
  const outData = output.data

  for (let y = 0; y < height; y += blockSize) {
    for (let x = 0; x < width; x += blockSize) {
      let rSum = 0,
        gSum = 0,
        bSum = 0,
        count = 0

      // Усреднение цвета текстуры в блоке
      for (let dy = 0; dy < blockSize; dy++) {
        for (let dx = 0; dx < blockSize; dx++) {
          const px = x + dx
          const py = y + dy
          if (px >= width || py >= height) continue

          const idx = (py * width + px) * 4
          rSum += textureData[idx]
          gSum += textureData[idx + 1]
          bSum += textureData[idx + 2]
          count++
        }
      }

      const rAvg = rSum / count
      const gAvg = gSum / count
      const bAvg = bSum / count

      // Усреднение яркости маски освещения в блоке
      let brightnessSum = 0
      for (let dy = 0; dy < blockSize; dy++) {
        for (let dx = 0; dx < blockSize; dx++) {
          const px = x + dx
          const py = y + dy
          if (px >= width || py >= height) continue

          const idx = (py * width + px) * 4
          const brightness =
            (lightMaskData[idx] + lightMaskData[idx + 1] + lightMaskData[idx + 2]) / 3
          brightnessSum += brightness
        }
      }

      const brightnessAvg = brightnessSum / count / 30

      // Применение яркости к усредненному цвету
      const rFinal = rAvg * brightnessAvg
      const gFinal = gAvg * brightnessAvg
      const bFinal = bAvg * brightnessAvg

      // Отрисовка блока на выходном изображении
      for (let dy = 0; dy < blockSize; dy++) {
        for (let dx = 0; dx < blockSize; dx++) {
          const px = x + dx
          const py = y + dy
          if (px >= width || py >= height) continue

          const idx = (py * width + px) * 4
          outData[idx] = rFinal
          outData[idx + 1] = gFinal
          outData[idx + 2] = bFinal
          outData[idx + 3] = 255 // Полная непрозрачность
        }
      }
    }
  }

  ctx.putImageData(output, 0, 0)
  return canvas
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}
