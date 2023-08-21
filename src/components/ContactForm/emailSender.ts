import { contactData } from "@/types/interfaces";
import nodemailer from "nodemailer";

const MAILUSER = process.env.NEXT_MAILUSER;
const MAILPASSWORD = process.env.NEXT_MAILPASSWORD;

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  service: "hotmail",
  port: 587,
  auth: {
    user: MAILUSER,
    pass: MAILPASSWORD,
  },
});

export const sendMail = async (formData: contactData) => {
  try {
    await transporter.sendMail({
      from: "bookskingdom@outlook.es",
      to: "r.g.rouco1@gmail.com",
      subject: formData.subservice,
      text:
        formData.name +
        " email: " +
        formData.email +
        " telefono: " +
        formData.phone + " motivo: " + formData.reason,
    });
    return "Message sent";
  } catch (error) {
    return error;
  }
};
