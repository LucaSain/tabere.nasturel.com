"use client";
import { submit_contact } from "../actions";
import { useState } from "react";
export default function Rezerva() {
  const [loading, setLoading] = useState(false);
  interface names {
    nume: string;
    prenume: string;
    telefon: string;
    email: string;
    mesaj: string;
  }
  const names = ["nume", "prenume", "telefon", "email", "mesaj"];
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
      key="email"
      name="email"
      required
      type="email"
      placeholder="Adresa de mail"
      className="input w-full input-primary"
    />,
    <textarea
      key="mesaj"
      name="mesaj"
      placeholder="Mesaj"
      className="textarea w-full textarea-bordered textarea-primary"
    ></textarea>,
  ];
  return (
    <div className="h-screen max-w-[100vw] flex items-center flex-col justify-center overflow-hidden">
      <div className="text-center z-30 rounded-lg  pb-2 ">
        <h1 className="text-3xl sm:text-5xl font-bold pt-10 sm:pt-0">
          Contact
        </h1>
        <br />
        <h2 className="">
          Ne gasiti la numarul de telefon
          <b>
            <a href="tel:+40753936093"> +40 (753) 936 093 </a>
          </b>
        </h2>

        <h2 className="">
          Sau puteti trimite un mesaj prin formularul de mai jos:
        </h2>
      </div>
      <form
        onSubmit={() => {
          setLoading(true);
        }}
        action={submit_contact}
        className="w-4/5 relative h-max sm:w-1/3 flex flex-col items-center space-y-4 z-30"
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
