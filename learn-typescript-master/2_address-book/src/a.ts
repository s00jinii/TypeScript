// function fetchItems1(){
//     var items = ['a','b','c']
//     return items;

// }
// var result = fetchItems();
// console.log(result);

// function fetchItems(){
//     let items = ['a','b','c'];
//     return new Promise(function (resolve){
//         resolve(items);
//     })
// }

function fetchItems(): Promise<string[]>{
    let items = ['a','b','c'];
    return new Promise(function (resolve){
        resolve(items);
    })
}
fetchItems();