import Image from "next/image";

const java = () => {
  return (
    <section className="w-full flex sm:flex-row flex-col sm:text-start text-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl md:mt-3 font-extrabold text-blue-950">
          HARKTRANS MANAGEMENT SYSTEM
        </h1>
        <h3> Application de Bureau (Java Swing) </h3>
        <h5 className="text-red-500 font-inter">Programming Languages:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The desktop application was developed using Java, with a user
          interface created using Java Swing.
        </p>
        <h5 className="text-red-500 font-inter">Development Environment:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The development of the desktop application was carried out in Eclipse,
          a popular Java development environment.
        </p>
        <h5 className="text-red-500 font-inter">Database:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The data for the desktop application is stored in an SQL database,
          with features such as data creation, reading, updating, and deletion.
        </p>
      </div>
      <div className="flex flex-col gap-5 flex-center sm:mx-0 my-4">
        <Image
          src={"/assets/java-project/Java-Logo-500x313.png"}
          alt="java"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/java-project/eclipse_ide_logo.png"}
          alt="java"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/java-project/MySQL-Logo-500x313.png"}
          alt="java"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default java;
