import type { App } from 'vue';
import GridBackground from './shared/GridBackground.vue';
import DataChart from './shared/DataChart.vue';

interface IGlobalComponents {
  [key: string]: any;
}

const GLOBAL_COMPONENTS: IGlobalComponents = {
  GridBackground,
  DataChart
};

const GLOBAL_COMPONENTS_PLUGIN = {
  install(app: App) {
    for (const key in GLOBAL_COMPONENTS) {
      app.component(key, GLOBAL_COMPONENTS[key]);
    }
  }
};

export default GLOBAL_COMPONENTS_PLUGIN;
