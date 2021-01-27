var a = 'abc';

function getB(b = 10){
    var c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
interface Dropdown2<T>{
    value: T;
    title: string;
}
var shoppingItem: Dropdown2<string> ={
    value:'abc',
    title:'hello'
}

// 타입 추론 기본 3
interface Dropdown<T>{
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<number> = {
    title: 'abc',
    description: 'ab',
    value:'a',
    tag:'a'
}