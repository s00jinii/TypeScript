interface Todo{
    id: number;
    title: string;
    done: boolean;
}

let todoItems: Todo[];

// api
function fetchTodoItems() {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

//curd methods 
function fetchTodos(){
    const todos = fetchTodoItems();
    return todos;
}

function addTodo(todo){
    todoItems.push(todo);
}
function deleteTodo(index){
    todoItems.splice(index, 1)
}

function completeTodo(index, todo){
    todo.done = true;
    todoItems.splice(index,1,todo);
}

//business logic
function logFirstTodo(){
    return todoItems[0];
}

function showCompleted(){
    return todoItems.filter(item => item.done);
    // return todoItems.filter(function(item){
    //     item(item.done){
    //         return item;
    //     }
    // });
}

function addTwoTodoItems(): void {
    // addTodo() 함수를 두 번 호출하여 todoItems에 새 할일이 2개 추가되어야 함.
    const item1 = {
        id: 4,
        title: '아이템4',
        done:false,
    };

    addTodo(item1);
    addTodo({
        id: 5,
        title: '아이템 5',
        done: false,
    });

}

// Note: 유틸함수
function log(): void{
    console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();