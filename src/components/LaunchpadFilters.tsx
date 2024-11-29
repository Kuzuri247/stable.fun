import { Search } from 'lucide-react';

interface LaunchpadFiltersProps {
  onFilterChange: (status: string) => void;
  onSearch: (query: string) => void;
}

export function LaunchpadFilters({ onFilterChange, onSearch }: LaunchpadFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search tokens..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => onFilterChange('all')}
          className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('live')}
          className="px-4 py-2 rounded-lg bg-green-100 hover:bg-green-200 text-green-700"
        >
          Live
        </button>
        <button
          onClick={() => onFilterChange('upcoming')}
          className="px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700"
        >
          Upcoming
        </button>
        <button
          onClick={() => onFilterChange('ended')}
          className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          Ended
        </button>
      </div>
    </div>
  );
}