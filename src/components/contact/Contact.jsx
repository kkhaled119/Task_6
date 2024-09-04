import React from "react";

export const Contact = () => {
  return (
    <main className="main">
      <div className="container mx-auto p-4">
        <div className="contact flex flex-col lg:flex-row">
          <div className="contact__info flex-1">
            <div className="flex items-center mb-6">
              <div className="bg-red-500 rounded-full w-10 h-10 flex justify-center items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icons-phone">
                    <rect width="40" height="40" rx="20" fill="#DB4444" />
                    <path
                      id="Vector"
                      d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <p className="info ml-4 text-lg font-semibold">Contact Us</p>
            </div>

            <div className="contact-text mb-6">
              <p className="contact__text">
                We are available 24/7, 7 days a week.
              </p>
              <br />
              <p>Phone: +8801611112222</p>
            </div>
            <hr className="mb-6" />
            <div className="flex items-center mb-6">
              <div className="bg-red-500 rounded-full w-10 h-10 flex justify-center items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icons-phone">
                    <rect width="40" height="40" rx="20" fill="#DB4444" />
                    <path
                      id="Vector"
                      d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <p className="info ml-4 text-lg font-semibold">Write To US</p>
            </div>

            <div className="contact-text">
              <p className="contact__text">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <br />
              <p>Emails: customer@exclusive.com</p>
              <br />
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>

          <div className="form flex-1 mt-8 lg:mt-0">
            <form className="form__container bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="form-info flex flex-col space-y-6">
                <div className="form__group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form__input w-full p-4 rounded-lg border border-gray-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form__input w-full p-4 rounded-lg border border-gray-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form__input w-full p-4 rounded-lg border border-gray-300"
                    placeholder="Enter your Phone "
                  />
                </div>
              </div>

              <div className="form__group mt-6">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="form__input w-full p-4 rounded-lg border border-gray-300"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button className="form__btn mt-6 w-full py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
