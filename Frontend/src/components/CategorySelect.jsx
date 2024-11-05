function CategorySelect({ category, setCategory }) {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'work', name: 'Work' },
    { id: 'personal', name: 'Personal' },
    { id: 'urgent', name: 'Urgent' }
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setCategory(cat.id)}
          className={`px-3 py-1 rounded-lg text-sm ${
            category === cat.id 
              ? 'bg-maroon dark:bg-mauve text-cloud' 
              : 'bg-white/50 dark:bg-blue/30 text-blue dark:text-cloud hover:bg-white/70 dark:hover:bg-blue/40'
          } transition-all duration-300`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}

export default CategorySelect 