"use client";
import submit from "../../actions";
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
        <h1 className="text-3xl sm:text-5xl font-bold ">
          Inscriere Tabara Nasturel-Astra
        </h1>
        <h2 className=" mt-4">Completeaza formularul de mai jos:</h2>
      </div>
      <form
        onSubmit={() => {
          setLoading(true);
        }}
        action={submit}
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
          Rezerva
        </button>
      </form>
    </div>
  );
}
