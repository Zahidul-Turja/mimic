import Image from "next/image";

function HeaderSection() {
  return (
    <section className="h-[70vh] w-screen overflow-x-hidden">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-primary-800">
        <Image
          src="/ecomm/fruits-1.jpg"
          alt="fruits"
          fill
          className="object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-primary-800 mix-blend-multiply"></div>

        <div className="absolute z-10 text-center text-primary-50">
          <h1 className="text-5xl font-bold">
            Welcome To{" "}
            <span className="bg-green-700 px-6 py-4">Mimic Shop</span>
          </h1>
          <p>
            Looking for something new, better? Can&apos;t find what you need?
            Try Mimic Shop.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
