import * as Constants from '../common/values/Constants'
import {callApi} from './BaseModel'

export default class SurveyModel {

    static getSurvey(url){        
       return callApi(Constants.METHOD_TYPE_GET,url)
    }
    static getSurveyDetail(url){        
       return callApi(Constants.METHOD_TYPE_GET,url)
    }
  

}