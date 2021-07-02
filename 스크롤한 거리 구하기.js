// document.documentElement.scrollLeft: X축 방향으로 스크롤한 거리
// document.documentElement.scrollTop: Y축 방향으로 스크롤한 거리
// 인터넷 익스플로러, 파이어 폭스

// document.body.scrollLeft: X축 방향으로 스크롤한 거리
// document.body.scrollTop: Y축 방향으로 스크롤한 거리
// 크롬, 사파리, 오페라, 엣지 등

// window.pageXOffset: X축 방향으로 스크롤한 거리
// window.pageYOffset: Y축 방향으로 스크롤한 거리


// 스크롤한 거리를 구하는 함수(크로스 부라우징 대응)
function getScrollTop(){
    if(window.pageYOffset !== undefined){
        return window.pageYOffset;
    }else{
        return document.documentElement.scrollTop || document.body.scrollTop;
    }
}
function getScrollLeft() {
    if(window.pageXOffset !== undefined){
        return window.pageXOffset;
    }else{
        return document.documentElement.scrollLeft || document.body.scrollLeft;
    }
}