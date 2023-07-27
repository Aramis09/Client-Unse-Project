import { ResToGetServices, ResToGetSubAdversit, ResToGetSubServices } from "./interfaces"

//response
export type ResRequest = ResToGetAdversit | ResToGetSubServices |ResToGetServices | AdvertisingType
//response

//!geters //////////////////////-----/////////////////

export interface GetWithPage {
  page:number
  size: number | null
}
export interface GetServiceWithOrientation {
  orientation:string
}

// export interface GetSer

//!geters //////////////////////-----/////////////////


export interface ServiceParams<B,C> {
  url:string
  body:B | null
  querys: C | null
}

