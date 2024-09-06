import Menubar from "../components/Menubar";
import TopDestination from "../components/TopDestination";
import TopRatedHotel from "../components/TopRatedHotel";
import HotelForm from "../components/forms/HotelForm";

const Home = () => {
  return (
    <>
      <div className="mx-10">
        <div className="flex justify-center items-center">
          <div className="h-full max-h-96 bg-gray-100 w-full max-w-[900px] pt-14">
            <div className="flex flex-col justify-center items-center relative">
              <div className="z-10 absolute -top-6 ">
                <Menubar />
              </div>
              <div className="h-96 bg-gray-100 w-full shadow-lg pt-6">
                <HotelForm />
              </div>
            </div>
          </div>
        </div>
        <div className="">
        <TopRatedHotel />
        </div>
        <div className="">
        <TopDestination/>
        </div>
      </div>
    </>
  );
};

export default Home;
