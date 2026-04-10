interface BERTTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export default function BERTTable({ headers, rows, caption }: BERTTableProps) {
  if (!headers || !rows || rows.length === 0) return null;
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        {caption && (
          <caption className="text-left font-semibold text-gray-700 mb-2 caption-top">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-blue-700 text-white">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold border border-blue-800">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 border border-gray-200 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
