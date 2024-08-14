import Image from "next/image";
import * as Clouds from "./Cloud";
export default function Background() {
  return (
    <div className="w-screen h-screen absolute left-0 top-0 z-0">
      <div className="absolute z-10 w-96 hidden sm:block right-1/3 top-1/2 opacity-20 brightness-75">
        <Clouds.Cloud1 />
      </div>
      <div className="absolute z-10 w-64 hidden sm:block right-3 bottom-1/2 sm:right-64 sm:top-48 opacity-20 brightness-75">
        <Clouds.Cloud2 />
      </div>
      <div className="absolute z-10 w-32 left-1/4 top-20 opacity-20 brightness-75">
        <Clouds.Cloud3 />
      </div>
      <div className="absolute hover:translate-y-[-10px] transition-all duration-700 opacity-20 sm:opacity-100 hidden  lg:block z-10 w-72 sm:w-70 xl:w-96 left-20 sm:left-5 xl:left-20 bottom-10 sm:bottom-5 md:top-40 ">
        <Clouds.Cloud4 />
      </div>
      <div className="absolute hover:translate-y-[-10px] transition-all duration-700 hidden sm:block z-10 w-56 sm:w-56 left-5 top-20 sm:left-10 sm:bottom-5 lg:top-64 ">
        <Clouds.Cloud5 />
      </div>
      <div className="absolute hover:translate-y-[-10px] transition-all duration-700 z-10 w-24 sm:w-40 top-40 right-1/4 sm:bottom-48 sm:right-20 ">
        <Clouds.Cloud6 />
      </div>
      <div className="absolute hidden lg:block hover:translate-y-[-10px] transition-all duration-700 z-10 w-96 bottom-10 right-40 ">
        <Clouds.Cloud7 />
      </div>
      <Image
        alt="baloon"
        height={400}
        width={400}
        src="baloon2.svg"
        className="absolute z-10 w-32 bottom-32 right-5 opacity-20 sm:opacity-100 sm:right-20 hover:animate-spin"
      />
    </div>
  );
}
