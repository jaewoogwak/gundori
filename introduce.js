var changeUserIntroBtn = document.getElementById("changeUserIntro");
changeUserIntroBtn.addEventListener("click", pageChange);

var userIntro = document.getElementById("introduce");

function changeUserIntro() {
    pageChange();
}

// 입력한 한 줄 소개 가져오기 & 바꾸기

function pageChange() {
    self.location ="changeUserIntro.html";
}