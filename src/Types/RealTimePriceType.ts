export interface RealTimePriceProps {
  serviceKey: string;
  apiType: string;
  pageNo: string;
  whsalCd: string;
  cmpCd?: string;
  largeCd?: string;
  midCd?: string;
  smallCd?: string;
}

export interface RealTimeDataProps {
  cmpCd: string;
  cmpName: string;
  cost: number;
  large: string;
  largeName: string;
  mid: string;
  midName: string;
  qty: number;
  rn: number;
  saleDate: string;
  sbidtime: string;
  small: string;
  smallName: string;
  std: string;
  whsalCd: string;
  whsalName: string;
}
