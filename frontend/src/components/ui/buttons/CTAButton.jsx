import { Glasses } from "lucide-react";

function CTAButton({ buttonText }) {
  return (
    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
      <span className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-black hover:bg-[#4ADE80] focus:bg-orange-600">
        {buttonText}
      </span>

      <a
        href="#"
        title=""
        className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
      >
        {/* <svg
          className="w-10 h-10 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fill="#F97316"
            stroke="#F97316"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg> */}
        <div className="border-[3px] border-black rounded-full p-[0.3rem]">
          <Glasses size={19} color="#2A9752" />
        </div>
        <span>&nbsp; Custom request</span>
      </a>
    </div>
  );
}

export default CTAButton;
