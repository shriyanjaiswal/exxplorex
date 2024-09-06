import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HotelForm = () => {
  const [adult, setAdult] = useState(1);
  const [room, setRoom] = useState(1);
  const [children, setChildren] = useState(0);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="p-10 flex flex-col justify-center items-center gap-10 w-full">
      <div className="relative w-full max-w-[665px]">
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search your destination{" "}
        </label>

        <input
          type="text"
          id="Search"
          placeholder="Search your destination..."
          className="w-full px-4 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm text-lg focus:ring-2 focus:ring-green-500 outline-none"
        />

        <span className="absolute inset-y-0 end-0 grid w-14 place-content-center">
          <button type="button" className="text-green-600 hover:text-green-700">
            <span className="sr-only">Search your destination </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      {/* date picker */}
      <div className="flex justify-center  w-full gap-8">
        <div className="flex justify-center items-center gap-4">
          <p className="text-gray-700">Starts on</p>
          <div className="relative max-w-sm">
            <div className="absolute z-10 inset-y-0 end-0 flex items-center pr-4 ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <DatePicker
              className="text-gray-700 rounded-md px-4 py-2 outline-none border border-green-500"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-gray-700">Ends on</p>
          <div className="relative max-w-sm">
            <div className="absolute z-10 inset-y-0 end-0 flex items-center pr-4 ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <DatePicker
              className="text-gray-700 rounded-md px-4 py-2 outline-none border border-green-500" 
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </div>
      </div>
      {/* select person and room */}
      <div className="flex justify-center items-center gap-12 w-full">
        <div className="flex justify-center items-center gap-4">
          <p htmlFor="adult" className="text-lg text-gray-700 ">
            Adult
          </p>
          <div className="border w-fit border-green-500 rounded-xl">
            <button
              type="button"
              className="bg-green-500 text-white rounded-l-lg px-4 py-2"
              onClick={() => {
                if (adult > 1) {
                  setAdult((prev) => prev - 1);
                }
              }}
            >
              -
            </button>
            <span className="px-4 py-2">{adult}</span>
            <button
              type="button"
              className="bg-green-500 text-white rounded-r-lg px-4 py-2"
              onClick={() => {
                setAdult((prev) => prev + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p htmlFor="adult" className="text-lg text-gray-700 ">
            Room
          </p>
          <div className="border w-fit border-green-500 rounded-xl">
            <button
              type="button"
              className="bg-green-500 text-white rounded-l-lg px-4 py-2"
              onClick={() => {
                if (room > 1) {
                  setRoom((prev) => prev - 1);
                }
              }}
            >
              -
            </button>
            <span className="px-4 py-2">{room}</span>
            <button
              type="button"
              className="bg-green-500 text-white rounded-r-lg px-4 py-2"
              onClick={() => {
                setRoom((prev) => prev + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p htmlFor="adult" className="text-lg text-gray-700 ">
            Children
          </p>
          <div className="border w-fit border-green-500 rounded-xl">
            <button
              type="button"
              className="bg-green-500 text-white rounded-l-lg px-4 py-2"
              onClick={() => {
                if (children > 0) {
                  setChildren((prev) => prev - 1);
                }
              }}
            >
              -
            </button>
            <span className="px-4 py-2">{children}</span>
            <button
              type="button"
              className="bg-green-500 text-white rounded-r-lg px-4 py-2"
              onClick={() => {
                setChildren((prev) => prev + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          type="button"
          className="bg-green-500 text-white rounded-md px-4 py-2 w-full max-w-[665px]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HotelForm;
