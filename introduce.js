var changeUserIntroBtn = document.getElementById("changeUserIntro");
changeUserIntroBtn.addEventListener("click", pageChange_changeUserIntro);

//var userIntro = document.getElementById("introduce");

// 입력한 한 줄 소개 가져오기 & 바꾸기

function pageChange_changeUserIntro() {
    self.location ="changeUserIntro.html";
}

// localStorage에서 userIntro값 가져오기

var text_intro = localStorage.getItem("userIntro");
var userIntro = document.getElementById("introduce");

function changeUserIntro() {
    console.log("changeUserIntor work!");
    userIntro.innerText = text_intro;
}
