import DestinationCard from "./cards/DestinationCard"
import varanasiImage from '../assets/images/varanasi.jpg'
import delhiImage from '../assets/images/delhi.jpg'
import mumbaiImage from '../assets/images/mumbai.jpg'

const TopDestination = () => {
  return (
    <div className=' pt-28 w-full overflow-hidden'>
    <div className=''>
    <h2 className='text-3xl font-bold text-green-500'>Top destinations in India</h2>
    <div className='flex gap-2 w-full overflow-x-auto carousel-scrollbar pb-10'>
    <DestinationCard imageUrl={varanasiImage} title="Varanasi"/>
    <DestinationCard imageUrl={delhiImage} title="Delhi"/>
    <DestinationCard imageUrl={mumbaiImage} title="Mumbai"/>
  </div>
  </div>
</div>
  )
}

export default TopDestination
