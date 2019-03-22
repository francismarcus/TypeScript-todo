import React, { Fragment, useState } from 'react'

type FormElement = React.FormEvent<HTMLFormElement>

interface Todo {
  text: string
  complete: boolean
}

export default function Form() {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleSubmit = (e:FormElement) => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string) => {
    const newTodos: Todo[] = [... todos, {text, complete: false}]
    setTodos(newTodos)
  }

  const completeTodo = (index: number) => {
    const newTodos: Todo[] = [... todos]
    newTodos[index].complete =!newTodos[index].complete
    setTodos(newTodos)
  }

  const removeTodo = (index: number) => {
    const newTodos: Todo[] = [... todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add something todo</button>
      </form>
      <section>
        {todos.map((todo: Todo, index: number) =>
        <Fragment key={index}>
          <div style={{ textDecoration: todo.complete ? 'line-through' : ''}}>
            {todo.text}
         </div>
         <button
         type='button'
         onClick={() => completeTodo(index)}>
            {todo.complete ? 'Has been completed': 'Done'}
         </button>
         <button type='button' onClick={() => removeTodo(index)}>&times;</button>
         </Fragment>
      )}
      </section>
    </div>
  )
}
