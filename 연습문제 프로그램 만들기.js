

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
