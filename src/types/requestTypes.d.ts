import { ResToGetServices, ResToGetSubAdversit, ResToGetSubServices } from "./interfaces"

//response
export type ResRequest = ResToGetAdversit | ResToGetSubServices |ResToGetServices | AdvertisingType
//response

//!geters //////////////////////-----/////////////////

export interface GetWithPage {
  page:number
}
export interface GetServiceWithOrientation {
  orientation
}

//!geters //////////////////////-----/////////////////


export interface ServiceParams<B,C> {
  url:string
  body:B | null
  querys: C | null
}

