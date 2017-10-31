export default function getBaseUrl(){
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3002/' : 'https://agile-citadel-58282.herokuapp.com/';

  /*
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3002/' : '/';

  */
}


// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getQueryStringParameterByName(name, url){
  if(!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));

}
