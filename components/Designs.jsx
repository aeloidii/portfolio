import Image from "next/image";

const Designs = () => {
  return (
    <section className="w-full mt-20 flex flex-col relative">
      <div className="flex flex-col items-center">
        <h1 className="text-sm md:mt-3 font-extrabold leading-[1.15] text-gray-400">
          Portfolio
        </h1>
        <h3 className="mt-2 text-sm font-extrabold leading-[1.15] text-gray-600 sm:text-xl">
          Check My Wonderful Works
        </h3>
      </div>
      <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Image
          src="/assets/designs/folio-12.jpg"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-2.jpeg"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-3.jpeg"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-4.png"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-5.jpeg"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-9.jpg"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-6.jpg"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-6-1.png"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-10.jpg"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-7.jpg"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-11.png"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
        <Image
          src="/assets/designs/folio-14.jpg"
          alt="Design example"
          width={400}
          height={200}
          className="object-contain w-full"
        />
      </div>
    </section>
  );
};

export default Designs;
