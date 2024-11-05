function BackupRestore({ todos, setTodos }) {
  const handleBackup = () => {
    const data = JSON.stringify(todos)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'todos-backup.json'
    a.click()
  }

  const handleRestore = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const todos = JSON.parse(e.target.result)
      setTodos(todos)
    }
    reader.readAsText(file)
  }

  return (
    <div className="border-t border-mauve/20 pt-6 mt-6">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button 
          onClick={handleBackup}
          className="w-full sm:w-auto px-4 py-2 rounded-lg bg-maroon/10 dark:bg-mauve/10 text-maroon dark:text-mauve hover:bg-maroon/20 dark:hover:bg-mauve/20 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>Download Backup</span>
        </button>
        <div className="relative w-full sm:w-auto">
          <input
            type="file"
            accept=".json"
            onChange={handleRestore}
            className="w-full cursor-pointer rounded-lg border border-mauve/20 text-sm text-blue dark:text-cloud
              file:mr-4 file:py-2 file:px-4 
              file:rounded-lg file:border-0 
              file:text-sm file:bg-maroon/10 dark:file:bg-mauve/10 
              file:text-maroon dark:file:text-mauve
              hover:file:bg-maroon/20 dark:hover:file:bg-mauve/20
              file:transition-colors file:duration-200"
          />
        </div>
      </div>
    </div>
  )
}

export default BackupRestore;