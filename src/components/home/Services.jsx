import React from "react";
import { FaHeadphones } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiDeliveryTruck } from "react-icons/ci";

const Services = () => {
  return (
    <section class="service flex flex-col mt-20 md:flex-row justify-between items-center py-8 space-y-6 md:space-y-0 md:space-x-8 pb-15">
      <div class="services flex flex-col items-center text-center">
        <div class="service-container bg-gray-100 p-4 rounded-full">
          <div class="service-info">
            <CiDeliveryTruck size={20} />
          </div>
        </div>
        <h4 class="mt-4 text-lg font-semibold">FREE AND FAST DELIVERY</h4>
        <p class="mt-2 text-gray-600">Free delivery for all orders over $140</p>
      </div>

      <div class="services flex flex-col items-center text-center">
        <div class="service-container bg-gray-100 p-4 rounded-full">
          <div class="service-info">
            <VscWorkspaceTrusted size={20} />
          </div>
        </div>
        <h4 class="mt-4 text-lg font-semibold">24/7 CUSTOMER SERVICE</h4>
        <p class="mt-2 text-gray-600">Friendly 24/7 customer support</p>
      </div>

      <div class="services flex flex-col items-center text-center">
        <div class="service-container bg-gray-100 p-4 rounded-full">
          <div class="service-info">
            <FaHeadphones size={20} />
          </div>
        </div>
        <h4 class="mt-4 text-lg font-semibold">MONEY BACK GUARANTEE</h4>
        <p class="mt-2 text-gray-600">We return money within 30 days</p>
      </div>
    </section>
  );
};

export default Services;
