import HotelCard from './cards/HotelCard'

const TopRatedHotel = () => {
  return (
    <div className=' pt-28 pb-4 w-full overflow-hidden'>
        <div className=''>
        <h2 className='text-3xl font-bold text-green-500'>Top Rated Hotels</h2>
        <div className='flex gap-2 w-full overflow-x-auto carousel-scrollbar pb-10'>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
      </div>
      </div>
    </div>
  )
}

export default TopRatedHotel
