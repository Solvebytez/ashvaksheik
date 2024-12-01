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
import { useCallback, useState } from "react";
import CheckboxList from "./CheckBox";
import { toast } from "react-toastify";

const HomeSearchForm = () => {
  const [isPending, setIspending] = useState(false as boolean);
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
  const locationValue = watch("property");
  const bedroomValue = watch("bedroom");
  const bathroomValue = watch("bathroom");
  const squareFootageValue = watch("squareFootage");
  const priceRangeValue = watch("priceRange");
  const planningToBuyValue = watch("planningToBuy");
  const purposeForBuyingValue = watch("purposeForBuying");
  const mortgageApprovalValue = watch("mortgageApproval", "");
  const communicationMethodValue = watch("communicationMethod");
  const realtorValue = watch("realtor");

  const handleRadioChange = useCallback(
    (type: any, value: string) => {
      setValue(type, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    },
    [setValue] // Add dependencies if needed, like [setValue] if it's from props or context
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      if (response.status === 200) {
        const result = await response.json();
        console.log("API Response:", result);
        setIspending(false);
        // Handle success, e.g., show a success message or move to the next step
        reset()
        toast("Thank You for your Interest!");
      } else {
        console.error("API call failed:", response.statusText);
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="space-y-10 ">
      <form
        className="flex flex-col space-y-10 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full md:h-[4rem] flex md:flex-row flex-col  gap-6 justify-between">
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              Name:{" "}
              {errors.name?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <input
              placeholder="Name"
              {...register("name", { required: true })}
              className="w-full bg-transparent border border-white  p-2 text-white mb-4 focus:outline-none"
              type="name"
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              Email:{" "}
              {errors.email?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <input
              placeholder="test@gmail.com"
              {...register("email", { required: true })}
              className="w-full bg-transparent border border-white  p-2 text-white mb-4 focus:outline-none"
              type="email"
            />
          </div>
        </div>
        <div className="w-full md:h-[4rem] flex md:flex-row flex-col  gap-6 justify-between">
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              Location:{" "}
              {errors.location?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <MultiSelectOptions
              value={citiesValue}
              onChangeSelect={(value) => setValue("location", value)}
              isMultiOption={true}
              allMultiOptions={locationOption}
              {...register("location", { required: true })}
              placeholder="Select Location"
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              Property:{" "}
              {errors.property?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <MultiSelectOptions
              isMultiOption={true}
              allMultiOptions={propertyTypeOptions}
              {...register("property", { required: true })}
              value={locationValue}
              onChangeSelect={(value) => setValue("property", value)}
              placeholder="Select Property"
            />
          </div>
        </div>
        <div className="w-full md:h-[4rem] flex md:flex-row flex-col  gap-6 justify-between">
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              Bedroom:{" "}
              {errors.bedroom?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <MultiSelectOptions
              value={bedroomValue}
              onChangeSelect={(value) => setValue("bedroom", value)}
              isMultiOption={true}
              allMultiOptions={bedroomOptions}
              {...register("bedroom", { required: true })}
              placeholder="Select Bedroom"
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              Bathroom:{" "}
              {errors.bedroom?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <MultiSelectOptions
              isMultiOption={true}
              allMultiOptions={bathroomOptions}
              {...register("bathroom", { required: true })}
              value={bathroomValue}
              onChangeSelect={(value) => setValue("bathroom", value)}
              placeholder="Select Bathroom"
            />
          </div>
        </div>
        <div className="w-full md:h-[4rem] flex md:flex-row flex-col  gap-6 justify-between">
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              Square Footage (Sq Ft):{" "}
              {errors.squareFootage?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <MultiSelectOptions
              value={squareFootageValue}
              onChangeSelect={(value) => setValue("squareFootage", value)}
              isMultiOption={true}
              allMultiOptions={squareFootageOptions}
              {...register("squareFootage", { required: true })}
              placeholder="Select Square Footage (Sq Ft)"
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              Price Range:{" "}
              {errors.priceRange?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <MultiSelectOptions
              isMultiOption={true}
              allMultiOptions={priceRangeOptions}
              {...register("priceRange", { required: true })}
              value={priceRangeValue}
              onChangeSelect={(value) => setValue("priceRange", value)}
              placeholder="Select Price Range"
            />
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col  gap-6 justify-between">
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              {" "}
              How Soon Are You Planning to Buy?{" "}
              {errors.planningToBuy?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <MultiSelectOptions
              value={planningToBuyValue}
              onChangeSelect={(value) => setValue("planningToBuy", value)}
              isMultiOption={true}
              allMultiOptions={planningToBuyOptions}
              {...register("planningToBuy", { required: true })}
              placeholder="Select Plan"
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              {" "}
              What’s Your Purpose for Buying?{" "}
              {errors.purposeForBuying?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p> 
              )}
            </label>
            <MultiSelectOptions
              isMultiOption={false}
              regularOption={purposeForBuyingOptions}
              {...register("purposeForBuying", { required: true })}
              value={purposeForBuyingValue}
              onChangeSelect={(value) => setValue("purposeForBuying", value)}
              placeholder="Select Purpose"
            />
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col  gap-6 justify-between">
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              {" "}
              Have You Been Pre-Approved for a Mortgage?{" "}
              {errors.mortgageApproval?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <RadioOptions
              onChangeRadio={(value) =>
                handleRadioChange("mortgageApproval", value)
              }
              value={mortgageApprovalValue}
              allRadioOptions={mortgageApprovalOptions}
              {...register("mortgageApproval", { required: true })}
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              {" "}
              Preferred Communication Method:{" "}
              {errors.communicationMethod?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <CheckboxList
              value={communicationMethodValue}
              checkboxOptions={checkboxOptions}
              {...register("communicationMethod", { required: true })}
              onChangeSelect={(value: string[]) =>
                setValue("communicationMethod", value)
              }
            />
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col  gap-6 justify-between">
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              {" "}
              Are You Working with a Realtor?{" "}
              {errors.realtor?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <RadioOptions
              onChangeRadio={(value) => handleRadioChange("realtor", value)}
              value={realtorValue}
              allRadioOptions={realtorOptions}
              {...register("realtor", { required: true })}
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-bold flex gap-3 items-center text-white">
              {" "}
              Phone:{" "}
              {errors.phone?.type === "required" && (
                <p role="alert" className="text-sm font-normal text-red-600">
                  Required
                </p>
              )}
            </label>
            <input
              placeholder="000-000-0000"
              {...register("phone", { required: true })}
              className="w-full bg-transparent border border-white  p-2 text-white mb-4 focus:outline-none"
              type="text"
            />
          </div>
        </div>
        <div className="w-full h-[4rem] flex flex-col  gap-6 justify-between ">
          <SubmitButton
            btnText="Submit Your QUERIES"
            className="!bottom-black text-white"
            disabled={isPending}
          />
        </div>
      </form>
    </div>
  );
};

export default HomeSearchForm;
