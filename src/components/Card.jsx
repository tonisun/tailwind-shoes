export function Card({item}) {

    return (
      <div className={`${item.className} max-w-xl cursor-pointer transform transition hover:scale-105`}>
        
        {/* Section 1 - Text */}
        <div className="p-8 text-left">
            <div className="text-2xl font-bold">{item.title}</div>
            <div className="mt-10 font-semibold underline underline-offset-4">SHOP NOW +</div> 
        </div>

        {/* Section 2 - Image */}
        <div className="absolute left-[40%] top-5">
            <img src={item.src} alt={item.title + " Picture"} className="w-56 h-40" />
        </div>
        
      </div>   
    )
  }