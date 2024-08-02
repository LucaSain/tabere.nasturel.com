import Image from "next/image";
export default function Background() {
  return (
    <div className="absolute z-0 w-screen h-screen">
      <Image
        className="h-full w-full fill object-cover"
        alt="background"
        src="/background.png"
        width={1920}
        height={1080}
      />
    </div>
  );
}
