import Link from "next/link";

export default function Page() {
  return (
    <div className="prose mx-auto">
      <h1 className="pt-20">Politica de procesare a datelor</h1>
      <p>
        Datele cuprinse în formularul de mai jos vor fi tratate confidenţial, în
        conformitate cu Regulamentul (UE) 2016/679 privind protecţia persoanelor
        fizice în ceea ce priveşte prelucrarea datelor cu caracter personal şi
        privind libera circulaţie a acestor date şi de abrogare a Directivei
        95/46/CE (Regulamentul general privind protecţia datelor) și a
        legislației naționale.
      </p>
      <p>
        Datele completate in formular (nume și prenume, telefon, adresa mail,
        numar copii, numar adulti) sunt colectate de Nasturel în calitate de
        organizator al programului iar datele sunt colectate în scopul
        înscrierii copiilor dumneavoastră si dumneavoastră in calitate de
        parinte/tutore la acest program (Festivalul Nasturel), în scopul
        participării la acest program pe o perioadă nedeterminată, în scopul
        comunicării cu referire la program prin intermediul emailului sau
        telefonului, în scop statistic, cu respectarea prevederilor legale în
        vigoare.
      </p>
      <p>
        Prezentele date cu caracter personal între operator şi terţi nu vor fi
        divulgate către auditori. Perioada prelucrării datelor dumneavoastră cu
        caracter personal este de 5 ani.
      </p>
      <p>
        Cu privire la prelucrarea datelor dumneavoastră cu caracter personal, vă
        informăm că aveţi următoarele drepturi: dreptul de acces, dreptul de
        rectificare, dreptul de ştergere, dreptul de restricţionare a
        prelucrării, dreptul de opoziţie, precum şi dreptul de portabilitate.
      </p>
      <p>
        Nasturel poate fi contactat în legătură cu cele de mai sus prin e-mail
        la adresa de e-mail office@nasturel.com . De asemenea, pentru orice
        plângeri și sesizări, vă puteţi adresa Autorității Naționale de
        Supraveghere a Prelucrării Datelor cu Caracter Personal. Prin
        completarea și semnarea acestui formular sunteți de acord cu prelucrarea
        datelor dumneavoastră personale din categoriile menționate mai sus de
        către Nasturel.
      </p>
      <Link
        className="btn btn-primary text-primary-content no-underline"
        href="/"
      >
        Inapoi
      </Link>
    </div>
  );
}
