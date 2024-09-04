import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCart";

function Header() {
  const { cartQuantity } = useShoppingCart();
  return (
    <header className="bg-white text-black p-4 shadow-sm">
      <div className="container flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold">Exclusive</h1>

        <nav className="flex-grow mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li>
              <Link to={"/"} className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                href="#about"
                className="hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to={"/signup"} className="hover:text-gray-300">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center mt-4 md:mt-0 space-x-2">
          <div className="flex rounded-lg  border-gray-300">
            <input
              type="text"
              placeholder="What are you looking for"
              className="border-none outline-none text-sm w-32 md:w-64"
            />
            <FaSearch className="text-gray-500 mr-14" />
          </div>

          <div className="flex items-center gap-3 ml-4">
            <CiHeart size={20} className="text-black" />
            <Link to={"/cart"} className="w-3 h-3 relative">
              <MdOutlineShoppingCart
                size={20}
                className="text-black cursor-pointer "
              />
              <div className="rounded-full bg-red-500 flex justify-center items-center absolute bottom-0 right-0 w-6 h-6 text-white text-sm">
                {cartQuantity}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
