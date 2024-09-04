import React, { useEffect, useState } from "react";
import Card from "./Card";

import { MdArrowRightAlt } from "react-icons/md";
import FlashCounter from "./FlashCounter";
import Browse from "./Browse";
import BestSalling from "./BestSalling";
import Layout from "./Layout";

import Services from "./Services";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        // .catch() is now correctly chained to the promise
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="bg-black w-full max-w-[1000px] h-[400px] flex justify-center items-center mr-5 mx-auto mt-20 relative">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full max-w-[500px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H722CVL4Cv9cjKLiJY2ptl0zM8PZ2NvnuYGt9MMI3oRGaWo5L~PNw3Hturs4CaJ3Fxd6wS5OVVJwp1tV6k-AHoHl6Xuo0XkCwCvUhn824KH5di6rUxOnL581Opv9YkrXaExcfR2bGv43vXIiBc5OTn59LFociNKXxtCO1dImSyNo-bjYgsflanbyQnbKRHaTP2e~eti-6VMtjvaZqA6ISXQ2kgVe5EgRA46qV0rvpxK~1i~-FPWGHkK7oNykuTkWWswkwdP2i-mGUbodhB6HRVGM4pYvk8on02wKMMRbzBsRhWm~p0oZcATOf5u0QeZM8Qng5gVQk~Qh4zg3MVzOlQ__"
              alt="coverImage"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute left-4 sm:left-10 top-1/4 transform -translate-y-1/2">
            <p className="text-white text-3xl pt-10 sm:text-5xl lg:text-6xl font-bold">
              Up to 10% off <br /> Voucher
            </p>
            <div className="flex items-center">
              <h3 className="text-white pt-6 sm:pt-9 flex items-center">
                Show More
                <MdArrowRightAlt className="text-white ml-2" size={20} />
              </h3>
            </div>
          </div>
        </div>

        <div className="pt-20 pb-10">
          <small className="text-red-600 ont-semibold">
            {" "}
            <span className="w-[30px] h-[40px] bg-red-500 border  rounded-sm">
              k
            </span>
            Today's
          </small>
          <div className="flash flex gap-5 items-center ">
            <h1 className="pt-5 text-2xl">Flash Sales:</h1>
            <FlashCounter initialHours={2} />
          </div>
        </div>
        <div className="flex space-x-3 overflow-scroll no-scrollbar">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <div className="pt-20 pb-20 flex justify-center items-center">
          <button className="bg-red-500 text-white py-2 px-5 rounded-none">
            View All Product
          </button>
        </div>
        <div className="browse">
          <Browse />
        </div>
        <div className="best">
          <BestSalling />
        </div>

        <div className="layout">
          <Layout />
        </div>

        <div>
          <Services />
        </div>
      </div>
    </>
  );
};

export default Home;
