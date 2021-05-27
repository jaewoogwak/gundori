var initBtn = document.getElementById("init");
initBtn.addEventListener("click", init);

function localStorageInit() {
    console.log("유저 정보를 삭제합니다!");
    localStorage.clear();
    console.log("유저 정보 삭제를 완료했습니다!");
}

function pageChange() {
    self.location = "index.html";
}

function init() {
    localStorageInit();
    pageChange();
}
