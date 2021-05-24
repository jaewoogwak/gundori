var today = new Date();
var date = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();

var yymmdd = date + "." + month + "." + day;

document.getElementById("startDate").placeholder = yymmdd;
