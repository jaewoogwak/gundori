// 두 날짜간 차이 계산
var g = document.getElementById("start");
var go = g.innerText;
console.log(go);
console.log(g.innerText);
var f = document.getElementById("end");  
var fin = f.innerText; 
var startYY="", startMM="", startDD="";
var endYY = "", endMM = "", endDD = "";

// 년도 가져오기
for(i=0; i<4; i++) {
    startYY = startYY + go[i];
    endYY = endYY + fin[i];
}
// 월 가져오기
for(i=5; i<7; i++) {
    startMM = startMM + go[i];
    endMM = endMM + fin[i];
}
// 일 가져오기
for(i=8; i<10; i++) {
    startDD = startDD + go[i];
    endDD = endDD + fin[i];
}

var date1 = new Date(startYY, startMM, startDD);
var date2 = new Date(endYY, endMM, endDD);

var elapsedMsec = date2.getTime() - date1.getTime();

var elapsed = document.getElementById("elapsed");
elapsed.innerText = elapsedMsec;