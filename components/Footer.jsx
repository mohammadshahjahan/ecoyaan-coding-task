import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-8 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-3">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="font-semibold">Company</div>
            <div className="text-gray-500 text-sm">About Us</div>
            <div className="text-gray-500 text-sm">Sell on Ecoyaan</div>
            <div className="text-gray-500 text-sm">Careers</div>
          </div>
          <div>
            <div className="font-semibold">Links</div>
            <div className="text-gray-500 text-sm">Privacy Policy</div>
            <div className="text-gray-500 text-sm">Terms of Use</div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <div className="font-semibold mx-2">Follow us</div>
            <div className="flex justify-center md:justify-start">
              <FaInstagram className="mx-2" />
              <FaFacebook className="mx-2" />
              <FaLinkedin className="mx-2" />
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-4">
            Subscribe to receive updates on blogs, future launches and more!
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <input
              placeholder="Your email address"
              className="text-center border border-gray-400 px-4 py-2 w-full md:w-auto mb-2 md:mb-0 md:mr-2"
            />
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="font-semibold">Registered Address:</div>
            <div className="text-gray-500 text-sm">1-N-12T-781/1</div>
            <div className="text-gray-500 text-sm">Sri Krishna Vilasa,</div>
            <div className="text-gray-500 text-sm">Urvastores,</div>
            <div className="text-gray-500 text-sm">Ashoknagar(MR),</div>
            <div className="text-gray-500 text-sm">Mangalore,</div>
            <div className="text-gray-500 text-sm">
              Dakshina Kannada- 575006,
            </div>
            <div className="text-gray-500 text-sm">Karnataka, India</div>
          </div>
          <div>
            <div className="font-semibold">Legal Business Name:</div>
            <div className="text-gray-500 text-sm">
              Kindkarma E-Retail Private Limited
            </div>
            <div className="text-gray-500 text-sm">
              CIN: U47912KA2023PTC182592
            </div>
            <div className="text-gray-500 text-sm">
              Telephone: +91 9980490777
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center">
        © 2023 - 2024, Ecoyaan <sup className="text-xs">TM</sup>
      </div>
    </div>
  );
};

export default Footer;
