function SortOptions({ setSortBy }) {
  return (
    <select 
      onChange={(e) => setSortBy(e.target.value)}
      className="px-3 py-2 rounded-lg border-2 border-mauve/30 focus:border-mauve focus:outline-none bg-white/80 dark:bg-blue/50 text-blue dark:text-cloud"
    >
      <option value="date">Date Added</option>
      <option value="priority">Priority</option>
      <option value="alphabetical">Alphabetical</option>
      <option value="dueDate">Due Date</option>
    </select>
  )
} 

export default SortOptions;