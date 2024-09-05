export default function ImageWithText( { blok }) {
    return (
        <section className="flex items-center justify-center w-full min-h-screen p-5 md:min-h-[70vh] lg:min-h-[60vh]">
            <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
                

                {/* Text container */}
                <div className="flex flex-col items-start w-full md:w-1/2 space-y-4">
                    <h1 className="text-4xl font-bold text-black">{blok?.title || 'Default Title'}</h1>
                    <p className="text-lg text-black">{blok?.text || 'Default description text.'}</p>
                    {blok?.link && (
                        <div className="">
                            <a 
                                key={blok.link.uid}
                                href={blok.link.url || '#'} 
                                title={blok.link.title || 'Click here'} 
                                className="inline-block px-4 py-2 text-gray-800 rounded hover:text-black transition-transform transform hover:scale-105"
                            >
                                {blok.link.title || 'Link'}
                            </a>
                        </div>
                    )}
                </div>
                {/* Image container */}
                <div className="flex-shrink-0 w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
                    <img 
                        src={blok?.image?.filename} 
                        alt={blok?.image?.alt || 'Image description'} 
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    )
}