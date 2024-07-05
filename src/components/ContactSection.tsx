"use client";

import LoadingImage from "@/assets/LoadingImage";
import emailJs from "@emailjs/browser";
import { RefObject, createRef, useEffect, useState } from "react";
import validator from "validator";

function FormField({
  label,
  name,
  type,
  fieldRef,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  fieldRef: RefObject<HTMLInputElement>;
  placeholder: string;
  error: string;
}) {
  return (
    <div className="mt-10">
      <div className="text-xl">{label}</div>
      <input
        name={name}
        type={type || "text"}
        ref={fieldRef}
        className={
          "focus-visible:outline-none font-light px-3 py-3 border-b-2 w-full mt-2 text-lg" +
          (error ? " border-red-400" : "")
        }
        placeholder={placeholder}
      />
      <div className="text-red-400 mt-1">{error}</div>
    </div>
  );
}

function FormOptionField({
  label,
  name,
  fieldRef,
  options,
  selectedValue,
  setSelectedValue,
}: {
  label: string;
  name: string;
  fieldRef: RefObject<HTMLSelectElement>;
  options: string[];
  error: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}) {
  return (
    <div className="mt-10">
      <div className="text-xl">{label}</div>
      <select
        name={name}
        hidden={true}
        ref={fieldRef}
        onChange={() => {}}
        value={selectedValue}
      >
        <option value="notSelected">Not Selected</option>
        {options.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-3">
        {options.map((value, index) => (
          <div
            key={index}
            className={
              "px-4 py-3 rounded-full hover:bg-gray-300 cursor-pointer" +
              (selectedValue === value ? " bg-gray-300" : " bg-gray-100")
            }
            onClick={() => {
              if (!fieldRef || !fieldRef.current) return;
              setSelectedValue(value);
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

function FormTextArea({
  label,
  name,
  fieldRef,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  fieldRef: RefObject<HTMLTextAreaElement>;
  placeholder: string;
  error: string;
}) {
  return (
    <div className="mt-10">
      <div className="text-xl">{label}</div>
      <textarea
        name={name}
        className={
          "focus-visible:outline-none font-light px-3 py-3 h-36 border-b-2 w-full mt-2 text-lg" +
          (error ? " border-red-400" : "")
        }
        ref={fieldRef}
        placeholder={placeholder}
      />
      <div className="text-red-400 mt-1">{error}</div>
    </div>
  );
}

export default function ContactSection() {
  const [selectedBudgetRange, setSelectedBudgetRange] = useState("notSelected");
  const [selectedServiceOption, setSelectedServiceOption] =
    useState("notSelected");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const nameRef = createRef<HTMLInputElement>();
  const emailRef = createRef<HTMLInputElement>();
  const companyNameRef = createRef<HTMLInputElement>();
  const budgetRangeRef = createRef<HTMLSelectElement>();
  const serviceRef = createRef<HTMLSelectElement>();
  const messageRef = createRef<HTMLTextAreaElement>();
  const form = createRef<HTMLFormElement>();

  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (!messageSent) return;

    const timer = setTimeout(() => {
      setMessageSent(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [messageSent]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form || !form.current) return;

    const name = (form.current.name as any as HTMLFormElement).value;
    const email = (form.current.email as any as HTMLFormElement).value;
    const message = (form.current.message as any as HTMLTextAreaElement).value;

    const _errors = {
      name: "",
      email: "",
      company: "",
      budget: "",
      service: "",
      message: "",
    };

    let hasError = false;

    if (!name) {
      _errors.name = "This field is required";
      hasError = true;
    }

    if (!email) {
      _errors.email = "This field is required";
      hasError = true;
    } else if (!validator.isEmail(email)) {
      _errors.name = "Enter a valid email";
      hasError = true;
    }

    if (!message) {
      _errors.message = "This field is required";
      hasError = true;
    }

    setErrors(_errors);

    if (hasError) return;

    const formElement = form.current;

    setLoading(true);
    try {
      await emailJs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      // clear the form
      formElement.reset();
      setSelectedBudgetRange("notSelected");
      setSelectedServiceOption("notSelected");

      // send message that email has been sent
      setMessageSent(true);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const budgetRangeOptions = [
    "<$1k",
    "$1k-5k",
    "$5k-10k",
    "$10k-20k",
    "$20k-50k",
    ">$50k",
  ];

  const serviceOptions = [
    "Fullstack web development",
    "Backend development",
    "Smart Contract development",
    "Blockchain integration",
    "App Development",
  ];

  return (
    <div className="min-h-screen relative py-20 md:mx-10 mx-5" id="contact">
      <div className="text-black text-center text-5xl md:text-6xl lg:text-7xl">
        <div className="">
          <span className="text-gray-400">Say Hi!</span> and tell me
        </div>
        <div className="mt-5">about your idea</div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:w-2/3 lg:w-1/2 mx-auto mt-14"
      >
        <FormField
          label="Name"
          name="name"
          fieldRef={nameRef}
          placeholder="Hello...."
          error={errors.name}
        />
        <FormField
          label="Email Address"
          name="email"
          type="email"
          fieldRef={emailRef}
          placeholder="Where can I reply?"
          error={errors.email}
        />
        <FormField
          label="Company Name"
          name="company"
          fieldRef={companyNameRef}
          placeholder="Your company or website?"
          error={errors.company}
        />
        <FormOptionField
          label="What's in your mind?"
          selectedValue={selectedServiceOption}
          setSelectedValue={setSelectedServiceOption}
          name="service"
          fieldRef={serviceRef}
          options={serviceOptions}
          error={errors.service}
        />
        <FormOptionField
          label="How much is your budget range?"
          selectedValue={selectedBudgetRange}
          setSelectedValue={setSelectedBudgetRange}
          name="budget"
          fieldRef={budgetRangeRef}
          options={budgetRangeOptions}
          error={errors.budget}
        />
        <FormTextArea
          label="Message"
          name="message"
          placeholder="I want to build some..."
          fieldRef={messageRef}
          error={errors.message}
        />
        <div className="flex mt-8">
          {!messageSent ? (
            <>
              <div className="flex-1"></div>
              {!loading ? (
                <button
                  type="submit"
                  className="bg-black py-5 px-10 text-white rounded-full"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  className="bg-gray-900 py-5 px-10 text-white rounded-full flex gap-2"
                  disabled
                >
                  <LoadingImage />
                  Submiting...
                </button>
              )}
            </>
          ) : (
            <div className="text-green-400 text-center">Message Sent!</div>
          )}
        </div>
      </form>
    </div>
  );
}
