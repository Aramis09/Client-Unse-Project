// import enviroment from 'dotenv';
// enviroment.config()
// const {DOMAIN,CLIENT_ID }= process.env
import configJson from "../auth_config.json";

export default function getConfig() {

  return {
    domain: configJson.domain,
    clientId: configJson.clientId
  };
}


