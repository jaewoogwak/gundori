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

function clickSave(event) {
	console.log("정보를 가져옵니다.");
	if(user.value !== "" && whenStart.value !== "" && whenEnd.value !== "") {
		userName = user.value;
		userStartDate = whenStart.value;
		userEndDate = whenEnd.value;
		enterUser();
	} else{
		alert("정보를 모두 입력해주세요!");
		return false;
	}
}

function enterUser() {
	console.log("정보를 등록합니다.");
	/*named.innerText = userName;
	start.innerText = userStartDate;
	end.innerText = userEndDate;*/
	saveUserImformation();
	pageChange();
}

function pageChange() {
	self.location ='main.html';
}

function saveUserImformation() {
	saveUserName(userName);
	saveUserDate1(userStartDate);
	saveUserDate2(userEndDate);
}

function saveUserName(userName) {
	localStorage.setItem("currentUserName", userName);
}

function saveUserDate1(userStartDate) {
	localStorage.setItem("currentUserDate1", userStartDate);
}

function saveUserDate2(userEndDate) {
	localStorage.setItem("currentUserDate2", userEndDate);
}





