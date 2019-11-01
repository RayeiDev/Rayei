// Screen Route Names
export const SCREEN_SPLASH='Splash'
export const SCREEN_LOGIN_SIGNUP='LoginSignUpOptionScreen'
export const SCREEN_LOGIN='LoginScreen'
export const SCREEN_SIGNUP='SignUpScreen'
export const SCREEN_FORGOT_PASSWORD='ForgotPasswordScreen'
export const SCREEN_LANGUAGE='LanguageScreen'
export const SCREEN_DASHBOARD='Dashboard'
export const SCREEN_QUESTIONS='QuestionScreen'
export const SCREEN_SURVEY_LIST='SurveyListScreen'
export const SCREEN_SURVEY_DETAIL='SurveyDetailScreen'







// Other Constants

export const SHARE_APP_LINK_IOS = 'https://itunes.apple.com/us/app/gonear/id1425381449?ls=1&mt=8';
export const RATE_SHARE_APP_LINK_IOS = 'itms-apps://itunes.apple.com/us/app/id${1425381449}?mt=8.';
export const RATE_SHARE_APP_LINK_ANDROID = 'https://play.google.com/store/apps/details?id=com.gonear';
export const KEY_BOAD_TYPE_PHONE = 'phone-pad';
export const KEY_BOAD_TYPE_NUMBER = 'number-pad';
export const KEY_BOAD_TYPE_DEFAULT = 'default';
export const KEY_NOFICATIONDATA = 'noficationData';
export const KEY_LABEL = 'label';
export const KEY_VALUE = 'value';
export const KEY_IS_CHECKED = 'is_checked';

export const KEY_LONGITUDE = 'longitude';
export const KEY_LATITUDE = 'latitude';
export const EMITTER_NOTIFICATION = 'emitter_noti';

export const KEY_CLICK_ACTION = 'click_action';
export const KEY_USER_DATA = 'user_data';
export const KEY_CUSTOM_NOTIFICATION = 'custom_notification';
export const NOTIFICATION_TYPE_REMINDER_DETAIL = 'reminder_detail';
export const KEY_NOTIFICATION_DATA = 'notification_data';
export const KEY_NOTIFICATION_DATA_IOS = 'gcm.notification.notification_data';
export const KEY_NOTIFICATION = 'notification';
export const KEY_PHONE = 'phone';
export const KEY_DEVICE_TYPE = 'device_type';
export const KEY_DEVICE_ID = 'device_id';
export const KEY_DEVICE_TOKEN = 'device_token';
export const OS_TYPE_ANDROID = 'android';
export const OS_TYPE_IOS = 'ios';
export const LIST_THRESHOLD = 0.5;



export const MAX_LENGTH_OF_PHONE_NUMBER = 10;
export const MIN_LENGTH_OF_PHONE_NUMBER = 10;

export const MAX_LENGTH_OF_PASSWORD = 20;
export const MIN_LENGTH_OF_PASSWORD = 8;
export const MAX_LENGTH_OF_ZIPCODE = 6;
export const MIN_LENGTH_OF_ZIPCODE = 6;


export const KEY_COUNTRY_CODE_VALUE = '91';
export const KEY_COUNTRY_NAME_VALUE = 'India';

export const USER_TYPE_PATIENT_ID = 3;
export const USER_TYPE_DOCTOR_ID = 4;

export const GENDER_MALE_ID = 1;
export const GENDER_FEMALE_ID = 2;
export const KEY_MINIMUMLENGTHOFNAME = 3;
export const KEY_MAXLENGTHOFNAME = 20;



export const MIN_LENGTH_OF_HOSPITIAL_NAME = 3;
export const MAX_LENGTH_OF_HOSPITIAL_NAME = 30;



export const KEY_MOBILE_NUMBER = 'mobile';
export const KEY_AGREE_FOR_TERMS_CONDITIONS = 'agree_for_terms_conditions';

export const KEY_COUNTRY_CODE = 'countrycode';
export const KEY_RATING = 'rating';
export const KEY_COUNTRY = 'country';
export const KEY_OTP = 'otp';
export const KEY_DESCRIPTION = 'description';
export const KEY_IMAGE = 'image';

export const SHOW_AFTER = 300;


export const METHOD_TYPE_POST = 'POST';
export const METHOD_TYPE_GET = 'get';
export const METHOD_TYPE_DELETE = 'delete';
export const METHOD_TYPE_PUT = 'PUT';

/////////////////////////////////////// API NAMES ////////////////////////////////////

export const BASE_URL = 'http://ec2-13-59-72-71.us-east-2.compute.amazonaws.com:8000/v1/';
export const AUTH_URL = BASE_URL+'auth/';
export const SURVEY_URL = BASE_URL+'survey/';
export const API_SIGNUP = AUTH_URL+'signup/';
export const API_LOGIN = AUTH_URL+'login/';
export const API_FORGOT_PASSWORD = AUTH_URL+'password/reset_request/';
export const API_LOOKUP = BASE_URL+'lookup';
export const API_SURVEY = SURVEY_URL+'surveys/?';
export const API_SURVEY_DETAIL = SURVEY_URL+'surveys/';