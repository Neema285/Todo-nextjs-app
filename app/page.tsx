import AddTask from "./components/addtask";
import TodoList from "./components/TodoLIst";
export default function HomePage(){
  return (
    <main className='max-w-4xl max-auto mt-4'>
    <div className='text-center my-5 flex flex-col gap-4  display-center'>
      <header><title>TODO APP</title></header>
      <h1 className='text-22xl font-bold'>Todo List</h1>
      
      
      <AddTask/>

      </div>
      <TodoList/>

      </main>
      );
}












