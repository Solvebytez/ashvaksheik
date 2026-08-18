"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";
import SubmitButton from "@/components/Global/SubmitButton";

type FormValue = {
  name: string;
  email: string;
  terms: boolean;
};

const GuideDownloadForm = ({ guideName }: { guideName: string }) => {
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValue>();

  const onSubmit = async (data: FormValue) => {
    setIsPending(true);
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: `Requested ${guideName}`,
        }),
      });
      if (response.ok) {
        toast("Thank you! I will send the guide shortly.");
        reset();
        setSubmitted(true);
      } else {
        toast("Something went wrong. Please try again or call 647-890-0982.");
      }
    } catch {
      toast("Something went wrong. Please try again or call 647-890-0982.");
    } finally {
      setIsPending(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-black font-semibold tracking-[1px]">
        Thank you. I will email the {guideName} shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        className="w-full bg-white border border-black p-2 text-black mb-4 focus:outline-none h-[4rem]"
        {...register("name", { required: true })}
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-white border border-black p-2 text-black mb-4 focus:outline-none h-[4rem]"
        {...register("email", { required: true })}
      />
      <div className="text-xs text-black mb-4">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            className="mr-2 mt-1"
            {...register("terms", { required: true })}
          />
          <span className="!text-justify">
            By providing Ashvak Sheik your contact information, you acknowledge
            and agree to our{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>{" "}
            and consent to receiving marketing communications, including through
            automated calls, texts, and emails. You may opt out at any time. To
            opt out from texts, reply STOP at any time. Message and data rates
            may apply.
          </span>
        </label>
      </div>
      <SubmitButton
        btnText="Send"
        className="!border-black text-black"
        disabled={isPending}
      />
    </form>
  );
};

export default GuideDownloadForm;
