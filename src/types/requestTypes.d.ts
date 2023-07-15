import { ResToGetServices, ResToGetSubAdversit, ResToGetSubServices } from "./interfaces"

//response
export type ResRequest = ResToGetAdversit | ResToGetSubServices |ResToGetServices | DetailAdvertising
//response

//!geters //////////////////////-----/////////////////

export interface GetWithPage {
  page:number
}


//!geters //////////////////////-----/////////////////


export interface ServiceParams<B,C> {
  url:string
  body:B | null
  querys: C | null
}

