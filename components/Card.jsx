import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, desc, link }) => {
  return (
    <div className="flex flex-col items-center border-solid border-2 border-gray-200 p-5 m-5 rounded-lg shadow-lg bg-gray-200 hover:shadow-2xl transition-shadow duration-300 w-80 h-96">
      <Image
        src={image}
        width={220}
        height={80}
        className="object-contain mb-4"
        alt={title}
      />
      <h1 className="text-xl font-extrabold leading-tight text-gray-800 sm:text-base text-center">
        {title}
      </h1>
      <p className="text-sm text-gray-600 sm:text-base max-w-2xl text-center mt-3">
        {desc}
      </p>
      {link === "Incoming" ? (
        <button className="mt-auto text-center text-red-600 font-bold cursor-not-allowed">
          it will be published Soon
        </button>
      ) : (
        <Link
          href={link}
          className="mt-auto text-center black_btn rounded-full"
        >
          Read More
        </Link>
      )}
    </div>
  );
};

export default Card;
