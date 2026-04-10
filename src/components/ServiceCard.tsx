import Link from 'next/link';

interface ServiceCardProps {
  name: string;
  slug: string;
  shortDesc: string;
}

export default function ServiceCard({ name, slug, shortDesc }: ServiceCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
    >
      <div className="w-10 h-10 bg-blue-100 rounded-lg mb-3 flex items-center justify-center">
        <span className="text-blue-700 text-xl">❄</span>
      </div>
      <h3 className="text-lg font-semibold text-blue-700 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm flex-grow">{shortDesc}</p>
      <span className="text-blue-600 text-sm font-medium mt-3 inline-block">Learn more →</span>
    </Link>
  );
}
