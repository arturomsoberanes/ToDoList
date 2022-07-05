import React from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text:'learn react',
      isCompleted: true,
    },
    {
      text:'meet friend for lunch',
      isCompleted: false,
    },
    {
      text:'build todo app',
      isCompleted: false,
    }
  ]);
  const [value, setValue] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text:value, isCompleted:false}];
    setTodos(newTodos);
    setValue('');
  };
  const checkTodo = (e) => {
    const id = e.target.id.split("-");
    const index = Number(id[id.length-1]);
    let temp = [...todos];
    temp.map((task, i) => {
      if (index === i){
        task.isCompleted = e.target.checked;
      }
    });
    setTodos(temp);
  };
  const deleteTodos = e => {
    e.preventDefault();
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);

  };
  return (
    <main className="main">
      <section className="list">
        <h2>Add your Tasks</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            className="input"
            values={value}
            placeholder="Press Enter for add todo..."
            onChange={e => setValue(e.target.value)} 
          />
        </form>
        {todos.map((todo,i) => {
          return(
            <div className="list-item" key={i} id={i}>
              <input id={`input-${i}`} className="checks" type="checkbox" onChange={checkTodo} checked={todo.isCompleted}/>
              <label htmlFor={`input-${i}`}>
                {todo.text}
              </label>
              <button className="button_delete" id={i} onClick={deleteTodos}>X</button>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
