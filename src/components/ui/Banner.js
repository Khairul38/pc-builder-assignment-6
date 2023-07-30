import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#0092FF] bg-gradient-to-r from-[#1C64F2] via-[#0092FF] to-[#1724C9] h-[600px] mb-10">
      <div className="flex justify-between items-center px-8 max-w-screen-xl h-full mx-auto gap-2">
        <div className="space-y-3">
          <p className="text-5xl font-bold text-white">WELCOME TO</p>
          <div className="flex flex-wrap gap-3">
            <p className="text-5xl font-bold text-white">PC BUILDER</p>
            <p className="text-5xl font-bold text-white">BANGLADESH</p>
          </div>
          <p className="text-4xl font-bold">BUILD BATTER</p>
          <p className="text-4xl font-bold">BUILD FASTER</p>
        </div>
        <Image
          src="/banner.png"
          alt="Banner"
          width={500}
          priority={true}
          quality={100}
          height={500}
        />
      </div>
    </div>
  );
};

export default Banner;
