//3-3-1.내부함수의 우회법

var a = 10;
var obj = {
    a:20;
    b: function(){
        console.log(this.a);
        // 20

        function c(){
            console.log(this.a);
            //10
        }
        c();
    }
}
obj.b();

// 우회!
var a = 10;
var obj = {
    a: 20,
    b: function(){
        var self = this;
        console.log(this.a);
        //20
        function c(){
            console.log(self.a);
            //20
        }
        c();
    }
}
obj.b();

// 3-4 콜백함수 호출 시
var callback = function(){
    console.dir(this);
};
var obj = {
    a:1,
    b: function(cb){
        // cb();
        cb.call(this);
        //callback 함수는 지정하는 것에 따라 달라짐
    }
};
obj.b(callback);

var callback =function(){
    console.dir(this);
};
var obj = {
    a:1
};
setTimeout(callback.bind(ob),100);

// 3-5 생성자 함수 호출시
function Person(n, a){
    this.name = n;
    this.age = a;
}
var gomugom = new Person('고무곰',30);
console.log(gomugom)

// 4-1callback 실행시점
var cb = function(){
    console.log('1초 마다 실행');
}; 
setInterval(cb, 1000);
//setInterval(callback, milliseconds);

// 4-2 callback 인자
var arr = [1,2,3,4,5];
var entries = [];
arr.forEach(function(v,i){
    entries.push([i, v, this[i]]);
},[10,20,30,40,50]);
console.log(entries);

// arr.forEach =>forEach호출 (function(v,i){ => 인자1:callback함수
//     entries.push([i, v, this[i]]);
// },[10,20,30,40,50] //인자2:this로 인식할 대상(생략가능 ));

// 결과: [[0,1,10],[1,2,20],[2,3,30],[3,4,40],[4,5,50]]


// 5 closure
var outer = function(){
    var a = 1;
    var inner = function(){
        console.log(++a);
    };
    IntersectionObserverEntry();
}
outer();

// 6-1 prototype
function Person(n,a){
    this.name =n;
    this.age = a;
}
var gomu = new Person('고무곰',30);

var gomuClone1 = new gomu.__proto__.construc색('고무곰_클론1', 10);

var gomuClone2 = new gomu.constructor('고무곰_클론2',25);

var gomuProto = Object.getPrototupeOf(gomu);
var gomuClone3 = new gomuProto.constructor('고무곰_클론3', 20);

var gomuClone4 = new Person.prototype.constructor('고무곰_클론4',15);


//6-2 메소드 상속 및 동작원리 
function Person(n,a){
    this.name = n;
    this.age = a;
}
var gomu = new Person('고무곰', 30);
var iu = new Person('아이유', 25);

gomu.setOlder = function(){
    this.age += 1;
}
gomu.getAge = function(){
    return this.age;
}
iu.setOlder = function(){
    this.age += 1;
}
iu.getAge = function(){
    return this.age;
}

//==> 
function Person(n,a){
    this.name = n;
    this.age = a;
}
person.prototype.setOlder = function(){
    this.age +=1;
}
person.prototype.getAge = function(){
    return this.age;
}
var gomu = new Person('고무곰', 30);
var iu = new Person('아이유', 25);


// 7-1 class

function Person(name, age){
    this._name = name;
    this._age = age;
}
//static method
Person.getInformations = function(instance){
    return {
        name: instance._name,
        age: instance._age
    };
}
//method
Person.prototype.getName = function(){
    return this._name;
}
//method
Person.prototype.getAge = function(){
    return this._age;
}
//okay
console.log(gomu.getName());
console.log(gomu.getAge());
//error
console.log(gomu.getInformations(gomu));
//okay
console.log(Person.getInformations(gomu));
