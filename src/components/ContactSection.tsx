import { RefObject, createRef, useState } from "react";

function FormField({
  name,
  type,
  fieldRef,
  placeholder,
}: {
  name: string;
  type?: string;
  fieldRef: RefObject<HTMLInputElement>;
  placeholder: string;
}) {
  return (
    <div className="mt-10">
      <div className="text-xl">{name}</div>
      <input
        type={type || "text"}
        ref={fieldRef}
        className=" focus-visible:outline-none font-light px-3 py-3 border-b-2 w-full mt-2 text-lg "
        placeholder={placeholder}
      />
    </div>
  );
}

function FormOptionField({
  name,
  fieldRef,
  options,
}: {
  name: string;
  fieldRef: RefObject<HTMLSelectElement>;
  options: string[];
}) {
  const [selectedValue, setSelectedValue] = useState("notSelected");

  return (
    <div className="mt-10">
      <div className="text-xl">{name}</div>
      <select
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
  name,
  fieldRef,
  placeholder,
}: {
  name: string;
  fieldRef: RefObject<HTMLTextAreaElement>;
  placeholder: string;
}) {
  return (
    <div className="mt-10">
      <div className="text-xl">{name}</div>
      <textarea
        className="focus-visible:outline-none font-light px-3 py-3 h-36 border-b-2 w-full mt-2 text-lg"
        ref={fieldRef}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default function ContactSection() {
  const nameRef = createRef<HTMLInputElement>();
  const emailRef = createRef<HTMLInputElement>();
  const companyNameRef = createRef<HTMLInputElement>();
  const budgetRangeRef = createRef<HTMLSelectElement>();
  const serviceRef = createRef<HTMLSelectElement>();
  const messageRef = createRef<HTMLTextAreaElement>();

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
    <div className="min-h-screen relative py-20 md:mx-0 mx-10" id="contact">
      <div className="text-black text-center text-5xl md:text-6xl lg:text-7xl">
        <div className="">
          <span className="text-gray-400">Say Hi!</span> and tell me
        </div>
        <div className="mt-5">about your idea</div>
      </div>
      <div className="md:w-2/3 lg:w-1/2 mx-auto mt-14">
        <FormField name="Name" fieldRef={nameRef} placeholder="Hello...." />
        <FormField
          name="Email Address"
          type="email"
          fieldRef={emailRef}
          placeholder="Where can I reply?"
        />
        <FormField
          name="Company Name"
          fieldRef={companyNameRef}
          placeholder="Your company or website?"
        />
        <FormOptionField
          name="What's in your mind?"
          fieldRef={serviceRef}
          options={serviceOptions}
        />
        <FormOptionField
          name="How much is your budget range?"
          fieldRef={budgetRangeRef}
          options={budgetRangeOptions}
        />
        <FormTextArea
          name="Message"
          placeholder="I want to build some..."
          fieldRef={messageRef}
        />
        <div className="flex mt-8">
          <div className="flex-1"></div>
          <button className="bg-black py-5 px-10 text-white rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
