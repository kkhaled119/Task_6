import React from "react";

const Layout = () => {
  return (
    <div className="bg-black w-full max-w-[1000px] h-auto lg:h-[400px] flex flex-col lg:flex-row justify-between items-center mx-auto mt-20 relative p-6">
      <div className="text-left text-white w-full max-w-[500px]">
        <small className="text-green-500 mb-4 transform translate-y-10 block lg:inline">
          Categories
        </small>
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
          Enhance Your Music Experience
        </h1>
        <div className="flex flex-wrap pt-5 pb-9 gap-5">
          <p className="rounded-full border border-spacing-1 border-white text-white w-16 h-16 lg:w-20 lg:h-20 flex justify-center items-center">
            23Hours
          </p>
          <p className="rounded-full border border-spacing-1 border-white text-white w-16 h-16 lg:w-20 lg:h-20 flex justify-center items-center">
            23Hours
          </p>
          <p className="rounded-full border border-spacing-1 border-white text-white w-16 h-16 lg:w-20 lg:h-20 flex justify-center items-center">
            23Hours
          </p>
          <p className="rounded-full border border-spacing-1 border-white text-white w-16 h-16 lg:w-20 lg:h-20 flex justify-center items-center">
            23Hours
          </p>
        </div>
        <button className="bg-green-500 text-white pt-4 mt-4 font-bold py-3 w-full lg:w-60 px-4 rounded">
          Buy Now
        </button>
      </div>
      <div className="w-full max-w-[500px] lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 mt-10 lg:mt-0">
        <img
          src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ol3k2z3-novQblbIpF9D5FAswTnUsP2tUUMYMZVS4rSvofZARUH3sje-9TO9sLFFJVAhzp4jLkCR0UcNrFv7tQFSmbpRXV0JTJ6hav3jirE5PtSvcdG6iyfm8APyOYu2-Oq3Njax8MKTN2jD6t0rp7lqozOf4eAmdEUDsQXpYN6aAUvSqQcaIxvOz5HIj3SOsjf7QdsD~ql-6~TBC5z8u-q2s09RfxfJVvyjyUvSjnNuZ~WEq601Ge31WaFDNvTsv~XVZFq~YYPNRRCVOKxSVhWtdrU2wYH5ww36lhKukq9WdWZM-bAxX7NU0YZF~Emd59kmHB71gaPEfPTm3sBaag__"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Layout;
