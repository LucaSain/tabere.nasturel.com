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
      className="rounded-xl -mr-4 mt-4 p-1 relative flex-shrink-0 overflow-hidden transition-all"
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
        className="modal h-screen w-screen flex justify-center items-center border-none p-0 bg-transparent overflow-hidden"
      >
        <div className="relative modal-box h-screen w-screen max-w-[100vw] sm:!w-[60vw] sm:!max-w-[60vw] p-3 sm:p-6">
          <form method="dialog" className="h-full w-full rounded-xl">
            <button className="h-full w-full">
              <Image
                src={src}
                alt="imagine"
                width="1000"
                height="1000"
                className="rounded-lg object-cover h-full w-full flex-shrink-0 border-none"
              />
            </button>
          </form>
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
