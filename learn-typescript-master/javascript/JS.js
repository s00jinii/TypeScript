/**
 * 1. data types
 * 
 * 기본형 primitive Type: 값 그대로 할당
 * - Number/ string / Boolean / null / undefied
 * 참조형 Reference Type: 값이 저장된 주소값을 할당 
 * - object (Array / Function / RegExp)
 */

 /**
  * 2-1.hosting
  * 2-2. function Declaration vs Function expression
  * 2-3. function scope, execution context
  * 2-4. method
  * 2-5. callback function
  */

  // 2-3. function scope, execution context
  // 함수 선언문 function declaration
  function a(){
      return 'a';
  }
  // 기명 함수 표현식 named function expression
  var b = function bb(){
      return 'bb';
  }
  // (익명) 함수 표현식 (unnamed/annonymous) function expression
  var c = function(){
      return 'c';
  }

  // 2-5 forEach example1
  var arr =[ 1,2,3,4,5];
  var entries = [];
  arr.forEach(function(v,i){
      entries.push([i,v,this[i]]);
  }, [10,20,30,40,50]);
  console.log(entries);
  
  // 2-5 forEach example2
  Array.prototype.forEach = function(callback, thisArg){
      var self = thisArg || this;
      for(var i = 0; i <this.length; i ++){
          callback.call(self, this[i], i, this);
      }
  }

  /** 3. this
   *  4. closure *******
   *  4-2. closure로 private member 만들기
   *  5. prototype
   *  5-1. prototype chaining
   *  6-1. class
   */