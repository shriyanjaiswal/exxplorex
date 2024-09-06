import { Link } from "react-router-dom";
import { BedSingle, Plane, CarTaxiFront, TrainFront } from "lucide-react";

const Menubar = () => {
  return (
    <>
      <div className="w-full max-w-[600px] bg-gray-200 rounded-md shadow-lg ">
        <div className="flex justify-center items-center px-6 py-3 gap-6">
          <div>
            <Link
              to="/hotel-search"
              className="flex gap-1 text-green-500 transition-all duration-200"
            >
              {" "}
              <BedSingle /> Hotel
            </Link>
          </div>
          <div>
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-all duration-200">
              {/* <img src={HotelAndFlight} alt="hotel and flight" />  */}
              Flight + Hotel
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="flex gap-1 text-gray-700 hover:text-green-600 transition-all duration-200"
            >
              {" "}
              <Plane />
              Flight
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="flex gap-1 text-gray-700 hover:text-green-600 transition-all duration-200"
            >
              {" "}
              <TrainFront />
              Trains
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="flex gap-1 text-gray-700 hover:text-green-600 transition-all duration-200"
            >
              {" "}
              <CarTaxiFront />
              Cab
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
