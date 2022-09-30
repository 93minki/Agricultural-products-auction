export interface RealTimePriceRequest {
  pageNo: string;
  whsalCd: string;
  cmpCd: string;
  largeCd?: string;
  midCd?: string;
  smallCd?: string;
}

export interface RealTimeReceiveDatas {
  saleDate: string;
  whsalCd: string;
  whsalName: string;
  cmpCd: string;
  cmpName: string;
  large: string;
  largeName: string;
  mid: string;
  midName: string;
  small: string;
  smallName: string;
  sanCd: string;
  sanName: string;
  cost: number;
  qty: number;
  std: string;
  sbidtime: string;
  rn: number;
}

export interface RealTimeReceiveAllData {
  data: RealTimeReceiveDatas[];
  errorCode: string;
  errorText: string;
  status: string;
  statusText: string;
  pageNo: string;
  dataCnt: number;
  totCnt: number;
}
