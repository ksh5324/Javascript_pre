// encodeURL(문자열)
// encodeURLComponent(문자열)

encodeURI("http://example.com/귀여운 고양이.html");
// "http://example.com/%EA%B7%80%EC%97%AC%EC%9A%B4%20%EA%B3%A0%EC%96%91%EC%9D%B4.html"

encodeURIComponent("http://example.com/귀여운 고양이.html");
// "http%3A%2F%2Fexample.com%2F%EA%B7%80%EC%97%AC%EC%9A%B4%20%EA%B3%A0%EC%96%91%EC%9D%B4.html"

// encodeURI 보다 encodeURLComponent가 처리하는 문자의 종류가 더 많음
