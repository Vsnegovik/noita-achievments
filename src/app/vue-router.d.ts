import 'vue-router';
import { ELayoutType } from './router';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: ELayoutType;
  }
}
