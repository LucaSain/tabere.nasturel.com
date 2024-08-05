"use client";

import Image from "next/image";

export default function EnlargingImage({
  src,
  alt,
  key,
  id,
}: {
  id: string;
  src: string;
  alt: string;
  key: string;
}) {
  console.log("asdas", id);
  return (
    <div
      onClick={() => {
        // @ts-ignore
        document.getElementById(`modal${id}`).showModal();
      }}
      key={id}
      style={{
        rotate: Math.random() * 20 - 10 + "deg",
      }}
      className="rounded-xl -mr-4 mt-4 p-1 relative flex-shrink-0 overflow-hidden hover:scale-[110%] transition-all hover:rotate-2 hover:z-[999]"
    >
      <Image
        src={src}
        alt="imagine"
        width="500"
        height="500"
        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0 border-2 border-base-content "
      />
      <dialog
        id={"modal" + id}
        className="h-screen w-screen flex justify-center items-center border-none p-0 bg-transparent overflow-hidden"
      >
        <div className="modal-box aspect-square h-[80vh] w-[80vw] p-6">
          <Image
            src={src}
            alt="imagine"
            width="500"
            height="500"
            className="rounded-lg object-cover h-full w-full flex-shrink-0  border-none"
          />
        </div>
        <form
          method="dialog"
          className="modal-backdrop absolute h-screen w-screen"
        >
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
