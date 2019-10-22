import * as Constants from '../common/values/Constants'
import {strings} from '../i18n/i18n'
import {
    signUpFailure,
} from '../actions';



  export async function callApi(methodType, apiUrl, requestBody) {
    if (methodType == Constants.METHOD_TYPE_POST) {
     return await fetch(apiUrl, {
            method: methodType,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        }).then((response) => {
            const statusCode = response.status;
            const data = response.json();
            return Promise.all([statusCode, data]);
          })
            .then(([statusCode, data]) => {
                console.log("statusCode", statusCode);
                console.log("data", data);
                const responseObj={
                    data:data,
                    statusCode:statusCode
                }
                return responseObj;
            })
            .catch((error) => {
                console.error(error);
            });

    }
}

