import Nike1 from '../assets/n1-min.png'
import { QTYS, SIZES } from '../constant'
import { Select } from './Select'

export function ShoeDetail(){
  return (
    <div className="flex flex-col space-y-4 text-left lg:flex-row-reverse">

        {/* Image */}
        <div className="flex-1 lg:-mt-40 lg:ml-28">
            <div className='flex-center h-full bg-gradient-to-br from-[#f637cf] from-5% via-[#e3d876] via-30% to-[#4dd4c6]'>
                <img className='animate-floatX' src={Nike1} alt="Nike 1 Shoe" />
            </div>
        </div>

        {/* Details */}
        <div className="flex-1 space-y-6">

            {/* Name Title */}
            <div className="text-5xl font-black md:text-9xl">
                Nike Air Max 270
            </div>

            {/* Description */}
            <div className="font-medium md:text-xl">
                {
                    "The Nike Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradien."
                }
            </div>

            {/* All in a Row div */}
            <div className='flex space-x-6'>
                {/* Price */}
                <div className="text-3xl font-extrabold md:text-6xl">
                    100 $
                </div>

                {/* Select Quantity*/}
                <Select title={"QTY"} options={QTYS} />

                {/* Select Size*/}
                <Select title={"SIZE"} options={SIZES} />
            </div>


            <div className="space-x-10">

                {/* Button */}
                <button className="text-white bg-black btn-press-anim h-14 w-44 hover:bg-gray-600 active:bg-gray-300">
                    Add to bag
                </button>

                {/* Link View Details */}
                <a href="#" className="text-lg font-bold underline underline-offset-4">View details</a>

            </div>
        </div>
    </div>
  )
}

