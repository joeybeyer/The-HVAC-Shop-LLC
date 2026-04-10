interface TLDRSummaryProps {
  bullets: string[];
  heading?: string;
}

export default function TLDRSummary({ bullets, heading = 'Quick Facts' }: TLDRSummaryProps) {
  if (!bullets || bullets.length === 0) return null;
  return (
    <section className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
      <h2 className="text-lg font-bold text-gray-900 mb-3">{heading}</h2>
      <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
}
