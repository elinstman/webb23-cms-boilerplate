export default function Hero({ blok }) {
    return (
        <section className="flex items-center justify-center w-full min-h-screen p-8">
            <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
                {/* Text container */}
                <div className="flex flex-col items-start w-full md:w-1/2 space-y-4">
                    <h1 className="text-4xl font-bold text-black">{blok?.title || 'Default Title'}</h1>
                    <p className="text-lg text-black">{blok?.description || 'Default description text.'}</p>
                    {blok?.button && (
                        <div className="flex justify-center w-full">
                            <a 
                                href={blok.button.url || '#'} 
                                title={blok.button.title || 'Click here'} 
                                rel={blok.button.rel || 'noopener noreferrer'}
                                className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                            >
                                {blok.button.title || 'Button'}
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
