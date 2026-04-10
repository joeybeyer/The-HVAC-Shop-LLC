import Link from 'next/link';
import { buildBreadcrumbSchema } from '@/lib/seo';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const allItems = [{ name: 'Home', path: '/' }, ...items];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(allItems)) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 py-2 px-4 md:px-0">
        <ol className="flex flex-wrap items-center gap-1">
          {allItems.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i < allItems.length - 1 ? (
                <>
                  <Link href={item.path} className="hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
