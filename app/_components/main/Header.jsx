import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[350px] border-violet-300 w-full bg-neutral-900 border-2 rounded-full p-2">
        <div className="flex items-center">
          <p className="font-bold ml-3">CITEO</p>
          <div className="ml-auto text-sm flex items-center gap-3">
            {/* <p>Works</p>
            <p>Benefits</p> */}
            <Link
              href={`https://cal.com/akarshrajput/15min`}
              className="bg-violet-300 p-2 px-3 border border-violet-500 font-semibold text-neutral-900 rounded-full"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
