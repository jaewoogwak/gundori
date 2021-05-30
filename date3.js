var whenEndDate = document.getElementById("end");
var endd = whenEndDate.innerText;
var enddYY = endd[0] + endd[1] + endd[2] + endd[3];
var enddMM = endd[5] + endd[6];
var enddDD = endd[8] + endd[9];
var endDate = new Date(enddYY, enddMM, enddDD);

var whenStartDate = document.getElementById("start");
var start = whenStartDate.innerText;
var startYY = start[0] + start[1] + start[2] + start[3];
var startMM = start[5] + start[6];
var startDD = start[8] + start[9];
var startDate = new Date(startYY, startMM, startDD);

var today;
var gap;
var journey;
var endMinusStart = endDate.getDate() - startDate.getDate();

function workDate() {
    today = new Date();
    gap = (endDate.getTime() /86400000 - today.getTime()/86400000);

    journey = document.getElementById("elapsed");
    journey.innerText = gap;
}

setInterval(workDate, 1000);
