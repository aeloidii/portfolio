import Image from "next/image";

const java = () => {
  return (
    <section className="w-full flex sm:flex-row flex-col sm:text-start text-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl md:mt-3 font-extrabold text-blue-950">
          HARKTRANS MANAGEMENT SYSTEM
        </h1>
        <h3> Application Mobile (React Native) </h3>
        <h5 className="text-red-500 font-inter">Programming Languages:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The mobile application was developed using React Native, which
          primarily uses JavaScript and JSX for user interface development.
        </p>
        <h5 className="text-red-500 font-inter">Development Environment:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          Development was carried out in Visual Studio Code (VSCode), a commonly
          used integrated development environment for React Native development.
        </p>
        <h5 className="text-red-500 font-inter">Database:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The mobile application's data is stored in a Firebase Realtime
          Database, a real-time NoSQL database service provided by Firebase.
        </p>
        <h5 className="text-red-500 font-inter">Target Platforms:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The mobile application was developed for both Android and iOS
          platforms, allowing it to reach a wide audience of smartphone users.
        </p>
      </div>
      <div className="flex flex-col gap-5 pl-10 flex-center sm:mx-0 my-4 ">
        <Image
          src={"/assets/mobile-project/React.png"}
          alt="java"
          width={150}
          height={150}
          className="object-contain"
        />
        <Image
          src={"/assets/mobile-project/vs-code.png"}
          alt="java"
          width={150}
          height={150}
          className="object-contain"
        />
        <Image
          src={"/assets/mobile-project/firebase_logo_icon_168209.png"}
          alt="java"
          width={150}
          height={150}
          className="object-contain"
        />
        <Image
          src={"/assets/mobile-project/android_ios.png"}
          alt="java"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default java;
