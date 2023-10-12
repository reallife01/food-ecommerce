import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, loading,id }) => {
  return (
    <div className="bg-gray-500 shadow-md p-2 rounded-l-2xl min-w-[150px] hover:shadow-inner cursor-pointer">
      {name ? (
        <>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})} >
          <div className="w-40 min-h-[150px]">
            <img src={image} className="h-full w-full" />
          </div>
          <h3 className="font-semibold text-zinc-800 text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-red-200  font-medium">{category}</p>
          <p className="text-center font-bold text-white">
            <span className="text-zinc-800">₦</span>
            <span>{price}</span>
          </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
