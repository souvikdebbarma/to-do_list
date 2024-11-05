import { TrashIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

function TodoItem({ todo, toggleTodo, deleteTodo, toggleAssign }) {
  const priorityColors = {
    high: 'bg-red-100 dark:bg-red-900/30',
    medium: 'bg-yellow-100 dark:bg-yellow-900/30',
    low: 'bg-green-100 dark:bg-green-900/30'
  }

  return (
    <li className="group flex items-center gap-3 p-4 bg-white/5 dark:bg-blue/5 border border-white/10 dark:border-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 dark:hover:bg-blue/10 transition-all duration-300">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-5 w-5 rounded border-mauve/50"
      />
      <span className={`flex-1 text-white ${
        todo.completed ? 'line-through opacity-50' : ''
      }`}>
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-white/70 hover:text-white transition-all duration-300"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </li>
  )
}

export default TodoItem 