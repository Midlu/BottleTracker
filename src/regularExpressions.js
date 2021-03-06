export const containUpperCaseLetterRegEx = /.*[A-Z]+.*/
export const containLowerCaseLetterRegEx = /.*[a-z]+.*/
export const containNumberRegEx = /.*\d+.*/
export const containPasswordSpecialCharacterRegEx = /.*[!&^%$#@()/*_]+.*/
export const nameRegex = /^[a-zA-Z '-]*$/
export const noSpecialCharactersRegEx = /^[a-zA-Z0-9]*$/
export const noNumbersOrSpecialCharactersWithSpacesRegEx = /^[a-zA-Z ]*$/
export const numericOnlyStringRegEx = /^\d+$/
export const phoneNumberRegEx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
export const phoneNumberNXXRegEx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*([2-9]{1}\d{2})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
export const phoneInternationalRegex = /^[1-9][0-9]*$/
export const currencyOnlyRegex =  /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/
export const greaterThanZeroRegex = /.*[1-9]+.*/
