

let i = 0
while (confirm('계속 진행하시겠습니까?')) {
// 사용자가 [확인] 버튼을 클릭하면  true가 되어 계속 반복합니다.
alert(`${i}번째 반복입니다.`)
i = i + 1
}



const rawInput = prompt('inch 단위의 숫자를 입력하세요')

const inch = Number(rawInput)
const cm = inch * 2.54

alert(`${inch} inch는 ${cm} cm입니다.`)

// cm를 받아 inch 단위 변환하는 출력 프로그램

const rawInput = prompt('cm 단위의 숫자를 입력해주세요')

const cm = Number(rawInput)
const inch = cm * 0.393701

alert(`${cm} cm는 ${inch} inch 입니다.`)


// 원의 반지름을 입력받아 원의 넓이와 둘레를 구하는 프로그램
const rawInput = prompt('원의 반지름을 입력해주세요.')
const r = Number(rawInput)

let output = ''
output += `원의 반지름: ${r}\n`
output += `원의 넓이: ${3.14 * r * r}\n`
output += `원의 둘레: ${2 * 3.14 * r}`
alert(output)

// USD -> KRW 환율 변환 프로그램
const rawInput = prompt('달러 단위의 금액을 입력해주세요.')
const currency = Number(rawInput)

let output = ''
output += `달러: ${currency}\n`
output += `원화: ${currency * 1207}`
alert(output)

// 오전과 오후 구별하기
const date = new Date()
const hour = date.getHours()

if(hour < 12) {
  alert('오전입니다.')
} else if ( hour >= 12) {
  alert('오후입니다.')
}

// 홀수와 짝수를 구분하는 프로그램
const a = Number(prompt('숫자를 입력해주세요', ''))

if (a % 2 === 0) {
  alert(`입력한 숫자 ${a}는 짝수입니다.`)
} else {
  alert(`입력한 숫자 ${a}는 홀수입니다.`) 
}

// 몇 월인지 확인, 계절을 구분하는 프로그램
const a = Number(prompt('월을 입력해주세요', ''))

if (a > 11 && a > 3) {
  alert('겨울입니다.')
} else if (a >= 10) {
  alert('가을입니다.')
} else if (a >= 6) {
  alert('여름입니다.')
} else {
  alert('봄입니다.') 
}
//
if (3 <= a && a <= 5) {
  alert('봄입니다.')
  } else if (6 <= a && a <= 8) {
  alert('여름입니다.')
  } else if (9 <= a && a <= 11) {
  alert('가을입니다.')
  } else {
  alert('겨울입니다.')
  }

  // for 반복문과 배열
const todo = ['우유 구매', '업무 메일 확인하기', '축구하기']

for (let i = 0; i < todo.length; i++) {
  console.log(`${i}번째 할 일: ${todo[i]}`)
  
}
// 반대로 출력
const todo = ['우유 구매', '업무 메일 확인하기', '축구하기']

for (let i = todo.length - 1; i >= 0; i--) {
  console.log(`${i}번째 할일: ${todo[i]}`)
}

// 
const array = ['사과', '배', '귤', '바나나']

console.log('# for in 반복문')
for (const i in array) {
  console.log(`${i}번째 과일: ${array[i]}`)
}
// for 반복문으로 변형
const array = ['사과', '배', '귤', '바나나']

console.log('# for반복문')
for (let i = 0; i < array.length; i++) {
  console.log(`${i}번째 과일: ${array[i]}`);
}

console.log('# for of 반복문');
for (const i of array) {
  console.log(i);
}

// for문을 이용해 array에 값 넣기
const array = [] 
 for (let i = 0; i < 3; i++) { 
 array.push((i + 1) * 3) 
 } 
 console.log(array) 

 // 1부터 100까지의 숫자를 곱한 값을 계산하는 프로그램
 let output = 1

for (let i = 1; i <= 100; i++) {
  output *= i
}
console.log(`1~100의 숫자를 모두 곱하면, ${output}입니다.`);

// 함수
// 기본 형태 함수
function f(x) {
  return x * x 
}
console.log(f(3));

// 윤년을 확인하는 함수
function isLeapYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0) && (year % 400 === 0)
}

console.log(isLeapYear(2010));

// a부터 b까지 더하는 함수
function sumAll(a, b) {
  let output = 0 // 초기값 설정
  for (let i = a; i <= b; i++) {
    output += i
  }
  return output
}
console.log(`1부터 2까지의 합: ${sumAll(1, 2)}`);

// a부터 b까지 곱하는 함수
function mulAll(a, b) {
  let output = 1
for (let i = a; i <= b; i++) {
  output *= i
  }
  return output
}
console.log(`1부터 3까지의 곱: ${mulAll(1, 3)}`);

// 최솟값을 구하는 함수
function min(array) {
  let output = array[0]
  for (const item of array) {
    if (output > item) {
      output = item
    }
  }
  return output
}
const testArray = [55, 273, 32, 103, 275, 24, 57]
console.log(min(testArray));

// 최댓값을 구하는 함수
const testArray = [55, 273, 32, 103, 275, 24, 57]

function max(array) {
  let output = array[0]
  for (const item of array) {
    if (output < item) {
      output = item
    }
  }
  return output
}
console.log(max(testArray));

// A부터 B까지 범위를 지정했을 때 범위 안의 숫자를 모두 곱하는 함수
const multiplyAll = function (a, b) {
  let output = 1
  for (let i = a; i <= b; i++) {
    output *= i
  }
  return output
}
console.log (multiplyAll(1, 2))
console.log (multiplyAll(1, 3))

// 매개변수로 max([1, 2, 3, 4])최댓값을 갖는 max 함수 만들기
const max = function (array) {
  let output = array[0]
  for (const item of array) {
    if (output < item)
    output = item
  }
  return output
}

console.log(max[(1, 2, 3, 4)]);

// 매개변수로 max(1, 2, 3, 4)와 같이 숫자를 배열을 받는 max()함수 만들기
const array = [1, 2, 3, 4]

function sample(...items) {
  console.log(items);
}

sample(array)

// 익명함수
let 익명함수

익명함수 = function () {
  console.log('1번째 익명 함수입니다.');
}
익명함수 = function () {
  console.log('2번째 익명 함수입니다.');
}

익명함수 ()

// 
const array = ['사과', '배', '귤', '바나나']

// for (const i in array) {
//   console.log(i);
// }

// ->
array.forEach((x, i) => {
  console.log(i);
})

// forEach 변환
const array = ['사과', '배', '귤', '바나나']

console.log('# for in 반복문');
// for (const i in array) {
//   console.log(i);
// }
// -> forEach 익명함수
array.forEach(function(value, index, array) {
  console.log(index);
});

console.log('#for of 반복문');
// for(const i of array) {
//   console.log(i);
// }
// -> forEach 화살표함수
array.forEach((value, index, array) => {
  console.log(value);
})

// 객체
// 객체

const array = [100, 20, '문자열', true, function () {}, () => {}]
console.log(array[0])
console.log(array[1])

const object = {
  name: '구름',
  age: 7
  
}

// 
const object = {
  name: '혼자 공부하는 파이썬',
  price: 18000,
  publisher: '한빛미디어'
}