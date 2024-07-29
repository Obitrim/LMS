export enum EChart {
  Line = 'line',
  Bar = 'bar',
  Pie = 'pie'
}

export type TChartOption = TPieChartOption | TBarChartOption | TLineChartOption;

export type TBaseChartOption = {
  title: Partial<TChartTitle>;
  tooltip: Partial<TChartTooltip>;
  legend: Partial<TChartLegend>;
  grid?: {
    left: string | number;
    right: string | number;
    bottom: string | number;
    containLabel: boolean;
  };
};

export type TPieChartOption = TBaseChartOption & {
  series: TPieChartSeries[];
};

export type TBarChartOption = TBaseChartOption & {
  xAxis?: any;
  yAxis?: any;
  series: TBarChartSeries[];
};
export type TLineChartOption = TBaseChartOption & {
  series: TLineChartSeries[];
};

export type TChartTitle = {
  id: string;
  text: string;
  subtext: string;
  left: number | string;
  right: string | number;
  top: string | number;
  bottom: string | number;
};

export type TChartTooltip = {
  show: boolean;
  trigger: 'item' | 'axis' | 'none';
  formatter: string | Function;
  axisPointer?: TAxisPointer;
};

export type TChartLegend = {
  id: string;
  type: 'plain' | 'scroll';
  left: number | string;
  right: string | number;
  top: string | number;
  bottom: string | number;
  orient: 'horizontal' | 'vertical';
  data: any[];
};

export type TBarChartSeries = {
  id?: string;
  name?: string;
  type: 'bar';
  data: any[];
  emphasis?: {
    itemStyle: Partial<TChartItemStyle>;
  };
};

export type TLineChartSeries = {
  id: string;
  name: string;
  type: 'line';
  data: any[];
  emphasis: {
    itemStyle: Partial<TChartItemStyle>;
  };
};

export type TLineData = {};

export type TPieChartSeries = {
  id?: string;
  name: string;
  type: 'pie';
  radius?: string | number | (number | string)[];
  center?: string | number | (number | string)[];
  data: TPieData[];
  emphasis?: {
    itemStyle?: Partial<TChartItemStyle>;
  };
};

export type TPieData = {
  name: string;
  value: number;
};

export type TChartItemStyle = {
  color: any;
  borderColor: any;
  borderWidth: any;
  borderType: any;
  borderDashOffset: any;
  borderCap: any;
  borderJoin: any;
  borderMiterLimit: any;
  shadowBlur: any;
  shadowColor: any;
  shadowOffsetX: any;
  shadowOffsetY: any;
  opacity: any;
  borderRadius: any;
};

export type TAxisPointer = {
  type: 'line' | 'shadow' | 'none' | 'cross';
};
