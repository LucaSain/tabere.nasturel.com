import Image from "next/image";
export default function Background() {
  return (
    <div className="absolute z-0 w-screen h-screen">
      <Image
        className="h-full w-full"
        alt="background"
        src="/background.png"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
