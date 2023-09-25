"use client";

import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitFormButton from "./SubmitFormButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className="mt-28 mb-36 max-w-[45rem] text-center scroll-mt-24 leading-8 w-[min(100%,38rem)]"
      id="contact"
      ref={ref}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80 -mt-6">
        Please contact me directly at{" "}
        <a className="underline underline-offset-3" href="mailto:bminer85@gmail.com">
          bminer85@gmail.com
        </a>{" "}
        or through the form below.
      </p>
      <form
        className="mt-6 flex flex-col dark:text-black/80"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          type="email"
          name="email"
          required
          maxLength={100}
          placeholder="Your email"
        />
        <textarea
          className="h-52 p-4 my-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
        />
        <SubmitFormButton />
      </form>
    </motion.section>
  );
}
