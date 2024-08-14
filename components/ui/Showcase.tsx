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
import EnlargingImage from "./enlargingImage";

import Image from "next/image";
import Link from "next/link";
import Background from "./background";

export default function Showcase() {
  return (
    <>
      <h1
        id="tabere"
        className="text-center text-4xl font-semibold py-10 z-[10] relative"
      >
        Taberele noastre
      </h1>
      <div className="relative">
        <Background />
        <BentoGrid className="max-w-[80vw] mx-auto md:auto-rows-[20rem] z-[10] relative flex flex-col gap-4 justify-center px-4 sm:grid pb-10 sm:pb-20 overflow-hidden ]">
          {items.map((item, i) => {
            if (item.base === "biblio") {
              return (
                <Link
                  className="row-span-2"
                  key={i}
                  href="/tabara-urbana-astra/inscriere"
                >
                  <Modal>
                    <BentoGridItem
                      id={i + "bento"}
                      title={item.title}
                      description={"Click aici pentru detalii"}
                      header={item.header}
                      className={item.className}
                      icon={item.icon}
                    />
                  </Modal>
                </Link>
              );
            }

            return (
              <Modal key={i}>
                <BentoGridItem
                  id={i + "bento"}
                  title={item.title}
                  description={"Click aici pentru detalii"}
                  header={item.header}
                  className={item.className}
                  icon={item.icon}
                />
                <ModalBody className="sm:!max-w-[45vw]">
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 font-bold text-center">
                      {item.title}🎉
                    </h4>
                    <div className="flex justify-center items-center">
                      {item.imagini !== 0 &&
                        Array.from(Array(item.imagini).keys()).map(
                          (image, idx) => (
                            <EnlargingImage
                              id={item.title + idx}
                              key={item.title + idx}
                              src={`/${item.base}${idx + 1}.jpeg`}
                              alt="image"
                            />
                          )
                        )}
                    </div>
                    <div data-theme="light" className="py-10 mx-auto prose">
                      {item.text}
                    </div>
                  </ModalContent>
                  <ModalFooter className="flex justify-center flex-row pb-2 pt-2 bg-inherit gap-2">
                    {item.base === "biblio" ? (
                      <Link
                        href="/tabara-urbana-astra/inscriere"
                        className="btn btn-accent"
                      >
                        Contact
                      </Link>
                    ) : (
                      <Link href="/contact" className="btn btn-primary">
                        Contact
                      </Link>
                    )}
                  </ModalFooter>
                </ModalBody>
              </Modal>
            );
          })}
        </BentoGrid>
      </div>
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
    title: "Tabără urbana Biblioteca Astra",
    base: "astra",
    description: "",
    data: [],
    header: (
      <Skeleton>
        <Image
          alt="astra"
          height={500}
          width={500}
          className="object-cover w-full h-full rounded-xl"
          src="/astra1.jpeg"
        />
      </Skeleton>
    ),
    imagini: 0,
    text: "",
    className: "row-span-2  bg-error border-none text-neutral-content h-full",
    icon: <IconConfetti className="h-4 w-4 text-primary-content" />,
  },
  {
    title: "Ateliere creative - Turnișor",
    base: "ateliere",
    description: "",
    data: [],
    header: (
      <Skeleton>
        <Image
          alt="ateliere"
          height={500}
          width={500}
          className="object-cover w-full h-full rounded-xl"
          src="/ateliere4.jpeg"
        />
      </Skeleton>
    ),
    imagini: 4,
    text: (
      <>
        <p>
          In zilele de Marti şi Joi. Data va fi anuntata dupa strangerea
          participantilor.
        </p>
        <p>Grupa mare: 14:00-16:00 | Grupa mica 16:00-18:00</p>
        <p>Primul atelier 35 ron | Pret lunar 200 ron - 1 sedinta/ saptamana</p>
        <ul>
          <li>atelier de magneti de frigider</li>
          <li>atelier pictura pe pietre </li>
          <li>atelier baloane uriase de sapun</li>
          <li>atelier confectionat masti</li>
          <li>atelier de ritm (invatam sa baten la tobe)</li>
          <li>atelier origami</li>
          <li>
            atelier de confectionat bratari atelier de facut papusi din ziar
          </li>
        </ul>
      </>
    ),
    className:
      "row-span-1 sm:row-span-2  bg-accent text-accent-content  border-none h-full",
    icon: <IconConfetti className="h-4 w-4 text-primary-content" />,
  },
  {
    title: "Cursuri de engleză începători",
    base: "engleza",
    description: "",
    data: [],
    header: (
      <Skeleton>
        <Image
          alt="engleza"
          height={500}
          width={500}
          className="object-cover w-full h-full rounded-xl"
          src="/engleza1.jpeg"
        />
      </Skeleton>
    ),
    imagini: 1,
    text: (
      <>
        <p>
          In zilele de Marti si Joi. Data va fi anuntata dupa strangerea
          participantilor
        </p>

        <p>Grupa Incepatori 18:00-19:00 | Grupa Avansati 13:00-14:00</p>

        <p>Prima lectie 20 lei - 130 ron/luna</p>
      </>
    ),
    className:
      "row-span-1 sm:row-span-2 bg-secondary border-none text-accent-content",
    icon: <IconConfetti className="h-4 w-4 text-primary-content" />,
  },
  {
    title: "Tabara de toamna",
    base: "toamna",
    description: "300 lei / ora / 1 animator",
    text: (
      <>
        <p className="w-full flex items-center justify-center">
          <a
            href="https://xir03eiqsitl1won.public.blob.vercel-storage.com/Test/Oferta%CC%86%20Taba%CC%86ra%CC%86%20de%20toamna%CC%86%202024-rO6ccU6u0czpBdG0h5QsY1kRb4gHVu.pdf"
            className="btn btn-accent my-2 no-underline"
          >
            Descarca oferta
          </a>
        </p>
        <h1>Tabără de toamnă - 5 zile</h1>
        <h2>Perioadă</h2>
        <p>
          5 zile în perioada vacanței de toamnă, 28 octombrie - 1 noiembrie 2024
        </p>
        <p>Cazare disponibilă în Păltiniș, Râul Sadului, Cisnădioara.</p>
        {/* <h2>Preț</h2>
        <p>
          1150 - 1250 lei/persoană în funcție de numărul de participanți - nu
          include prețul transportului sau activitățile extra
        </p> */}
        <p>
          <u>
            Ofertă pentru cadre didactice, virăm 100 de lei pentru fiecare elev
            înscris spre fondul școlii/clasei!
          </u>
        </p>
        <h2>Ce include tabăra de toamnă:</h2>
        <ul>
          <li>Cazare și masă</li>
          <li>Ateliere creative</li>
          <li>Ateliere sociale</li>
          <li>Jocuri interactive Activități afară</li>
          <li>Drumeții specifice locației</li>
        </ul>
        <p>
          Atelierele sunt conduse de persoane din diferite arii - artiști în
          artele plastice, muzicale, pedagogi, actori și psihologi. Fiecare 15
          copii au un coordonator desemnat.
        </p>
        <h2>Activități extra/opțiuni </h2>
        <p>(Prețul acestora depinde de numărul de copii)</p>
        <ul>
          <li>Excursie la Zoo Sibiu</li>
          <li>
            Excursie la Muzeul Civilizației Populare Tradiționale ASTRA Sibiu
            Tur centrul vechi din Sibiu (4 destinații tursitice)
          </li>
          <li>Vizitare parcul tematic Brambura, Valea Avrigului</li>
          <li>
            Vizitare parcul tematic Povestea Calendarului, Valea Avrigului
            Vizitare Dexiworld Park Malaia, Valea Oltului
          </li>
          <li>Vizitare Zorabia, ferma de cai pur sânge arabi</li>
          <li>Drumeție vârful Bătrâna, vârful Oncești, potecile lui Cioran.</li>
        </ul>
      </>
    ),
    className: "row-span-2 bg-primary  text-neutral-content",
    imagini: 4,
    header: (
      <Skeleton>
        <Image
          alt="toamna"
          height={500}
          width={500}
          className="object-cover w-full h-full rounded-xl"
          src="/toamna4.jpeg"
        />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-accent-content" />,
    data: [],
  },

  {
    title: "Tabara de iarna",
    base: "iarna",
    description: "300 lei / ora / 1 animator",
    text: (
      <>
        <p className="w-full flex items-center justify-center">
          <a
            href="https://xir03eiqsitl1won.public.blob.vercel-storage.com/Test/Oferta%CC%86%20Taba%CC%86ra%CC%86%20de%20Iarna%20Paltinis%202024-4lh7ZQU92Eqi0ujOVSfiqnvvkvYeYf.pdf"
            className="btn btn-accent my-2 no-underline"
          >
            Descarca oferta
          </a>
        </p>
        <h1>Tabără de iarnă Păltiniș - 5 zile</h1>
        <h2>Perioada</h2>
        <p> 5 zile în perioada vacanțelor de iarnă</p>
        <p>
          10 februarie 2025 - 2 martie 2025, în funcție de când aveți vacanța.
        </p>
        {/* <h2>Preț</h2>
        <p>
          A. 1150 - 1250 lei / persoană în funcție de numărul de participanți:
          Tabără de iarnă - nu include transportul
        </p>
        <p>
          B. 2000-2200 lei / persoană: Tabără de iarnă + Școala de schi (separat
          doar Școala de schi 850-950 de lei/persoană)
        </p> */}
        <p>
          <u>
            Ofertă pentru cadre didactice, virăm 100 de lei pentru fiecare elev
            înscris spre fondul școlii/clasei!
          </u>
        </p>
        <h2>Ce include</h2>
        <table>
          <tr>
            <th>Tabăra de iarnă, zilnic:</th>
            <th>Școala de schi:</th>
          </tr>
          <tr>
            <td>Cazare și masă</td>
            <td>20 de ore de schi cu instructori acreditați (4h pe zi)</td>
          </tr>
          <tr>
            <td>Ateliere creative</td>
            <td>Diplomă și medalie la finalul școlii</td>
          </tr>
          <tr>
            <td> Ateliere sociale</td>
            <td>Foto/Video</td>
          </tr>
          <tr>
            <td>Jocuri interactive</td>
          </tr>
          <tr>
            <td>Activități afară</td>
          </tr>
        </table>
        <h3>Ce nu include școala de schi:</h3>
        <ul>
          <li>
            260 lei - închirerea echipamentululi (clăpari, ski/snowboard) toată
            perioada
          </li>
          <li>20 lei/zi - cască (recomandăm achiziția unei căști proprii)</li>
          <li>200 - 300 lei Skipass pentru toată perioada</li>
        </ul>
        <p>
          Copiii au nevoie de pantaloni și geacă de schi, bluză de corp,
          colanți, mănuși, cagulă, schiuri, clăpari și cască. Pentru cei care nu
          doresc să schieze, sania ne poate însoți pe pârtie, vă recomandăm să
          vă achiziționați o sanie proprie, sau închiriați de pe pârtie.
        </p>
      </>
    ),
    header: (
      <Skeleton>
        <Image
          alt="iarna"
          height={500}
          width={500}
          className="object-cover w-full h-full rounded-xl"
          src="/iarna1.jpeg"
        />
      </Skeleton>
    ),
    imagini: 4,
    className: "bg-neutral text-neutral-content border-0 row-span-2",
    icon: <IconConfetti className="h-4 w-4 text-secondary-content" />,
    data: [],
  },

  {
    title: "Tabara de vara",
    base: "vara",
    description: "300 lei / ora / 1 animator - max. 15 copii",
    header: (
      <Skeleton>
        <Image
          alt="vara"
          height={500}
          width={500}
          className="object-cover w-full h-full rounded-xl"
          src="/vara3.jpeg"
        />
      </Skeleton>
    ),
    imagini: 4,
    text: (
      <>
        <h2>Oferta se face începând cu decembrie</h2>
      </>
    ),
    data: [],
    className: "row-span-2 bg-accent text-neutral-content",
    icon: <IconConfetti className="h-4 w-4 text-primary-content" />,
  },
];
