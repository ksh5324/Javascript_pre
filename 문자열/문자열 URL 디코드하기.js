// decodeURL(문자열)
// decodeURLComponent(문자열)

decodeURI(
  "http://example.com/%EA%B7%80%EC%97%AC%EC%9A%B4%20%EA%B3%A0%EC%96%91%EC%9D%B4.html"
);
// http:/example.com/귀여운 고양이.html

decodeURIComponent(
  "http%3A%2F%2Fexample.com%2F%EA%B7%80%EC%97%AC%EC%9A%B4%20%EA%B3%A0%EC%96%91%EC%9D%B4.html"
);
// http:/example.com/귀여운 고양이.html
