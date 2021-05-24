// 입력 화면에서 받아온 데이터
var user = document.getElementById("enterName");
//var userName = user.value;
var whenStart = document.getElementById("startDate");
var whenEnd = document.getElementById("endDate");

// user 정보 화면에 띄울 데이터
var userName = user.value;
var userStartDate = whenStart.value;
var userEndDate = whenEnd.value;

// main 화면에 넘겨줄 데이터
var named = document.getElementById("name");
var start = document.getElementById("start");
var end = document.getElementById("end");


// enterMenu.html의 저장 버튼 이벤트 등록
var button = document.getElementById("btn");
button.addEventListener("click", clickSave);

// index.html의 정보 등록하기 버튼 이벤트 등록
var eventBtn = document.getElementById("enterBtn");
eventBtn.addEventListener("click", alert("클릭"));

function clickSave() {
	console.log("정보를 가져옵니다.");
	userName = user.value;
	userStartDate = whenStart.value;
	userEndDate = whenEnd.value;
	enterUser();
}

function enterUser() {
	console.log("정보를 등록합니다.");
	named.innerText = userName;
	start.innerText = userStartDate;
	end.innerText = userEndDate;
}

function openEnterValuePage() {
	
}


/*
var startDate;
var group;
var endDate;
*/





