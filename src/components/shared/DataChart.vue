<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { provide } from 'vue';
import type { TChartOption } from '@/types/chart.type';

use([
  CanvasRenderer,
  PieChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  BarChart
]);

provide(THEME_KEY, 'light');

type TDataChartProps = {
  option: TChartOption;
};

defineProps<TDataChartProps>();
</script>

<template>
  <div class="h-[400px]">
    <v-chart class="h-full" :option="$props.option" />
  </div>
</template>

<style scoped>
.chart {
  height: 500px;
}
</style>
