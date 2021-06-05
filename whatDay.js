// totalDay, nowDay, futureDay
// endDate - nowDate = futureDay (남은 날)
// nowDate - startDate = nowDay (한 날)
var totalDay = document.getElementById("totalDay");
totalDay.innerText = (endDate.getTime() - startDate.getTime()) / 86400000;
var nowDay = document.getElementById("nowDay");
nowDay.innerText = Math.floor((today.getTime() - startDate.getTime()) / 86400000);
var futureDay = document.getElementById("futureDay");
futureDay.innerText = totalDay.innerText - nowDay.innerText;

