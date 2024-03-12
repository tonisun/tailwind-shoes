import { Card } from "./Card";


export function AllProducts({items}){

    return (
        <div className="mt-20">
            <div className="flex-center">
                
                {/* Title */}
                <div className="text-4xl font-extrabold bg-[url('./assets/lines.pgn')] bg-center">
                    NEW PRODUCTS    
                </div>
                
            </div>
            
            {/* The List */}
            <div className="grid justify-between grid-cols-1 mt-10 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                    <Card key={item.id} item={item} />
                ))} 
            </div>
            
        </div>
    )
}
