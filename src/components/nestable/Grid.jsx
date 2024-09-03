export default function Grid({ blok }) {
    return (
        <div className="flex justify-center p-4"> 
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl gap-4 p-12">
        {blok.imageWithText.map((item) => (
          <div key={item._uid} className=" flex flex-col border p-2 rounded-md shadow-md w-full">
            {item.image?.filename && (
                 <div className=" flex-shrink relative w-full h-48 mb-2">
              <img 
                src={item.image.filename} 
                alt={item.image.alt || 'Image'} 
                className="w-full h-full object-cover mb-4 rounded-md" 
              />
              </div>
            )}
            <div className="flex-1 flex flex-col justify-center items-center p-2"> 
            {item.title && (
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            )}
            {item.text && (
              <p className="text-gray-700 text-sm">{item.text}</p>
            )}
            </div>
          </div>
        ))}
      </section>
      </div>
    )
}