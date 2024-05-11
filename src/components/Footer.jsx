import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full bg-[#092635] text-white font-roboto py-6 lg:py-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 gap-y-0 w-full lg:px-36 md:px-28 sm:px-20 px-12 pb-12">
        <div className="text-white font-roboto text-lg flex justify-center customsm:text-xl sm:text-2xl lg:text-3xl font-[600] col-span-1  mb-[1.5rem] customsm:mb-[2.63rem]">
          Subscribe to get information, latest news, and other interesting
          offers
        </div>
        <div className="col-span-1 flex items-center justify-start sm:justify-end">
          <input
            type="email"
            placeholder="Your email"
            className="bg-white h-[2rem] sm:h-[2.5rem]  text-slate-800   w-full max-w-xl px-3 focus:outline-none"
          />
          <button className="bg-orange-800 h-[2rem] sm:h-[2.5rem] text-white px-5">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 customsm:grid-cols-2 lg:grid-cols-4 w-full">
        <div className="col-span-1 flex flex-col items-center h-full">
          <div className="font-semibold uppercase text-lg ">Menu</div>
          <div className="mt-2 hover:text-white text-base hover:pl-2 duration-300">
            <Link href="/">Home</Link>
          </div>

          <div className="hover:text-white text-base hover:pl-2 duration-300">
            <Link href="/shop">Shop</Link>
          </div>
          <div className="hover:text-white text-base hover:pl-2 duration-300">
            <Link href="/contact">Contact us</Link>
          </div>
        </div>

        <div className="sm:col-span-1 flex flex-col items-center h-full overflow-hidden ">
          <div className="font-semibold text-lg uppercase">Contact us</div>
          <div className="mt-2 text-base  ">
            <a href="mailto:info@urbandwellings.com">INFO@URBANDWELLINGS.COM</a>
          </div>
          <div className="text-base  ">
            <a href="tel: +977-01-55889873"> +977-01-55889873</a>
          </div>
          <div className="text-base ">
            <a href="tel: +977-01-55889874">+977-01-55889874</a>
          </div>
        </div>

        <div className="sm:col-span-1 flex flex-col items-center h-full">
          <div className="font-semibold text-lg  uppercase  ">LOCATION</div>
          <div className="mt-2 text-base  ">1st Floor, Sumargi Complex</div>
          <div className="text-base  ">Balkhu, Kathmandu</div>
          <div className="text-base  ">Postal Code: 44600</div>
        </div>
        <div className="col-span-1 flex flex-row lg:flex-col items-center justify-center sm:ml-3 h-full gap-3  ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 27"
            className="group cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-white transition-all"
              d="M24.5 0H3.5C1.85 0 0.5 1.35 0.5 3V24C0.5 25.6515 1.85 27 3.5 27H14V16.5H11V12.7875H14V9.7125C14 6.4665 15.818 4.1865 19.649 4.1865L22.3535 4.1895V8.097H20.558C19.067 8.097 18.5 9.216 18.5 10.254V12.789H22.352L21.5 16.5H18.5V27H24.5C26.15 27 27.5 25.6515 27.5 24V3C27.5 1.35 26.15 0 24.5 0Z"
              fill="#7fbeeb"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 27"
            className="group cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-white transition-all"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.44526 0.605308C11.4794 0.0482306 16.5597 0.0482306 21.5939 0.605308C24.3441 0.911824 26.5613 3.07334 26.8843 5.82909C27.4813 10.9251 27.4813 16.0733 26.8843 21.1693C26.5613 23.9251 24.3441 26.0866 21.5953 26.3946C16.5607 26.9518 11.4799 26.9518 6.44526 26.3946C3.69505 26.0866 1.47779 23.9251 1.15483 21.1708C0.557764 16.0743 0.557764 10.9256 1.15483 5.82909C1.47779 3.07334 3.69505 0.911824 6.44526 0.605308ZM21.2608 4.82424C20.8767 4.82424 20.5083 4.97657 20.2367 5.24771C19.9651 5.51886 19.8125 5.88661 19.8125 6.27007C19.8125 6.65353 19.9651 7.02128 20.2367 7.29243C20.5083 7.56357 20.8767 7.7159 21.2608 7.7159C21.6449 7.7159 22.0132 7.56357 22.2848 7.29243C22.5564 7.02128 22.709 6.65353 22.709 6.27007C22.709 5.88661 22.5564 5.51886 22.2848 5.24771C22.0132 4.97657 21.6449 4.82424 21.2608 4.82424ZM7.14042 13.4992C7.14042 11.6778 7.86518 9.93097 9.15527 8.64303C10.4454 7.35509 12.1951 6.63153 14.0196 6.63153C15.844 6.63153 17.5938 7.35509 18.8839 8.64303C20.1739 9.93097 20.8987 11.6778 20.8987 13.4992C20.8987 15.3206 20.1739 17.0675 18.8839 18.3554C17.5938 19.6434 15.844 20.3669 14.0196 20.3669C12.1951 20.3669 10.4454 19.6434 9.15527 18.3554C7.86518 17.0675 7.14042 15.3206 7.14042 13.4992Z"
              fill="#7fbeeb"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 23"
            className="group cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-white transition-all"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9805 0.8125C15.1187 0.8125 16.2862 0.841891 17.4178 0.889984L18.7543 0.954109L20.0337 1.03026L21.2318 1.11175L22.3261 1.19725C23.5136 1.28846 24.6311 1.79701 25.4818 2.63344C26.3326 3.46986 26.8622 4.58056 26.9775 5.77016L27.0307 6.33794L27.1306 7.55364C27.2237 8.81343 27.293 10.1868 27.293 11.5C27.293 12.8132 27.2237 14.1866 27.1306 15.4464L27.0307 16.6621C27.0134 16.8571 26.9961 17.0455 26.9775 17.2298C26.8622 18.4196 26.3324 19.5305 25.4813 20.367C24.6303 21.2034 23.5125 21.7118 22.3247 21.8027L21.2331 21.8869L20.035 21.9697L18.7543 22.0459L17.4178 22.11C16.2727 22.16 15.1266 22.1858 13.9805 22.1875C12.8343 22.1858 11.6883 22.16 10.5432 22.11L9.2066 22.0459L7.92727 21.9697L6.72915 21.8869L5.63486 21.8027C4.44732 21.7115 3.32987 21.203 2.4791 20.3666C1.62832 19.5301 1.09873 18.4194 0.983475 17.2298L0.930225 16.6621L0.830381 15.4464C0.728591 14.1333 0.674417 12.817 0.667969 11.5C0.667969 10.1868 0.737194 8.81343 0.830381 7.55364L0.930225 6.33794C0.947531 6.14289 0.964837 5.95452 0.983475 5.77016C1.09868 4.58078 1.62809 3.47023 2.47859 2.63384C3.32909 1.79745 4.44623 1.28877 5.63353 1.19725L6.72649 1.11175L7.92461 1.03026L9.20527 0.954109L10.5418 0.889984C11.6874 0.840064 12.8338 0.81423 13.9805 0.8125ZM11.318 8.26035V14.7396C11.318 15.3569 11.9836 15.7416 12.5161 15.4343L18.1073 12.1947C18.229 12.1244 18.3301 12.0232 18.4003 11.9012C18.4706 11.7793 18.5076 11.6409 18.5076 11.5C18.5076 11.3591 18.4706 11.2207 18.4003 11.0988C18.3301 10.9768 18.229 10.8756 18.1073 10.8053L12.5161 7.567C12.3946 7.49663 12.2568 7.45959 12.1166 7.45961C11.9763 7.45963 11.8386 7.49672 11.7171 7.56713C11.5957 7.63754 11.4949 7.7388 11.4248 7.86073C11.3547 7.98265 11.3179 8.12094 11.318 8.26169V8.26035Z"
              fill="#7fbeeb"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 25"
            className="group cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-white transition-all"
              d="M29.5879 2.88603C28.5113 3.38015 27.3508 3.70485 26.1484 3.86015C27.3788 3.11191 28.3295 1.92603 28.7769 0.500147C27.6165 1.20603 26.3301 1.70015 24.9739 1.9825C23.8693 0.768383 22.3173 0.0625 20.5556 0.0625C17.2699 0.0625 14.5854 2.77309 14.5854 6.11897C14.5854 6.59897 14.6413 7.06485 14.7392 7.5025C9.76165 7.24838 5.32941 4.83426 2.37924 1.17779C1.86191 2.06721 1.56829 3.11191 1.56829 4.21309C1.56829 6.31662 2.61693 8.18015 4.23882 9.23897C3.24611 9.23897 2.32331 8.95662 1.51237 8.53309V8.57544C1.51237 11.5119 3.58168 13.9684 6.32212 14.519C5.44228 14.7621 4.51859 14.7959 3.62362 14.6178C4.00338 15.8213 4.74711 16.8744 5.75028 17.629C6.75345 18.3836 7.96561 18.8018 9.21636 18.8249C7.09619 20.5196 4.46812 21.4357 1.76404 21.4225C1.28866 21.4225 0.813273 21.3943 0.337891 21.3378C2.99444 23.0601 6.15433 24.0625 9.53794 24.0625C20.5556 24.0625 26.6098 14.8296 26.6098 6.82485C26.6098 6.55662 26.6098 6.3025 26.5958 6.03426C27.7703 5.18721 28.7769 4.11426 29.5879 2.88603Z"
              fill="#7fbeeb"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;