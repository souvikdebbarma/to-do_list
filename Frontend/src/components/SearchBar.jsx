import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search todos..."
          className="w-full px-4 py-2 pl-10 rounded-lg border-2 border-mauve/30 focus:border-mauve focus:outline-none bg-white/80 dark:bg-blue/80 dark:text-cloud"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-mauve/50" />
      </div>
    </div>
  )
}

export default SearchBar 