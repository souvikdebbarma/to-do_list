function Statistics({ todos }) {
  const completed = todos.filter(t => t.completed).length
  const total = todos.length
  const percentage = total ? Math.round((completed / total) * 100) : 0

  return (
    <div className="bg-white/50 dark:bg-blue/30 rounded-xl p-4 space-y-2">
      <div className="flex justify-between text-sm text-blue dark:text-cloud">
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-cloud dark:bg-mauve/30 rounded-full h-2">
        <div 
          className="bg-maroon dark:bg-mauve h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-mauve dark:text-mauve/80">
        <span>{completed} completed</span>
        <span>{total - completed} remaining</span>
      </div>
    </div>
  )
}

export default Statistics 