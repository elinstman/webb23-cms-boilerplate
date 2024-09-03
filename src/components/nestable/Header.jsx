import Link from 'next/link';


export default function Header({ blok }) {

    console.log("header data", blok);

    // const { logo, logoText, headerNav } = blok?.content || {};
    
    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={blok?.logo?.filename} alt={blok?.logo?.alt || 'Logo'} className="h-10"/>
                    <span className="ml-2 text-xl font-bold">{blok?.logoText || 'Default Logo Text'}</span>
                </div>
                {/* Navigation Links */}
                <nav className="flex space-x-4">
                    {blok?.headerNav?.map((item) => (
                        <Link key={item._uid} className="text-blue-500 hover:underline" href={item.link.cached_url || '#'}>
                            {item.linkName}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
