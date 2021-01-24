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