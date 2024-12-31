import Image from "next/image";

import {
  poppins,
  uncialAntiqua,
  imFellEnglish,
  caesarDressing,
  raleway,
} from "@/app/_utils/fonts/fonts";

function HeaderSection() {
  return (
    <section
      className={`max-w-screen h-[70vh] overflow-x-hidden ${raleway.className}`}
    >
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-primary-800">
        <Image
          src="/ecomm/fruits-1.jpg"
          alt="fruits"
          fill
          className="object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-primary-800 mix-blend-multiply"></div>

        <div className="absolute z-10 -translate-y-10 text-center text-primary-50">
          <h1 className={"my-8 text-5xl font-bold"}>
            Welcome To{" "}
            <span className={`relative px-6 py-2 ${caesarDressing.className}`}>
              <span
                className={`absolute inset-0 -z-10 h-full w-full -skew-x-[16deg] rounded-lg bg-gradient-to-tr from-green-900 to-green-600`}
              />
              Mimic Shop
            </span>
          </h1>
          <p className="mx-auto w-[80%] text-xl font-extralight text-primary-100/85">
            Looking for something new and better? Can&apos;t find exactly what
            you need? Explore endless possibilities at Mimic Shop!
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
