import React, { Component } from 'react';
import { strings } from '../i18n/i18n';
import * as Constants from '../common/values/Constants';
import moment from 'moment';
import { Share } from 'react-native';


// project validation start from here
export const isValidUserName = (name, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (name === '') {

    msg = strings('INVALID_USERNAME');

  }

  if (msg !== '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidPassword = (password, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (password === '') {
    msg = strings('EMPTY_PASSWORD');
  }
  else if (password.length < Constants.MIN_LENGTH_OF_PASSWORD || password.length > Constants.MAX_LENGTH_OF_PASSWORD) {
    msg = strings('INVALID_PASSWORD');
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidEmail = (email, showPopUp) => {
  var isValid = true;
  var msg = '';
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email == '') {
    msg = strings('EMPTY_EMAIL');
  }
  else if (reg.test(email) === false) {

    msg = strings('INVALID_EMAIL');
    console.log(msg);

  }

  if (msg !== '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidMobileNumber = (number, showPopUp) => {
  var isValid = true;
  var msg = '';
  console.log('number',number);
  
  if (number === '' || number === null) {
    msg = strings('EMPTY_MOBILE');
  }

  else if (number.length < Constants.MIN_LENGTH_OF_PHONE_NUMBER ||
    number.length > Constants.MAX_LENGTH_OF_PHONE_NUMBER) {
    msg = strings('MOBILE_LENGTH_EXCEED');
  }

  if (msg !== '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

// export const isValidMessage = (message, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (message == '') {

//     msg = strings(StringKeys.MESSAGE_EMPTY);

//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// //end from here



// export const isValidDob = (dob, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (dob == '') {

//     msg = strings(StringKeys.DOB_EMPTY);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const isValidGender = (genderId, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   console.log('genderId ' + genderId);
//   if (genderId != undefined && genderId.length == 0) {
//     msg = strings(StringKeys.GENDER_EMPTY);
//   }
//   else if (genderId == undefined) {
//     msg = strings(StringKeys.GENDER_EMPTY);
//   }
//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }
// export const isValidToken = (token, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (token == undefined || token == '') {
//     msg = strings(StringKeys.Token_EMPTY);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const isValidReview = (token, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (token == undefined || token == '') {
//     msg = strings(StringKeys.Token_EMPTY);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }




// export const isAcceptedTermsAndConditions = (isAcceptedTermsAndConditions, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (isAcceptedTermsAndConditions === undefined || isAcceptedTermsAndConditions === false) {

//     msg = strings(StringKeys.Accept_Terms_And_Conditions);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }


// export const isValidShiftForBookAppoint = (shift, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (shift === undefined || shift === '') {
//     msg = strings(StringKeys.SHIFT_EMPTY);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }


// export const isValidShiftSlotForBookAppoint = (shift, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (shift === undefined || shift === '') {
//     msg = strings(StringKeys.SHIFT_EMPTY);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// //Rana


// export const isValidAddressType = (addresstype, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (addresstype == '') {

//     msg = strings(StringKeys.Select_Address_Type);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const isValidState = (state, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (state == '') {
//     msg = strings(StringKeys.State_Empty);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const isValidCity = (city, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (city == '') {
//     msg = strings(StringKeys.City_Empty);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const isValidArea = (area, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (area == '') {
//     msg = strings(StringKeys.Area_Empty);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }



// export const isValidZipcode = (zipcode, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (zipcode == '') {
//     msg = strings(StringKeys.Zipcode_Empty);
//   }

//   else if (zipcode.length < Constants.MIN_LENGTH_OF_ZIPCODE) {

//     msg = strings(StringKeys.Zipcode_Min_Error);

//   }

//   else if (zipcode.length > Constants.MIN_LENGTH_OF_ZIPCODE) {

//     msg = strings(StringKeys.Zipcode_Max_Error);

//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const convertDateIntoMilisecond = (dataTime, comingFormat) => {
//   var convertedMilisecond = 0;
//   if (dataTime !== null || dataTime !== undefined) {
//     var momentObj = moment(dataTime, comingFormat);
//     convertedMilisecond = momentObj.valueOf();
//   }
//   return convertedMilisecond;
// }


// export const isValidFromToDate = (from, fromFormat, to, toFormat, showPopup) => {
//   var isValid = true;
//   var msg = '';
//   if (from == undefined || from == '') {
//     msg = strings(StringKeys.Please_select_from_date)
//   }
//   else if (to == undefined || to == '') {
//     msg = strings(StringKeys.Please_select_to_date)
//   }
//   else {
//     var checkStartTime = convertDateIntoMilisecond(from, fromFormat);
//     var checkEndTime = convertDateIntoMilisecond(to, toFormat);

//     var difference = checkEndTime - checkStartTime;
//     if (difference < 0) {
//       msg = strings(StringKeys.To_date_should_be_equal_or_after_from_date);
//     }

//   }
//   if (msg != '') {
//     isValid = false;
//     if (showPopup) {
//       alert(msg);
//     }
//   }


//   return isValid;
// }
// export const isValidFullName = (name, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (name == '') {

//     msg = strings(StringKeys.NAME_EMPTY);

//   }
//   else if (name.length < Constants.KEY_MINIMUMLENGTHOFNAME) {

//     msg = strings(StringKeys.FULL_NAME_LENGTH_ERROR);

//   }

//   else if (name.length > Constants.KEY_MAXLENGTHOFNAME) {

//     msg = strings(StringKeys.NAME_MAX_LENGTH_ERROR);

//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// checkStringsContainsOnlySpecialChar = (inputString) => {
//   var isValid = false;

//   const splChrs = /^[^a-zA-Z0-9]+$/;
//   isValid = String(inputString).match(splChrs);

//   return isValid;
// }

// isNumeric = (inputString) => {
//   const regex = /^[a-zA-Z]+$/;
//   if (!String(inputString).match(regex)) {

//     return true;
//   }
//   return false;
// }


// export const getDeviceToken = () => {
//   return 'dfadsfds';
// }


// export const isValidOtp = (otp, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (otp == '') {
//     msg = strings(StringKeys.msg_otp_empty);
//   }
//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const getValidString = (strData) => {
//   if (strData == null || strData == undefined)
//     strData = '';
//   return strData;
// }

// export const getPaymentValue = (strData) => {
//   if (strData == null || strData == undefined)
//     strData = '';
//   if (strData == Constants.PAYMENT_TYPE_ALREADY_PAID) {
//     strData = 'Already Paid';
//   }
//   else if (strData == Constants.PAYMENT_TYPE_CASH) {
//     strData = 'Cash';
//   }
//   else if (strData == Constants.PAYMENT_TYPE_PAYTM) {
//     strData = 'Paytm';
//   }
//   return strData;
// }

// export const getFeeWithFormat = (strData) => {
//   if (strData == undefined || strData == null || strData == '' || strData == '0')
//     strData = '';
//   else {
//     strData = '₹' + strData;
//   }
//   return strData;
// }
// export const getSelectedGenderPos = (genderId) => {
//   var genderPos = undefined;
//   if (genderId == Constants.GENDER_MALE_ID)
//     genderPos = 0;
//   else if (genderId == Constants.GENDER_FEMALE_ID)
//     genderPos = 1;
//   else if (genderId == Constants.GENDER_OTHER_ID)
//     genderPos = 2;

//   return genderPos;
// }

// export const getExperienceWithFormat = (strData) => {
//   if (strData == null || strData == undefined)
//     strData = '';
//   else {
//     strData = strData + ' years';
//   }
//   return strData;
// }

// export const convertStrDateFormat = (utcDateTime, comingFormat, forShowFormat) => {
//   if (utcDateTime !== null && utcDateTime !== undefined && utcDateTime !== '') {
//     var momentObj = moment(utcDateTime, comingFormat);
//     utcDateTime = momentObj.format(forShowFormat);
//   }
//   else
//     utcDateTime = '';
//   return utcDateTime;
// }

// export const convertDateObjFormat = (dateTime, forShowFormat) => {
//   var showDateValue = '';
//   if (dateTime !== null || dateTime !== undefined) {
//     showDateValue = moment(dateTime).format(forShowFormat)
//   }
//   return showDateValue;
// }
// export const getGender = (genderId) => {
//   var gender = StringKeys.Gender;
//   if (genderId === Constants.GENDER_MALE_ID)
//     gender = 'Male';
//   else if (genderId === Constants.GENDER_FEMALE_ID)
//     gender = 'Female';
//   console.log('genderId: ' + genderId + ' genderValue: ' + gender);
//   return gender;
// }
// export const getSpeciality = (spcialityArray) => {
//   var speciality = '';
//   if (spcialityArray !== undefined && spcialityArray !== undefined && spcialityArray.length > 0) {
//     var count = 0;
//     for (var spl in spcialityArray) {
//       console.log('words Value:' + spcialityArray[spl]);
//       if (count == 0)
//         speciality = spcialityArray[spl];
//       else
//         speciality += ', ' + spcialityArray[spl];
//       ++count;
//     }
//   }
//   return speciality;
// }

// export const isHospitalLogin = (currentUserLoginData) => {
//   if (currentUserLoginData != undefined && currentUserLoginData.groupid == Constants.USER_TYPE_HOSPITAL_ID) {
//     return true;
//   }
//   return false;
// }

// export const isPatientLogin = (currentUserLoginData) => {
//   if (currentUserLoginData != undefined && currentUserLoginData.groupid === Constants.USER_TYPE_PATIENT_ID) {
//     return true;
//   }
//   return false;
// }

// export const isDoctorLogin = (currentUserLoginData) => {
//   if (currentUserLoginData != undefined && currentUserLoginData.groupid === Constants.USER_TYPE_DOCTOR_ID) {
//     return true;
//   }
//   return false;
// }



// export const isAttenderLogin = (currentUserLoginData) => {
//   if (currentUserLoginData != undefined && currentUserLoginData.groupid === Constants.USER_TYPE_ATTENDER_ID && currentUserLoginData[Constants.KEY_CREATED_BY] == Constants.CREATED_BY_DOCTOR) {
//     return true;
//   }
//   return false;
// }


// export const isAttenderHospitalLogin = (currentUserLoginData) => {
//   if (currentUserLoginData != undefined && currentUserLoginData.groupid === Constants.USER_TYPE_ATTENDER_ID && currentUserLoginData[Constants.KEY_CREATED_BY] == Constants.CREATED_BY_HOSPITAL) {
//     return true;
//   }
//   return false;
// }

// export const getValidAddress = (strData) => {
//   if (strData == null || strData == undefined)
//     strData = '';
//   return strData;
// }

// export const makeFirstLetterCapital = (str) => {
//   if (str !== undefined)
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   else
//     return '';
// }

// export const getFirstLetter = (str) => {
//   console.log('str Value: ' + str);
//   if (str != undefined && str.length > 0) {
//     var unique = str.split('');
//     return unique[0].toUpperCase();
//   }

//   else
//     return '';
// }



// export const makeToCapital = (str) => {
//   if (str !== undefined)
//     return str.toUpperCase();
//   else
//     return '';
// }


// export const getShortNameFromName = (str) => {
//   var shortName = '';
//   if (str !== undefined && str.length > 0) {
//     var res = str.split(" ");
//     for (var words in res) {
//       console.log('words Value:' + res[words]);
//       shortName += res[words].charAt(0).toUpperCase();
//     }
//   }
//   return shortName;
// }



// // kishan

// export const isValidAge = (age, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (age == '') {

//     msg = strings(StringKeys.AGE_EMPTY);

//   }


//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const isValidAddress = (address, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (getValidString(address) == '') {

//     msg = strings(StringKeys.ADDRESS_EMPTY);

//   }


//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }



// export const isValidPaymentMode = (paymentType, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (paymentType == '') {
//     msg = strings(StringKeys.PAYMENT_TYPE_EMPTY);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }


// export const socialSharing = (title, subject, message, url) => {


//   let shareOptions = {
//     title: title,
//     message: message, // Note that according to the documentation at least one of "message" or "url" fields is required
//     subject: subject
//   };

//   if (url !== undefined && url !== '') {
//     shareOptions.url = url;
//   }

//   Share.share(shareOptions);
// }


// export const isValidHospitalName = (name, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (name == '') {
//     msg = strings(StringKeys.NAME_HOSPITAL_EMPTY);
//   }
//   else if (name.length < Constants.MIN_LENGTH_OF_HOSPITIAL_NAME) {
//     msg = strings(StringKeys.HOSPITAL_NAME_LENGTH_ERROR);
//   }

//   else if (name.length > Constants.MAX_LENGTH_OF_HOSPITIAL_NAME) {
//     msg = strings(StringKeys.HOSPITAL_NAME_MAX_LENGTH_ERROR);
//   }
//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }


// export const isDoctorSelected = (toDoctorId, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (toDoctorId == '') {
//     msg = strings(StringKeys.Please_select_atleast_one_doctor);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }
// export const isHospitalSelected = (toHospitalIds, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (toHospitalIds == '') {
//     msg = strings(StringKeys.Please_select_atleast_one_hospital);
//   }

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const isValidDegreeName = (degree, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (degree == '') {
//     msg = strings(StringKeys.PLEASE_ENTER_DEGREE);
//   }
//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const isValidAboutUs = (aboutUs, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (aboutUs == '') {
//     msg = strings(StringKeys.Please_enter_about_us);
//   }
//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }


// // export const isValidHospitalName = (hospital, showPopUp) => {
// //   var isValid = true;
// //   var msg = '';
// //   if (hospital == '') {
// //     msg = strings(StringKeys.PLEASE_ENTER_HOSPITAL_NAME);
// //   }
// //   if (msg != '' && showPopUp) {
// //     isValid = false;
// //     alert(msg)
// //   }
// //   return isValid;
// // }

// export const isValidCollageName = (collegeName, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (collegeName == '') {
//     msg = strings(StringKeys.PLEASE_ENTER_COLLAGE_NAME);
//   }
//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }

// export const isValidStartYear = (collegeName, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (collegeName == '') {
//     msg = strings(StringKeys.Please_select_start_year);
//   }
//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;

// }



// export const isValidEndYear = (collegeName, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (collegeName == '') {
//     msg = strings(StringKeys.Please_select_end_year);
//   }
//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;

// }




// export const isValidYearsDuration = (startDate, endDate, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (startDate == '' || startDate == undefined) {
//     msg = strings(StringKeys.Please_select_start_year);
//   } else if (endDate == '' || endDate == undefined) {
//     msg = strings(StringKeys.Please_select_end_year);
//   } else if (endDate != Constants.TILL_NOW && (convertDateIntoMilisecond(endDate, Constants.DATE_FORMAT_SEND_YEAR) - convertDateIntoMilisecond(startDate, Constants.DATE_FORMAT_SEND_YEAR)) < 24 * 60 * 60) {
//     msg = strings(StringKeys.END_DATE_ALWAYS_GREATER_THAN_START_DATE);
//   }

//   // alert((convertDateIntoMilisecond(endDate,Constants.DATE_FORMAT_SEND)-convertDateIntoMilisecond(startDate,Constants.DATE_FORMAT_SEND)))

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }



// export const isValidDuration = (startDate, endDate, showPopUp) => {
//   var isValid = true;
//   var msg = '';
//   if (startDate == '' || startDate == undefined) {
//     msg = strings(StringKeys.PLEASE_ENTER_START_DATE);
//   } else if (endDate == '' || endDate == undefined) {
//     msg = strings(StringKeys.PLEASE_ENTER_END_DATE);
//   } else if ((convertDateIntoMilisecond(endDate, Constants.DATE_FORMAT_SEND) - convertDateIntoMilisecond(startDate, Constants.DATE_FORMAT_SEND)) < 24 * 60 * 60) {
//     msg = strings(StringKeys.END_DATE_ALWAYS_GREATER_THAN_START_DATE);
//   }

//   // alert((convertDateIntoMilisecond(endDate,Constants.DATE_FORMAT_SEND)-convertDateIntoMilisecond(startDate,Constants.DATE_FORMAT_SEND)))

//   if (msg != '' && showPopUp) {
//     isValid = false;
//     alert(msg)
//   }
//   return isValid;
// }


// export const getImageObj = (imageUrl) => {
//   var imageobj = undefined;
//   if (imageUrl !== undefined && imageUrl !== null && imageUrl !== '') {

//     imageobj = {
//       source: {
//         uri: imageUrl,
//       },

//     }
//   }
//   return imageobj;
// }
// export const getMultipleImageForshowFromServer = (imagesUrlArray) => {
//   var imgArray = [];
//   if (imagesUrlArray !== undefined && imagesUrlArray.length > 0) {
//     for (var itemIndex in imagesUrlArray) {
//       var imgObjectForDisplay = {
//         uri: imagesUrlArray[itemIndex][Constants.KEY_IMAGE],
//       };
//       if (imagesUrlArray[itemIndex][Constants.KEY_ID]) {
//         imgObjectForDisplay[Constants.KEY_ID] = imagesUrlArray[itemIndex][Constants.KEY_ID];
//       }
//       imgArray.push(imgObjectForDisplay)
//     }
//   }
//   console.log('imgArray Value: ' + JSON.stringify(imgArray));
//   return imgArray;
// }

// export const getMultipleImageForDisplay = (imagesUriArray) => {
//   var imgArray = [];
//   if (imagesUriArray !== undefined && imagesUriArray.length > 0) {
//     for (var itemIndex in imagesUriArray) {
//       var imgObjectForDisplay = {
//         source: {
//           uri: imagesUriArray[itemIndex].uri,

//         }

//       };
//       imgArray.push(imgObjectForDisplay)
//     }
//   }
//   console.log('imgArray Value: ' + JSON.stringify(imgArray));
//   return imgArray;
// }


// export const getMultipleImageForImageViewer = (imagesUriArray) => {
//   var imgArray = [];
//   if (imagesUriArray !== undefined && imagesUriArray.length > 0) {
//     for (var itemIndex in imagesUriArray) {
//       var imgObjectForDisplay = {
//         // Simplest usage.
//         url: imagesUriArray[itemIndex].uri,

//         // width: number
//         // height: number
//         // Optional, if you know the image size, you can set the optimization performance

//         // You can pass props to <Image />.
//         props: {
//           // headers: ...
//         }
//       }
//       imgArray.push(imgObjectForDisplay)
//     }
//   }
//   console.log('imgArray Value: ' + JSON.stringify(imgArray));
//   return imgArray;
// }




// export const setImageForImageViewer = (imageUri) => {
//   var imgArray = [];

//   var imageobj = undefined;
//   if (imageUri !== undefined && imageUri !== '') {

//     imageobj = {
//       url: imageUri,
//     }
//   }

//   if (imageobj != undefined) {
//     imgArray.push(imageobj)
//     console.log('imgArray Value: ' + JSON.stringify(imgArray));
//   }
//   return imgArray;
// }

// export const getShiftDataFromResponse = (originalData) => {
//   var filteredData = [];
//   if (originalData[Constants.KEY_SHIFTS] != undefined && originalData[Constants.KEY_SHIFTS] != null)
//     filteredData = originalData[Constants.KEY_SHIFTS];
//   console.log('oringinal Data: ' + JSON.stringify(filteredData));

//   return filteredData;
// }



