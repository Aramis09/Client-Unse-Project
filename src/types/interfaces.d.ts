import Advertising from "../components/advertising/advertising";
// Generated by https://quicktype.io

interface BaseServerResponseGet {
  status: number;
  succes: boolean;
  message: string;
}

//!Services types -----------------------------------><
//!Esto lo tengo que reutilizar con las otras respuestas
export interface ResToGetServices extends BaseServerResponseGet {
  data: ServiceType[];
}
export interface ResToGetDetailServices extends BaseServerResponseGet {
  data: ServiceType;
}
export interface ServiceType {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  Oritentation: Oritentation[];
  SectionsViewsService: SectionsView[];
}

export interface Oritentation {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  Service_ServiceOrientation: ServiceServiceOrientation;
}

export interface ServiceServiceOrientation {
  createdAt: string;
  updatedAt: string;
  ServiceId: number;
  ServiceOrientationId: number;
}
//!Services types -----------------------------------><

// Generated by https://quicktype.io
//!SubServices types -----------------------------------><
export interface ResToGetSubServices extends BaseServerResponseGet {
  data: SubServiceTypes[];
}

export interface ResToGetSubService extends BaseServerResponseGet {
  data: SubServiceTypes;
}

export interface SubServiceTypes {
  id: number;
  title: string;
  resume: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  setTheBelongToService: number;
  BelongToTheService: BelongToTheService;
  SectionsViewsSubServ: SectionsView[];
}

export interface BelongToTheService {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
//!SubServices types -----------------------------------><

//!Aversiting types types -----------------------------------><
export interface ResToGetAdversit extends BaseServerResponseGet {
  data: AdvertisingType[];
}
export interface ResToGetDetailAdversit extends BaseServerResponseGet {
  data: AdvertisingType;
}
export interface AdvertisingType {
  id: number;
  title: string;
  summary: string;
  aside: string;
  footer: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  SectionsViews: SectionsView[];
}
export interface SectionsView {
  id: number;
  title: null | string;
  textPartOne: string;
  textPartTwo: null | string;
  topImage: null | string;
  middleImage: null | string;
  belowImage: null | string;
  createdAt: string;
  updatedAt: string;
  setOwner: number;
}

//!Aversiting types types -----------------------------------><

export type TypeImage = "cover" | "thumbnail";

export interface optionsForm {
  type: "service" | "subservice" | "advertising";
}

export interface DataInForm {
  topImage: string | null;
  title: string;
  partOne: string | null;
  middleImage: string | null;
  partTwo: string | null;
  belowImage: string | null;
}

export interface DataService {
  title: string;
  description?: string;
  orientation?: string;
  sections: DataInForm[];
  image?: string
}

export interface DataSubService {
  title: string;
  description: string;
  resume: string;
  sections: DataInForm[];
  image?: string
}

export interface DataAdvertising {
  title: string;
  summary: string;
  aside: string;
  footer: string;
  image: string;
  sections: DataInForm[];
}



export type DataAdvertisingInForm = Omit<DataAdvertising, "sections">
export type DataServiceInForm = Omit<DataService, "sections">
export type DataSubServiceInForm = Omit<DataSubService, "sections">



interface ImageData {
access_mode:string
asset_id: string
batchId: string
bytes: number
created_at: string
etag: string
folder: string
format: string
height: number
id: string
original_extension: string
original_filename: string
path: string
placeholder: boolean
public_id: string
resource_type: string
secure_url: string
signature: string
tags: []
thumbnail_url: string
type: string
url: string
version: number
version_id: string
width: number
}



export interface ResToGetCarrousel extends BaseServerResponseGet {
  data: CarrouselContent;
}

export interface CarrouselContent {
  id:               number;
  location:         string;
  createdAt:        string;
  updatedAt:        string;
  CarrouselContent: CarrouselImages[];
}

export interface CarrouselImages {
  id:                number;
  url:               string;
  createdAt:         string;
  updatedAt:         string;
  setCarrouselOwner: number;
}

export interface errorForm {
  message: string
  type?: string
}