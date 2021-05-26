var currentUserName;
var currentUserStartDate;
var currentUserEndDate;

function loadUserImformation() {
    currentUserName = localStorage.getItem("currentUserName");
    currentUserStartDate = localStorage.getItem("currentUserDate1");
    currentUserEndDate = localStorage.getItem("currentUserDate2");
}

function getUser() {
    loadUserImformation();
    console.log(currentUserName);
    console.log(currentUserStartDate);
    console.log(currentUserEndDate);
}

function setUser() {
    var currentName = document.getElementById("name");
    currentName.innerText = currentUserName;
    var currentStartDate = document.getElementById("start");
    currentStartDate.innerText = currentUserStartDate;
    var currentEndDate = document.getElementById("end");
    currentEndDate.innerText = currentUserEndDate;
}

function Init() {
    getUser();
    setUser();
}

Init();

