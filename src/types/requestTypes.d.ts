import { ResLogin } from '../helpers/loginHelpers';
import {
  ResToGetServices,
  ResToGetSubAdversit,
  ResToGetSubServices,
  ResToGetCarrousel
} from "./interfaces";

//response
export type ResRequest =
  | ResToGetAdversit
  | ResToGetSubServices
  | ResToGetServices
  | AdvertisingType
  | ResLogin
  | ResToGetCarrousel;
//response

//!geters //////////////////////-----/////////////////

export interface GetWithPage {
  page: number;
  size: number | null;
}
export interface GetServiceWithOrientation {
  orientation: string;
}

// export interface GetSer

//!geters //////////////////////-----/////////////////


export interface ServiceParams<B, C> {
  url: string;
  body: B | null;
  querys: C | null;
  method: "GET" | "POST" | "PUT" | "DELETE"
}




// Generated by https://quicktype.io


