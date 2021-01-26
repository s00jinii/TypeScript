// function logText(text){
//     console.log(text);
//     return text; 
    
// }
// logText(10); 
// logText(true);
// logText("hi");

function logText<T>(text: T):T {
    console.log(text);
    return text;
}
logText<string>('하이');

const str1 = logText<string>('하이');
str1.split('')
const login = logText<boolean>(true);


function logNumber(num:number){
    console.log(num);
    return num;
}

logText('a');
const num = logNumber(10);


interface Dropdown<T>{
    value: T;
    selected: boolean;
}

// const obj: Dropdown = { value:10, selected: false};
const obj: Dropdown <number>= {value:'abc', selected: false};

// 제네릭의 타입 제한
function logTextLength<T>(text:T[]): T[]{
text.forEach(function(text){
    console.log(text);
});
    return text;
}
logTextLength<string>(['hi','acb']);

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType{
    length: number;

}

function logTextLength1<T extends LengthType>(text: T): T{
    text.length;
    return text
}
logTextLength1('a');
logTextLength1({ length: 10});

