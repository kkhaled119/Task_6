import React from "react";
import { GiShop } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiDeliveryTruck } from "react-icons/ci";

export const About = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center order-last md:order-first">
            <h1 className="text-4xl pb-10 font-semibold">Our Stroy</h1>
            <p className="mb-4">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="pt-10">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>

          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPM-5k7lvdS38KslPId0BtxVjADDe88GzGN9Yldm7~NreAL54xBidW5nN6M7XUbZomnbCaGK2yiTEiRIvTz1v3pKTwyhLu-BPpR1-JFItmSZABmScnixPBMGgOc04l7NF5pbY~XzstJxB6ywG8BQ8UK12IUpIpdo1wbzsj6Xe-8KK496BF4l4mqwKxiYm3Uc12KKjW9fI~v1~~gL0NBrcXUMz6XcDnVxGmKHkiA9tjGDS7mROwg1injlyoOTiwIGpUmM6x-FKx3uMeJy29deInNA7vLjBJ6Xd0Rn26cSbmi0JvbWw3A5jqHALn9vWfXLrnGDvU8sLYJdNv-qNu5Tow__"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-20 justify-center gap-20 ">
        <div className="flex flex-col items-center border-2 border-black w-[250px] h-[170px] p-4">
          <GiShop size={40} />
          <p className="text-center font-bold text-xl mt-2">10.5k </p>
          <small>Sallers active our site</small>
        </div>

        <div className="flex flex-col items-center border-2 border-black bg-red-500 w-[250px] h-[170px] p-4">
          <LuCircleDollarSign size={40} color="white" />

          <p className="text-center font-bold text-xl mt-2 text-white">33k </p>
          <small className="text-white">Mopnthly Produduct Sale</small>
        </div>

        <div className="flex flex-col items-center border-2 border-black  w-[250px] h-[170px] p-4">
          <FaShoppingBag size={40} />
          <p className="text-center font-bold text-xl mt-2">45.5k </p>
          <small>Customer active in our site</small>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
        <div className="flex flex-col items-center bg-[#F5F5F5] p-4 rounded-lg shadow-lg">
          <img
            src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BtJd1tEDFc7~bGvsaaajJqgG8BIyMbAxAWZGtAgGPUp3wvIynUaGDpXY95ajJSDowvlNtSEDqj6cth0QG7i7YYUnMny5nYHsT7iILMapfUVscx9VPAHa3Y1Mj7Q9B4QIR9W~x7vuK5WDTIiaePp689S0kqbl1BskHFMbJBfgcOa5BLzIcTvcxAz5CU-jXS95c6nzGSZExliIVBujoUd85Yo2NT42smBmv4BdpztrUWTYixMk2l3LU46kDlAUYDs-7yycgsV3LPeSEsZUhQRHtqGDdU4I4eOGrsn7q9~FjhlUNzSYK~ldoITUrNqhRog0fe7Z-TQbzxLjDtQV4LIrOA__"
            alt="Image 1"
            className="w-[200px] rounded-full"
          />
          <h2 className="mt-2 text-sm text-center">Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <div className="social pt-4 flex gap-4">
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#F5F5F5] p-4 rounded-lg shadow-lg">
          <img
            src="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5Po4fydAXFdMW86W0vl26khZSitnWlReMoPCTlmPzasJ8nh0n79STVBSZuH13-dblW6l1U-Y7AEAZK1O7nOZoqYPG3K3PXIhGmrwdo69CEVyeJVu2GQmoXScchLKka-2nGmFOpSjiOEap274-gOt6EFECkSKC7gG3SUoGyY1yZSAx5L4eo-60g~55mV6xLRSB4UVd6koXFNoGI26MPx0IeTInZbNstqhhN-VJ4VIuOFXHTxjOa6ds5r7aAsRUm5iFGFPSEAYPteui7IBTnMLjV1lg8~874tHGPt7s~ufi-I-HWs~BzyvSbLPAoCQKgC3ftVQJxZWb5hp~xhuM7L9w__"
            alt="Image 2"
            className="w-[200px] rounded-full"
          />
          <h2 className="mt-2 text-sm text-center">Emma Watson</h2>
          <p>Managing Director</p>
          <div className="social pt-4 flex gap-4">
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#F5F5F5] p-4 rounded-lg shadow-lg">
          <img
            src="https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O53WT08Qmca-ZTky9dWM3-QHO16-mQ1SVBxv-3WGVtuRUPvXmjkKZJtbjjl6zrIjjb1sAIUtxK1Z4DclDWqKHloMUWAFzoZjXloEa45LJAOpd7c21tG~nmyn~ykM7mF4PBtdMl2~H5tcCbtur8XtvOCoZxMP2velCKI10n2jOLX6kAfpK-58oIteX3KwYLiHRrELDV~HkwULA4u2DbHYO5cnGdfFDc2JqP1olSik~FiZQrN6jsQnjC-xSS3vsrvL3fhAlAdt3fyRsfKvD4Piof-SGCDaw0MTOOS8LSxckDsZiUphxyDqvELFjkspP-hbtCGqkT7tLKC8WulWr~jDlQ__"
            alt="Image 3"
            className="w-[200px] rounded-full"
          />
          <h2 className="mt-2 text-sm text-center">Will Smith</h2>
          <p>Product Designer</p>
          <div className="social pt-4 flex gap-4">
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
      <section class="service flex flex-col mt-20 md:flex-row justify-between items-center py-8 space-y-6 md:space-y-0 md:space-x-8 ml-10 mr-10 pb-15">
        <div class="services flex flex-col items-center text-center">
          <div class="service-container bg-gray-100 p-4 rounded-full">
            <div class="service-info">
              <CiDeliveryTruck size={20} />
            </div>
          </div>
          <h4 class="mt-4 text-lg font-semibold">FREE AND FAST DELIVERY</h4>
          <p class="mt-2 text-gray-600">
            Free delivery for all orders over $140
          </p>
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
    </div>
  );
};
