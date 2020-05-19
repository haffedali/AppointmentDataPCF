export type Month = any;

export interface ITagContainer {
  tags: string[];
}
export interface LineGraphInterface {
  labels: string[];
  datasets: LineData[];
}

export interface LineData {
  data: number[];
  label: string;
  // key: string;
  borderColor: string;
  fill: boolean;
}

export interface GraphControlInterface {
  //function to grab month
  //function to grab all visits
  //function to grab visits with certain product
  //LineGraphProps: LineGraphInterface;
  month: Month;
  // handleSetMonth: (month: Month) => void;
}

export interface MonthOptionSetInterface {
  month: Month;
  handleSetMonth: (month: Month) => void;
}

export interface ITagItem {
  name: string;
  handleToggle: (name: string) => void;
  handleRemove: (name: string) => void
}
