import type { App } from 'vue';
import GridBackground from './GridBackground.vue';
import DataChart from '../../dashboard/components/DataChart.vue';
import AppButton from './AppButton.vue';

interface IGlobalComponents {
  [key: string]: any;
}

const GLOBAL_COMPONENTS: IGlobalComponents = {
  GridBackground,
  DataChart,
  AppButton
};

const GLOBAL_COMPONENTS_PLUGIN = {
  install(app: App) {
    for (const key in GLOBAL_COMPONENTS) {
      app.component(key, GLOBAL_COMPONENTS[key]);
    }
  }
};

export default GLOBAL_COMPONENTS_PLUGIN;
