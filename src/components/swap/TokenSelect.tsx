import { Token } from '../../types/token';

interface TokenSelectProps {
  value?: Token;
  onChange: (token: Token) => void;
  label: string;
  showMax?: boolean;
}

export function TokenSelect({ value, onChange, label, showMax }: TokenSelectProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-500">{label}</span>
        {showMax && <button className="text-sm text-blue-600">Max</button>}
      </div>
      <div className="flex justify-between">
        <input
          type="number"
          placeholder="0.0"
          className="bg-transparent text-2xl outline-none w-2/3"
        />
        <button className="px-3 py-1 bg-gray-200 rounded-lg text-sm font-medium">
          {value?.symbol || 'Select Token'}
        </button>
      </div>
    </div>
  );
}