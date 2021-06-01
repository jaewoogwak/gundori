// 초기화 버튼
var initBtn = document.getElementById("init");
initBtn.addEventListener("click", init);

function localStorageInit() {
    console.log("유저 정보를 삭제합니다!");
    localStorage.clear();
    console.log("유저 정보 삭제를 완료했습니다!");
    return "init";
}

function pageChange(adress) {
    if(adress == "init") {
        self.location = "first.html";
    } else if(adress == "revise") {
        self.location = "enterMenu.html";
    }
}

function init() {
    pageChange(localStorageInit());
}

// 수정 버튼
var reviseBtn = document.getElementById("revise");
reviseBtn.addEventListener("click", revise);

function reviseUserImformation() {
    console.log("유저의 정보를 수정합니다!");
    return "revise";
}

function revise() {
    pageChange(reviseUserImformation());
}