enum Shoes{
    Nike = "나이키",
    adidas="아디다스"
}

var myShoes = Shoes.Nike;
console.log(myShoes);

//예제
enum Answer{
    Yes = 'y',
    No = 'N',
}

function askQuestion(answer: string){
    if (answer === 'yes'){
        console.log('정답입니다');
    }
    if (answer ==='no'){
        console.log('오답입니다');
    }
}
askSomeone('예스');
askSomeone('예스');
askSomeone('예스');