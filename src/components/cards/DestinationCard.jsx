const DestinationCard = (props) => {
  return (
    <div>
      <a href="#" className="block p-4 max-w-[450px]">
        <img
          alt=""
          // eslint-disable-next-line react/prop-types
          src={props.imageUrl}
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {/* eslint-disable-next-line react/prop-types */}
            {props.title}
        </h3>

        <p className="mt-2 max-w-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          reiciendis sequi ipsam incidunt.
        </p>
      </a>
    </div>
  );
};

export default DestinationCard;
