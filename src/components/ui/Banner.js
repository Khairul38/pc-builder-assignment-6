import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#0092FF] bg-gradient-to-r from-[#1C64F2] via-[#0092FF] to-[#1724C9] h-[650px] mb-10">
      <div className="md:flex justify-between items-center px-8 py-10 sm:py-8 md:py-0 max-w-screen-2xl h-full mx-auto gap-2 space-y-5 md:space-y-0">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            WELCOME TO
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
              PC BUILDER
            </p>
            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
              BANGLADESH
            </p>
          </div>
          <p className="text-xl sm:text-3xl lg:text-4xl font-bold">BUILD BATTER</p>
          <p className="text-xl sm:text-3xl lg:text-4xl font-bold">BUILD FASTER</p>
        </div>
        <Image
          src="/banner.png"
          alt="Banner"
          className="w-[380px] lg:w-[500px] lg:h-[500px] mx-auto md:mx-0"
          width={500}
          height={500}
          priority={true}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Banner;
