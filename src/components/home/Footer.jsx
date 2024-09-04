import React from "react";

const Footer = () => {
  return (
    <footer class="bg-black text-white py-8">
      <div class="footer-container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        <div class="footer__info flex flex-col items-start space-y-4">
          <div class="footer__logo">
            <a href="#" class="text-2xl font-bold text-white">
              Exclusive
            </a>
          </div>
          <a
            href="#"
            class="text-yellow-400 hover:text-yellow-500 font-semibold"
          >
            Subscribe
          </a>
          <div class="footer__text">
            <p>Get 10% off your first order</p>
          </div>
          <div class="footer__input flex space-x-2">
            <input
              class="input-text p-2 rounded-md w-full text-gray-800"
              type="text"
              placeholder="Enter your email"
            />
            <a href="#">
              <img
                class="send w-8 h-8"
                src="/assets/img/icon-send.png"
                alt="Send"
              />
            </a>
          </div>
        </div>

        <div class="footer__info space-y-2">
          <div class="footer__title">
            <h4 class="text-lg font-semibold">Account</h4>
          </div>
          <div class="footer__links flex flex-col space-y-1">
            <a href="#" class="footer__link hover:underline">
              My Account
            </a>
            <a href="#" class="footer__link hover:underline">
              Login / Register
            </a>
            <a href="#" class="footer__link hover:underline">
              Cart
            </a>
            <a href="#" class="footer__link hover:underline">
              Shop
            </a>
            <a href="#" class="footer__link hover:underline">
              Wishlist
            </a>
          </div>
        </div>

        <div class="footer__info space-y-2">
          <div class="footer__title">
            <h4 class="text-lg font-semibold">Information</h4>
          </div>
          <div class="footer__links flex flex-col space-y-1">
            <a href="#" class="footer__link hover:underline">
              About Us
            </a>
            <a href="#" class="footer__link hover:underline">
              Delivery Information
            </a>
            <a href="#" class="footer__link hover:underline">
              Privacy Policy
            </a>
            <a href="#" class="footer__link hover:underline">
              Terms & Conditions
            </a>
            <a href="#" class="footer__link hover:underline">
              Contact Us
            </a>
            <a href="#" class="footer__link hover:underline">
              Returns
            </a>
          </div>
        </div>

        <div class="footer__info space-y-2">
          <div class="footer__title">
            <h4 class="text-lg font-semibold">Support</h4>
          </div>
          <div class="footer__links flex flex-col space-y-1">
            <a href="#" class="footer__link hover:underline">
              Help Center
            </a>
            <a href="#" class="footer__link hover:underline">
              Returns
            </a>
            <a href="#" class="footer__link hover:underline">
              Product Recalls
            </a>
            <a href="#" class="footer__link hover:underline">
              Accessibility
            </a>
            <a href="#" class="footer__link hover:underline">
              Contact Us
            </a>
            <a href="#" class="footer__link hover:underline">
              Store Pickup
            </a>
          </div>
        </div>

        <div class="footer__info space-y-2">
          <div class="footer__title">
            <h4 class="text-lg font-semibold">Newsletter</h4>
          </div>
          <div class="footer__links flex flex-col space-y-1">
            <a href="#" class="footer__link hover:underline">
              Sign Up for Our Newsletter
            </a>
            <a href="#" class="footer__link hover:underline">
              Get Offers
            </a>
            <a href="#" class="footer__link hover:underline">
              Get $140 Coupon
            </a>
            <a href="#" class="footer__link hover:underline">
              Get New Deals
            </a>
            <a href="#" class="footer__link hover:underline">
              Get New Products
            </a>
            <a href="#" class="footer__link hover:underline">
              Get Top Deals
            </a>
          </div>
        </div>
      </div>

      <hr class="border-t border-gray-700 my-8" />

      <div class="copyright text-center">
        <div class="container max-w-6xl mx-auto">
          <div class="copy__text">
            <p class="text-sm">© 2022 K. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
