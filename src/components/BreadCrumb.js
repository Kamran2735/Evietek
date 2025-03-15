'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = ({ title, backgroundImage, backgroundPosition = 'center' }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <div
      className="relative w-full h-[250px] flex items-center bg-cover"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: backgroundPosition 
      }}
    >
      <div className="w-full h-full bg-black/50 absolute top-0 left-0" />
      <div className="relative z-10 px-8 md:px-36 text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <nav className="text-sm mt-2">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            {pathSegments.map((segment, index) => {
              const href = '/' + pathSegments.slice(0, index + 1).join('/');
              const isLast = index === pathSegments.length - 1;

              return (
                <li key={href} className="flex items-center space-x-2">
                  <span className="text-gray-400">/</span>
                  {isLast ? (
                    <span className="text-white font-semibold capitalize">
                      {segment.replace(/-/g, ' ')}
                    </span>
                  ) : (
                    <Link href={href} className="text-gray-300 hover:text-white capitalize">
                      {segment.replace(/-/g, ' ')}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
