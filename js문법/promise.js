// promise

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0 ) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(20)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error)
  .finally(() => console.log('끝났다!'));


// promise 추가연습
// 1. 성공인 경우
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("완료!"), 1000);
});

promise.then(
  result => alert(result),
  error => alert(error)
);

// 2. 프로미스가 거부된 경우
let promise = new Promise(function(result, reject) {
  setTimeout(() => reject(new Error("에러 발생!")), 1000);
});

promise.then(
  result => alert(result),
  error => alert(error)
);

// 성공적으로 처리된 경우만 다루려면 .then에 인수 하나만 전달
let promise = new Promise(resolve => {
  setTimeout(() => resolve("완료!"), 1000);
});

promise.then(alert);

// 에러가 발생한 경우만 다루고 싶다면
let promise = new Promise (resolve, reject => {
  setTimeout(() => reject(new Error("에러 발생!")), 1000);
});

promise.catch(alert); 

// 
const 이미지로딩 = new Promise(function(성공, 실패){
  const img = document.querySelector('#test');
  img.addEventListener('load', function(){
    성공();
  });
  img.addEventListener('error', function(){
    실패();
  });
});

이미지로딩.then(function() {
  console.log('성공했어요')
}).catch(function() {
  console.log('실패했어요');
})
