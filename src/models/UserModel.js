import * as Constants from '../common/values/Constants'
import {callApi} from '../models/BaseModel'

export default class UserModel {

    static signUp(requestBody){        
       return callApi(Constants.METHOD_TYPE_POST,Constants.API_SIGNUP,requestBody)
    }
    static login(requestBody){        
       return callApi(Constants.METHOD_TYPE_POST,Constants.API_LOGIN,requestBody)
    }
    static forgotPassword(requestBody){        
       return callApi(Constants.METHOD_TYPE_POST,Constants.API_FORGOT_PASSWORD,requestBody)
    }

}