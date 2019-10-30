import * as Constants from '../common/values/Constants'
import {callApi} from './BaseModel'

export default class RestModel {

    static lookUp(){        
       return callApi(Constants.METHOD_TYPE_GET,Constants.API_LOOKUP)
    }
  

}