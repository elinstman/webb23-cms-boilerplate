import Link from 'next/link';


export default function Footer({ blok }) {

    console.log("footer data", blok.footerTitle);

    // const { logo, logoText, headerNav } = blok?.content || {};
    
    return (
        <>
        <span className="block w-full h-0.5 bg-gray-200 shadow-md"></span>
        <footer className="bg-white shadow-md p-4">
            <div className="container mx-auto flex items-center justify-center gap-4 shadow-t-lg">
                {/* Title */}
                <div className="flex items-center">
                    <span className="ml-2 text-md">{blok?.footerTitle || 'Default Logo Text'}</span>
                </div>
                {/* Navigation Links */}
                <nav className="flex space-x-4">
                    {blok?.footerNav?.map((item) => (
                        <Link key={item._uid} className="text-blue-500 hover:underline" href={item.link.cached_url || '#'}>
                            {item.linkName}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
         </>
        
    );
}
