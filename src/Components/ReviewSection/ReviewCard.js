import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Stars from "react-stars-display";

const ReviewCard = ({ reviewData }) => {
  const { img, comment, age, service, rating, name } = reviewData;
  return (
    <div>
      <div className="h-60 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800  border lg:w-[600px] lg:gap-10 relative">
        <div className="flex items-center space-x-4 w-full">
          <img
            className="p-1 w-12 h-12 lg:w-28 lg:h-28 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 border"
            src={img}
            alt="Bordered avatar"
          />
          <div className="font-medium dark:text-white lg:mb-14">
            <div className="text-xs lg:text-xl text-green-500">{name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {age} years old
            </div>
            <div className="text-xs text-green-500 font-semibold absolute top-3 right-3">
              {service}
            </div>
            <div className=" text-green-500 font-semibold absolute top-9 right-3">
              <Stars
                stars={rating}
                size={25} //optional
                spacing={2} //optional
                fill="#16A34A" //optional
              />
            </div>
          </div>
        </div>
        <div className="lg:ml-28 lg:mt-[-20px]">
          <div>
            <ImQuotesLeft className="text-2xl text-green-600"></ImQuotesLeft>
          </div>
          <div className="text-sm lg:ml-9 text-gray-600 dark:text-white">{comment}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
