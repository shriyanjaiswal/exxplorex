import HotelCard from './cards/HotelCard'
import HotelImage1 from "../assets/images/hotel-room-1.jpg"
import HotelImage2 from "../assets/images/hotel-room-2.jpg"
import HotelImage3 from "../assets/images/hotel-room-3.jpg"
import HotelImage4 from "../assets/images/hotel-room-4.jpg"

const TopRatedHotel = () => {
  return (
    <div className=' pt-28 pb-4 w-full overflow-hidden'>
        <div className=''>
        <h2 className='text-3xl font-bold text-green-500'>Top Rated Hotels</h2>
        <div className='flex gap-2 w-full overflow-x-auto carousel-scrollbar pb-10'>
        <HotelCard imageUrl={HotelImage1} address="Royal Palace Hotel, Bangalore"/>
        <HotelCard imageUrl={HotelImage2} address="Sea Breeze Resort, Mumbai"/>
        <HotelCard imageUrl={HotelImage3} address="Green Valley Hotel, Dehradun"/>
        <HotelCard imageUrl={HotelImage4} address="Hotel Sunrise, Gurgaon"/>
      </div>
      </div>
    </div>
  )
}

export default TopRatedHotel
