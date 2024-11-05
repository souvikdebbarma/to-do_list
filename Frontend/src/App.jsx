import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import SearchBar from './components/SearchBar'
import CategorySelect from './components/CategorySelect'
import Statistics from './components/Statistics'
import SortOptions from './components/SortOptions'
import ThemeToggle from './components/ThemeToggle'
import BackupRestore from './components/BackupRestore'
import DraggableTodoList from './components/DraggableTodoList'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [input, setInput] = useState('')
  const [sortBy, setSortBy] = useState('date')

  // Filter and sort todos
  const filteredAndSortedTodos = todos
    .filter(todo => {
      const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = category === 'all' || todo.category === category
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return b.id - a.id
        case 'priority':
          const priorityOrder = { high: 0, medium: 1, low: 2 }
          return priorityOrder[a.priority] - priorityOrder[b.priority]
        case 'alphabetical':
          return a.text.localeCompare(b.text)
        case 'dueDate':
          return new Date(a.dueDate) - new Date(b.dueDate)
        default:
          return 0
      }
    })

  const addTodo = (todoData) => {
    setTodos([...todos, { 
      id: Date.now().toString(), 
      text: todoData.text,
      dueDate: todoData.dueDate,
      completed: false,
      category: category !== 'all' ? category : 'personal',
      priority: 'medium',
      assigned: false
    }])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleAssign = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, assigned: !todo.assigned } : todo
    ))
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        // Focus search
        document.querySelector('input[type="search"]').focus()
      }
      if (e.ctrlKey && e.key === 'n') {
        e.preventDefault()
        // Focus new todo input
        document.querySelector('input[type="text"]').focus()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="min-h-screen bg-blue dark:bg-cloud p-4 flex flex-col">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto mb-4">
        <div className="flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold text-cloud dark:text-blue">
            Todo List
          </h1>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Box - Controls */}
          <div className="bg-cloud dark:bg-blue shadow-lg rounded-3xl p-6 sm:p-10 h-[calc(100vh-120px)]">
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-semibold text-maroon dark:text-cloud mb-3">
                Add New Todo
              </h2>
              
              <div className="space-y-3">
                <Statistics todos={todos} />
                
                <TodoForm 
                  input={input}
                  setInput={setInput}
                  addTodo={addTodo}
                />

                <div className="flex flex-col sm:flex-row gap-2">
                  <SearchBar 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                  />
                  <SortOptions setSortBy={setSortBy} />
                </div>

                <CategorySelect 
                  category={category}
                  setCategory={setCategory}
                />
              </div>

              <div className="mt-auto pt-2 border-t border-mauve/20">
                <BackupRestore 
                  todos={todos}
                  setTodos={setTodos}
                />
              </div>
            </div>
          </div>

          {/* Right Box - Todo List with glass effect */}
          <div className="bg-white/10 dark:bg-blue/10 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-lg rounded-3xl p-6 sm:p-10 h-[calc(100vh-120px)] flex flex-col">
            <h2 className="text-xl font-semibold text-white mb-4">
              Todo List
            </h2>
            <div className="flex-1 overflow-y-auto pr-2">
              <DraggableTodoList 
                todos={filteredAndSortedTodos}
                setTodos={setTodos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
