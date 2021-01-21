class Person1 {
    private name: string;
    public age:number;
    readonly log: string;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

// 리엑트 예전 문법 - 클래스 기반 코드
class App extends React.Component{

}

// 리엑트 회신 문법 - 훅 기반의 함수형 코드 ㅋㄴ
function App(){
    return <div>hello world</div>
}

// 
new Vue({
    el:'',
    string(){
        
    }
})