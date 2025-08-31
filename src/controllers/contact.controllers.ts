import { Response, Request } from "express";
import { sendContactEmail } from "../services/mails.services";

type ContactBody = {
  email: string;
  subject: string;
  message: string;
};

const isNonEmptyString = (v: unknown): v is string =>
  typeof v === "string" && v.trim().length > 0;
const isEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const contactController = {
  sendMail: async function (
    req: Request<unknown, unknown, ContactBody>,
    res: Response
  ): Promise<void> {
    const { email, subject, message } = req.body ?? {};

    try {
      if (!isNonEmptyString(email) || !isEmail(email)) {
        res.status(400).json({ error: "A valid 'email' is required." });
        return;
      }
      if (!isNonEmptyString(subject)) {
        res.status(400).json({ error: "'subject' is required." });
        return;
      }
      if (!isNonEmptyString(message)) {
        res.status(400).json({ error: "'message' is required." });
        return;
      }

      await sendContactEmail(email.trim(), subject.trim(), message.trim());
      res.status(200).json({ message: "Email sent successfully" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
