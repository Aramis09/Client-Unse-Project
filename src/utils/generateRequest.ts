import { ResRequest, ServiceParams } from "@/types/requestTypes"
import { getCookie } from "./actionCookie";

//!El response tiene que ser lo que devuelve la Api 
//todo Example querys 
// querys = {
//    page: 1
//    queryX:"Holamundo"
//}
//

export async function generateRequest<B,C>({url,body,querys, method}:ServiceParams<B,C>):Promise<ResRequest> {        
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("auth-token",`${getCookie({nameCookie:"messiEntroAJugar"}).cookiesFound || null}`);
  myHeaders.append("auth-secret-key",`${process.env.NEXT_PUBLIC_SECRET_KEY}`);
  
  let urlToFetch = url
  let config:any = {
    method: method,
    headers: myHeaders,
    mode: "cors",
    credentials: "include"
  }
  
  if(querys) {
    urlToFetch = addQuerysOverUrl(url,querys)
  }
  if(body) {
    config = {...config,
      method: method,
      body:JSON.stringify(body)
    }
  }

  
  const res:Promise<ResRequest> = fetch(urlToFetch,config)
  .then(res=> res.json())
  .then(res=>res)
  .catch(err=> console.error(err))
  return res
}





function addQuerysOverUrl<d>(url: string, querysObj: d): string {
  let urlWithQuerys = url;
  let hasQueryParams = false;

  for (let queryName in querysObj) {
    const queryValue = String(querysObj[queryName]);
    if (!hasQueryParams) {
      urlWithQuerys = urlWithQuerys + "?" + String(queryName) + "=" + queryValue;
      hasQueryParams = true;
    } else {
      urlWithQuerys = urlWithQuerys + "&" + String(queryName) + "=" + queryValue;
    }
  }

  return urlWithQuerys;
}


