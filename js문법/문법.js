function BigUser() {
  this.name = "원숭이";
  return { name: "고릴라" };
}
alert( new BigUser().name );

//

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "제 이름은 " + this.name + "입니다." );
  };
}

let bora = new User("이보라");

bora.sayHi();

//
function returnFunc() {
  return function() {
    return function() {

    }
  }
}

let a = returnFunc();
console.log(a); 

// setTimeout(함수, 시간)

function timeout(cb) {
  setTimeout(() => {
    console.log('Jaeha')
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})

// 생성자 함수
function user(first, last) {
  this.firstName = first
  this.lastName = last
}

const heropy = new user('Heropy', 'Park')
const amy = new user('Amy', 'Clarke')
const neo = new user('Neo', 'Smith')

console.log(heropy)
console.log(amy)
console.log(neo)

// 
function User(name) {
  this.name = name;
  this.name = false;
}

let user = new User("보라");

alert(user.name);
alert(user.isAdmin);

// class
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullname() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy.getFullname())
console.log(neo.getFullname())

// class 속성
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughterCar = new Car('포르쉐', 4, false)
console.log(myCar)
console.log(daughersCar)