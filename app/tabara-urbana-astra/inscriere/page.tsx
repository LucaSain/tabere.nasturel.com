"use client";
import submit from "../../actions";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../../components/ui/animated-modal";
import { useState } from "react";
export default function Rezerva() {
  const [loading, setLoading] = useState(false);
  //Nume preune telefon adresa mail numar de copii numar de adulti
  interface names {
    nume: string;
    prenume: string;
    telefon: string;
    varsta: string;
  }
  const names = ["nume", "prenume", "telefon", "varsta"];
  const formElements = [
    <input
      key="nume"
      name="nume"
      required
      type="text"
      placeholder="Nume"
      className="input w-full input-primary"
    />,
    <input
      key="prenume"
      name="prenume"
      required
      type="text"
      placeholder="Prenume"
      className="input w-full input-primary"
    />,
    <input
      key="telefon"
      name="telefon"
      required
      type="text"
      placeholder="Telefon"
      className="input w-full input-primary"
    />,
    <input
      key="varsta"
      name="varsta"
      required
      type="number"
      placeholder="Varsta"
      className="input w-full input-primary"
    />,
  ];
  return (
    <div className="h-screen w-screen flex items-center flex-col justify-center">
      <div className="text-center z-30 bg-base-100 bg-opacity-50 rounded-lg p-5">
        <h1 className="text-2xl sm:text-5xl font-bold ">
          Tabara Nasturel-Astra
        </h1>
        <Modal>
          <ModalTrigger>
            <a className="btn btn-info">Inromatii</a>
          </ModalTrigger>
          <ModalBody className="overflow-y-visible relative z-[99] block">
            <ModalContent className="h-max prose block text-start mx-auto">
              <h1>Informatii</h1>
              <ul>
                <li> 🖍️ Pentru cine e? Vârsta recomandată e între 6-10 ani</li>

                <li>🖍️ Când? 21 - 26 August, între orele 10:00 - 14:00</li>

                <li>
                  🖍️ Cât ne costă? Prețul este stabilit în funcție de numărul de
                  participanți, pentru detalii în acest sens și înscrieri
                  contactați managerul de proiect - 0753936093 Andrei Sainenco.
                </li>

                <li>
                  🖍️ Ce facem? Ne facem prieteni, învățăm să ne purtăm în
                  societate, facem multă artă, jocuri și ateliere. (Majoritatea
                  atelierelor rezultă într-un obiect pe care copii îl iau acasă)
                </li>
              </ul>
              <h2>Lista Ateliere</h2>
              <ul>
                <li>🎨 atelier magneți de frigider</li>
                <li>🎨 atelier de pictat pietre/inimi/forme de ipsos</li>
                <li>🎨 atelier baloane uriașe de săpun</li>
                <li>🎨 atelier de măști</li>
                <li>
                  🎨 atelier de ritm (copiii interacționează cu instrumente de
                  percutie)
                </li>
                <li>🎨 atelier de semn de carte</li>
                <li>🎨 atelier de origami</li>
                <li>🎨 atelier de pictat pe panza </li>
                <li>🎨 atelier de facut bratari</li>
                <li>🎨 atelier de papusi din ziar</li>
                <li>🎨 atelier de teatru social</li>
              </ul>
              <h2>⌚ Program zilnic:</h2>
              <ul>
                <li>10:00 - 11:00 Jocuri de energizare, de prietenie</li>
                <li>11:00 - 12:00 Ateliere</li>
                <li>12:00 - 13:00 Activități în echipă</li>
                <li>13:00 - 14:00 Ateliere/Jocuri în engleză </li>
              </ul>
              <p>🖍️ Cum ne înscriem?</p>
              <p>
                Prin telefon/whatsapp:
                <a type="tel:+40753936093"> 0753936093</a> Andrei sau prin
                website și vă sună agenția pentru confirmare.
              </p>
            </ModalContent>
          </ModalBody>
        </Modal>
        <h2 className="mt-4">
          Completeaza formularul de mai jos si te contactam noi:
        </h2>
      </div>
      <form
        onSubmit={() => {
          setLoading(true);
        }}
        action={submit}
        className="w-4/5 relative h-max sm:w-1/3 flex flex-col items-center space-y-4 z-10"
      >
        {loading && (
          <div className="absolute bg-primary opacity-35 rounded-xl z-[999] h-full w-full flex justify-center">
            <span className="loading loading-spinner loading-xl text-neutral-content scale-110"></span>
          </div>
        )}

        {formElements.map((formelement) => {
          return (
            <div className="w-full" key={formElements.indexOf(formelement)}>
              {formelement}
            </div>
          );
        })}

        <button type="submit" className="btn btn-primary">
          Trimite
        </button>
      </form>
    </div>
  );
}
