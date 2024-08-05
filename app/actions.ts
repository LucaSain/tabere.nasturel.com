"use server";
import { redirect } from "next/navigation";
import { sendEmail } from "./mailjet/mailjet";

interface names {
  nume: string;
  prenume: string;
  telefon: string;
  email: string;
  numar_copii: string;
  numar_adulti: string;
}

const names = [
  "nume",
  "prenume",
  "telefon",
  "email",
  "numar_copii",
  "numar_adulti",
];
interface names_contact {
  nume: string;
  prenume: string;
  email: string;
  telefon: string;
  mesaj: string;
}

const names_contact = ["nume", "email", "mesaj", "telefon", "prenume"];

const submit_contact = async (formData: FormData) => {
  "use server";
  let data: names_contact = {
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    mesaj: "",
  };

  for (let name of names) {
    data[name as keyof names_contact] = formData.get(name) as string;
  }

  try {
    await sendEmail({
      subject: "rezervare",
      message: JSON.stringify(data),
    });
  } catch (e) {
    console.error(e);
  }
  redirect("/confirm");
};

const submit = async (formData: FormData) => {
  "use server";
  let data: names = {
    nume: "",
    prenume: "",
    telefon: "",
    email: "",
    numar_copii: "",
    numar_adulti: "",
  };
  //create object with keys
  for (let name of names) {
    data[name as keyof names] = formData.get(name) as string;
  }
  console.log(data);
  try {
    await sendEmail({
      subject: "contact-tabere",
      message: JSON.stringify(data),
    });
  } catch (e) {
    console.error(e);
  }
  redirect("/tabara-urbana-astra/confirm");
};

export default submit;
export { submit_contact };
