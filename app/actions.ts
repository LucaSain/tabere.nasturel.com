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
        subject: "rezervare",
        message: JSON.stringify(data),
      });
    } catch (e) {
      console.error(e);
    }
    redirect("/confirm");
  }

export default submit;