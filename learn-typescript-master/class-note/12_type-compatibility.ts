//인터페이스
interface Developer{
    name: string;
    skill: string;
}
interface Person{
    name: string;
}

var developer: Developer;
var person: Person;

// person = developer;

// 함수

var add = function(a: number){
    // ,,,,
}
var sum = function(a: number, b: number){

}
interface Empty<T>{

}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
    date: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;