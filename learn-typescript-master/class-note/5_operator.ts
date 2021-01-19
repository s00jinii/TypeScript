// function logMessage(value: any){
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);



function logMessage(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if (typeof value === 'string'){
        value.toString();
    }
   throw new TypeError('value must ve string or number');

}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}
function askSomeone (someone: Developer | Person){
    someone.name;
    // someone.skill;
    // someone.age;

}
askSomeone({name: "ㄷㅣㅂㅔㄹㄹㅗㅍㅓ", skill: "웹개발"});

// &앤드 연산자를 가지고 인터섹션 타입 소개

var seho: string | number | boolean;
var capt: string & number & boolean;

function askSomeone1 (someone: Developer & Person){
    someone.name;
    someone.skill;
    someone.age;

}