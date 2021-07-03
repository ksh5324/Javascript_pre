console.log(Promise);

new Promise(/* excutor */);
// excutor 함수는 resolve와 reject함수를 인자로 가진다
// (resolve, reject) => {...}

new Promise(/*excutor*/(resolve,reject) => {}); // pending상태

new Promise((resolve, reject) => {
    // 팬딩상태
    // ...
    resolve(); // resolve실행시 fulfilled(이행)상태
})

new Promise((resolve, reject) => {
    reject(); // rejected(거부)상태ㅐ
})


// p라는 프로미스 객체는 1000ms후에 fulfilled 됩니다.
const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve();
    }, 1000)
})

p.then(() => { // 콜백 작성 구간
    // fulfiled로 넘어왔을 때 then실행
})