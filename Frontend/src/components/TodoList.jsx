import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div>
      {todos.length === 0 ? (
        <div className="text-center p-8 bg-white/50 dark:bg-blue/30 rounded-xl">
          <p className="text-mauve/70 dark:text-mauve/50 italic">
            No todos yet. Add one using the form on the right!
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList 