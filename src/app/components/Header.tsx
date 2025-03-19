import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Future Site
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/activities" className="hover:text-blue-500">
                Activities
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}