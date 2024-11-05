import { PlusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function TodoForm({ input, setInput, addTodo }) {
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    addTodo({
      text: input,
      dueDate: dueDate
    })
    setInput('')
    setDueDate('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border-2 border-mauve focus:outline-none focus:ring-2 focus:ring-mauve bg-white/90 dark:bg-blue/50 placeholder-mauve/60 dark:placeholder-mauve/40 text-blue dark:text-cloud transition-all duration-300"
          placeholder="Add a new todo..."
        />
        <div className="flex gap-3">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="flex-1 sm:flex-none px-4 py-3 rounded-xl border-2 border-mauve focus:outline-none focus:ring-2 focus:ring-mauve bg-white/90 dark:bg-blue/50 text-blue dark:text-cloud transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-maroon dark:bg-mauve text-cloud px-4 py-2 rounded-xl hover:bg-maroon/90 dark:hover:bg-mauve/90 focus:outline-none focus:ring-2 focus:ring-maroon dark:focus:ring-mauve transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </form>
  )
}

export default TodoForm 