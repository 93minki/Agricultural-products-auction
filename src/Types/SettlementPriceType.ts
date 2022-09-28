export interface SettlementPirceProps {
  serviceKey: string;
  apiType: string;
  pageNo: string;
  saleDate: string;
  whsalCd: string;
  cmpCd?: string;
  largeCd?: string;
  midCd?: string;
  smallCd?: string;
}

export interface SettlementDataProps {
  avgAmt: number;
  cmpCd: string;
  cmpName: string;
  danCd: string;
  danq: number;
  large: string;
  largeName: string;
  lvCd: string;
  lvName: string;
  maxAmt: number;
  mid: string;
  midName: string;
  minAmt: number;
  pojCd: string;
  rn: number;
  saleDate: string;
  sanCd: string;
  sanName: string;
  sizeCd: string;
  sizeName: string;
  small: string;
  smallName: string;
  std: string;
  totAmt: number;
  totQty: number;
  whsalCd: string;
  whsalName: string;
}
