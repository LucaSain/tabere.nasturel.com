import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconConfetti,
  IconStars,
} from "@tabler/icons-react";
import { Modal, ModalBody, ModalContent, ModalFooter } from "./animated-modal";

import Image from "next/image";
import Link from "next/link";

export default function Showcase() {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold py-10 z-[10] relative">
        Taberele noastre
      </h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] z-[10] relative flex flex-col gap-4 justify-center px-4 sm:grid pb-10 sm:pb-20">
        {items.map((item, i) => (
          <Modal key={i}>
            <BentoGridItem
              id={i + "bento"}
              title={item.title}
              description={"Click aici pentru detalii"}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 font-bold text-center">
                  {item.title}🎉
                </h4>
                <div className="flex justify-center items-center">
                  {item.imagini !== 0 &&
                    [1, 2, 3, 4].map((image, idx) => (
                      <div
                        key={"images" + idx}
                        style={{
                          rotate: Math.random() * 20 - 10 + "deg",
                        }}
                        className="rounded-xl -mr-4 mt-4 p-1  flex-shrink-0 overflow-hidden hover:scale-[200%] transition-transform hover:z-[999]"
                      >
                        <Image
                          src={`/${item.base}${idx + 1}.jpeg`}
                          alt="imagine"
                          width="500"
                          height="500"
                          className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0 border-2 border-base-content "
                        />
                      </div>
                    ))}
                </div>
                <div
                  data-theme="light"
                  className="py-10 flex flex-wrap items-start justify-start max-w-sm mx-auto prose prose-sm"
                >
                  <p>
                    {" "}
                    venim cu 8 ani experiență in lucrul cu copii si facem cele
                    mai tari tabere pentru ei
                  </p>
                </div>
              </ModalContent>
              <ModalFooter className="flex justify-center flex-row pb-2 pt-2 bg-inherit gap-2">
                <Link href="/contact" className="btn btn-primary">
                  Contact
                </Link>
              </ModalFooter>
            </ModalBody>
          </Modal>
        ))}
      </BentoGrid>
    </>
  );
}
const Skeleton = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.2]  bg-neutral-100 ">
    {children}
  </div>
);
const items = [
  {
    title: "Tabără urbana Biblioteca Astra Sibiu",
    base: "biblio",
    description: "",
    data: [],
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="astra1.png" />
      </Skeleton>
    ),
    imagini: 4,
    text: "Mascotele Minnie și Mickey Mouse sunt iconice și aduc instantaneu un sentiment de bucurie și entuziasm la orice ocazie. Fie că este vorba de petreceri de aniversare, evenimente școlare sau alte festivități, prezența acestor personaje îndrăgite asigură o atmosferă magică și distractivă. Mai ales acompaniate de musica si dans!",
    className:
      "col-span-1 bg-gradient-to-r from-primary to-secondary border-none",
    icon: <IconConfetti className="h-4 w-4 text-primary-content" />,
  },
  {
    title: "Ateliere creative - Turnișor, Muzeul de etnie romă",
    base: "ateliere",
    description: "",
    data: [],
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="/ateliere1.jpeg" />
      </Skeleton>
    ),
    imagini: 4,
    text: "Mascotele Minnie și Mickey Mouse sunt iconice și aduc instantaneu un sentiment de bucurie și entuziasm la orice ocazie. Fie că este vorba de petreceri de aniversare, evenimente școlare sau alte festivități, prezența acestor personaje îndrăgite asigură o atmosferă magică și distractivă. Mai ales acompaniate de musica si dans!",
    className:
      "col-span-1 bg-gradient-to-r from-secondary to-accent border-none",
    icon: <IconConfetti className="h-4 w-4 text-primary-content" />,
  },
  {
    title: "Cursuri de engleză începători - Turnișor",
    base: "mascote",
    description: "",
    data: [],
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="engleza1.png" />
      </Skeleton>
    ),
    imagini: 4,
    text: "Mascotele Minnie și Mickey Mouse sunt iconice și aduc instantaneu un sentiment de bucurie și entuziasm la orice ocazie. Fie că este vorba de petreceri de aniversare, evenimente școlare sau alte festivități, prezența acestor personaje îndrăgite asigură o atmosferă magică și distractivă. Mai ales acompaniate de musica si dans!",
    className: "col-span-1 bg-gradient-to-r from-accent to-primary border-none",
    icon: <IconConfetti className="h-4 w-4 text-primary-content" />,
  },

  {
    title: "Tabara de toamna",
    base: "jocuri",
    description: "300 lei / ora / 1 animator",
    text: "Specialiștii noștri în jocuri stabilesc legături între copii, îi învăța lucrul în echipă și bunele maniere, creând spațiul pentru prietenie. Un animator gestionează perfect un număr de 15 copii. Putem conduce jocuri cu orice număr de copii. Chiar si peste 100.",
    className: "row-span-2 bg-accent",
    imagini: 4,
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="toamna1.jpeg" />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-accent-content" />,
    data: [],
  },
  {
    title: "Tabara de iarna",
    base: "iarna",
    description: "300 lei / ora / 1 animator",
    text: "Baloanele modelabile pot să transforme orice ocazie într-o experiență veselă și colorată. Prin creativitate și îndemânare, artiștii noștri realizează figurine spectaculoase din baloane, aducând zâmbete pe fețele celor mici.",
    header: (
      <Skeleton>
        <img className=" object-cover w-full rounded-xl" src="iarna1.jpeg" />
      </Skeleton>
    ),
    imagini: 4,
    className: "bg-secondary text-secondary-content border-0 col-span-2",
    icon: <IconConfetti className="h-4 w-4 text-secondary-content" />,
    data: [],
  },
  {
    title: "Tabara de vara",
    base: "vara",
    description: "300 lei / ora / 1 animator - max. 15 copii",
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="vara1.jpeg" />
      </Skeleton>
    ),
    imagini: 4,
    text: "Atelierele creative pentru copii sunt concepute pentru a oferi o experiență educativă și distractivă, în care cei mici pot să își exprime imaginația și să își dezvolte abilitățile artistice si motrice. Fiecare atelier este structurat pentru a încuraja explorarea, învățarea și dezvoltarea personală într-un mediu sigur și prietenos.",
    data: [],
    className: "col-span-2 bg-primary",
    icon: <IconConfetti className="h-4 w-4 text-primary-content" />,
  },
];
