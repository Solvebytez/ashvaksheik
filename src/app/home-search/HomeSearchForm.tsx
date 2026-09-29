/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import MultiSelectOptions from "./MultiSelectComponent";
import SubmitButton from "@/components/Global/SubmitButton";
import {
  bathroomOptions,
  bedroomOptions,
  locationOption,
  propertyTypeOptions,
  squareFootageOptions,
  priceRangeOptions,
  planningToBuyOptions,
  purposeForBuyingOptions,
  mortgageApprovalOptions,
  checkboxOptions,
  realtorOptions,
} from "@/lib/Data/HomeSearch";
import RadioOptions from "./RadioOptions";
import { useCallback, useEffect, useState } from "react";
import CheckboxList from "./CheckBox";
import { toast } from "react-toastify";

const inputClass =
  "mt-2 w-full border border-white/35 bg-transparent px-3 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none";

const FieldLabel = ({
  htmlFor,
  children,
  required,
  error,
}: {
  htmlFor: string;
  children: string;
  required?: boolean;
  error?: boolean;
}) => (
  <label htmlFor={htmlFor} className="block text-sm tracking-[1px] text-white/80 uppercase">
    {children}
    {required ? <span className="text-white"> *</span> : null}
    {error ? (
      <span role="alert" className="ml-2 text-xs normal-case tracking-normal text-red-400">
        Required
      </span>
    ) : null}
  </label>
);

const HomeSearchForm = () => {
  const [isPending, setIspending] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      location: null,
      property: null,
      bedroom: null,
      bathroom: null,
      squareFootage: null,
      priceRange: null,
      planningToBuy: null,
      purposeForBuying: null,
      mortgageApproval: "",
      communicationMethod: ["email"],
      realtor: "",
      phone: "",
    },
  });

  const citiesValue = watch("location");
  const propertyValue = watch("property");
  const bedroomValue = watch("bedroom");
  const bathroomValue = watch("bathroom");
  const squareFootageValue = watch("squareFootage");
  const priceRangeValue = watch("priceRange");
  const planningToBuyValue = watch("planningToBuy");
  const purposeForBuyingValue = watch("purposeForBuying");
  const mortgageApprovalValue = watch("mortgageApproval", "");
  const communicationMethodValue = watch("communicationMethod");
  const realtorValue = watch("realtor");

  useEffect(() => {
    register("location", { required: true });
    register("property", { required: true });
    register("priceRange", { required: true });
  }, [register]);

  const setField = useCallback(
    (name: any, value: any) => {
      setValue(name, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    },
    [setValue]
  );

  const onSubmit = async (data: any) => {
    setIspending(true);
    try {
      const response = await fetch("/api/home-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        reset();
        toast("Ashvak has your search. He will be in touch.");
      } else {
        toast("Something went wrong. Please try again or call 647-890-0982.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast("Something went wrong. Please try again or call 647-890-0982.");
    } finally {
      setIspending(false);
    }
  };

  return (
    <form className="mx-auto max-w-4xl space-y-10 pb-16" onSubmit={handleSubmit(onSubmit)}>
      <section className="space-y-6">
        <h2 className="text-xl font-tenor_Sans uppercase tracking-[2px]">How to reach you</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <FieldLabel htmlFor="search-name" required error={errors.name?.type === "required"}>
              Name
            </FieldLabel>
            <input
              id="search-name"
              placeholder="Your name"
              autoComplete="name"
              {...register("name", { required: true })}
              className={inputClass}
              type="text"
            />
          </div>
          <div>
            <FieldLabel htmlFor="search-phone" required error={errors.phone?.type === "required"}>
              Phone
            </FieldLabel>
            <input
              id="search-phone"
              placeholder="647-000-0000"
              autoComplete="tel"
              inputMode="tel"
              {...register("phone", { required: true })}
              className={inputClass}
              type="tel"
            />
          </div>
          <div className="md:col-span-2">
            <FieldLabel htmlFor="search-email" required error={errors.email?.type === "required"}>
              Email
            </FieldLabel>
            <input
              id="search-email"
              placeholder="you@email.com"
              autoComplete="email"
              {...register("email", { required: true })}
              className={inputClass}
              type="email"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6 border-t border-white/15 pt-10">
        <h2 className="text-xl font-tenor_Sans uppercase tracking-[2px]">The home</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <FieldLabel htmlFor="search-location" required error={Boolean(errors.location)}>
              City
            </FieldLabel>
            <MultiSelectOptions
              inputId="search-location"
              value={citiesValue}
              onChangeSelect={(value) => setField("location", value)}
              isMultiOption={true}
              allMultiOptions={locationOption}
              placeholder="Brampton, Mississauga, Toronto..."
            />
          </div>
          <div>
            <FieldLabel htmlFor="search-property" required error={Boolean(errors.property)}>
              Home type
            </FieldLabel>
            <MultiSelectOptions
              inputId="search-property"
              isMultiOption={true}
              allMultiOptions={propertyTypeOptions}
              value={propertyValue}
              onChangeSelect={(value) => setField("property", value)}
              placeholder="Detached, condo, townhouse..."
            />
          </div>
          <div>
            <FieldLabel htmlFor="search-price" required error={Boolean(errors.priceRange)}>
              Budget
            </FieldLabel>
            <MultiSelectOptions
              inputId="search-price"
              isMultiOption={true}
              allMultiOptions={priceRangeOptions}
              value={priceRangeValue}
              onChangeSelect={(value) => setField("priceRange", value)}
              placeholder="Select a price range"
            />
          </div>
          <div>
            <FieldLabel htmlFor="search-beds">Bedrooms</FieldLabel>
            <MultiSelectOptions
              inputId="search-beds"
              value={bedroomValue}
              onChangeSelect={(value) => setField("bedroom", value)}
              isMultiOption={true}
              allMultiOptions={bedroomOptions}
              placeholder="Optional"
            />
          </div>
          <div>
            <FieldLabel htmlFor="search-baths">Bathrooms</FieldLabel>
            <MultiSelectOptions
              inputId="search-baths"
              isMultiOption={true}
              allMultiOptions={bathroomOptions}
              value={bathroomValue}
              onChangeSelect={(value) => setField("bathroom", value)}
              placeholder="Optional"
            />
          </div>
          <div>
            <FieldLabel htmlFor="search-size">Size</FieldLabel>
            <MultiSelectOptions
              inputId="search-size"
              value={squareFootageValue}
              onChangeSelect={(value) => setField("squareFootage", value)}
              isMultiOption={true}
              allMultiOptions={squareFootageOptions}
              placeholder="Optional"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6 border-t border-white/15 pt-10">
        <h2 className="text-xl font-tenor_Sans uppercase tracking-[2px]">Timing</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <FieldLabel htmlFor="search-when">How soon</FieldLabel>
            <MultiSelectOptions
              inputId="search-when"
              isMultiOption={false}
              regularOption={planningToBuyOptions}
              value={planningToBuyValue}
              onChangeSelect={(value) => setField("planningToBuy", value)}
              placeholder="Optional"
            />
          </div>
          <div>
            <FieldLabel htmlFor="search-purpose">Purpose</FieldLabel>
            <MultiSelectOptions
              inputId="search-purpose"
              isMultiOption={false}
              regularOption={purposeForBuyingOptions}
              value={purposeForBuyingValue}
              onChangeSelect={(value) => setField("purposeForBuying", value)}
              placeholder="Optional"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[1px] text-white/80">Mortgage</p>
            <RadioOptions
              onChangeRadio={(value) => setField("mortgageApproval", value)}
              value={mortgageApprovalValue}
              allRadioOptions={mortgageApprovalOptions}
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[1px] text-white/80">Reach you by</p>
            <CheckboxList
              value={communicationMethodValue}
              checkboxOptions={checkboxOptions}
              onChangeSelect={(value: string[]) => setField("communicationMethod", value)}
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-sm uppercase tracking-[1px] text-white/80">
              Already working with a realtor?
            </p>
            <RadioOptions
              onChangeRadio={(value) => setField("realtor", value)}
              value={realtorValue}
              allRadioOptions={realtorOptions}
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col items-start gap-4 border-t border-white/15 pt-10">
        <SubmitButton btnText={isPending ? "Sending" : "Request homes"} disabled={isPending} />
        <p className="text-sm text-white/60">
          Or call{" "}
          <a className="text-white underline" href="tel:6478900982">
            647-890-0982
          </a>
          . Fields marked * are required.
        </p>
      </div>
    </form>
  );
};

export default HomeSearchForm;
