export interface SettlementSearchProps {
  date?: string;
  market: string;
  company: string;
  product: string;
}
export interface SettlementPirceRequest {
  pageNo: string;
  saleDate: string;
  whsalCd: string;
  cmpCd: string;
  largeCd?: string;
  midCd?: string;
  smallCd?: string;
}
export interface SettlementReceiveDatas {
  rn: number;
  saleDate: string;
  cmpName: string;
  sanName: string;
  std: string;
  smallName: string;
  lvName: string;
  totQty: number;
  totAmt: number;
  minAmt: number;
  maxAmt: number;
  avgAmt: number;
  cmpCd: string;
  danCd: string;
  danq: number;
  large: string;
  largeName: string;
  mid: string;
  midName: string;
  lvCd: string;
  pojCd: string;
  sanCd: string;
  sizeCd: string;
  sizeName: string;
  small: string;
  whsalCd: string;
  whsalName: string;
}
export interface SettlementReceiveAllData {
  data: SettlementReceiveDatas[];
  errorCode: string;
  errorText: string;
  status: string;
  statusText: string;
  pageNo: string;
  dataCnt: number;
  totCnt: number;
}
