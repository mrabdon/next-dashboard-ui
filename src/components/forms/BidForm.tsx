"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
    bidInfo: z.string().min(1, { message: "Bid info is required!" }),
    highestBid: z.string().min(1,{message: "Enter a value"}),
    regularPrice: z.string().min(1, { message: "Regular price is required!" }),
    productDescription: z.string().min(1, { message: "Product Description is required!" }),
    img: z.instanceof(File, { message: "Image is required" }),
  });
  

type Inputs = z.infer<typeof schema>;

const BidForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
    <h1 className="text-xl font-semibold">Create a new bid</h1>
    <span className="text-xs text-gray-400 font-medium">
      Authentication Information
    </span>
    <div className="flex justify-between flex-wrap gap-4">
      <InputField
        label="Bid Info"
        name="bidInfo"
        defaultValue={data?.bidInfo}
        register={register}
        error={errors?.bidInfo}
      />
      <InputField
        label="Highest Bid"
        name="highestBid"
        type="number"
        defaultValue={data?.highestBid}
        register={register}
        error={errors?.highestBid}
      />
      <InputField
        label="Regular Price"
        name="regularPrice"
        type="number"
        defaultValue={data?.regularPrice}
        register={register}
        error={errors?.regularPrice}
      />

      <InputField
        label="Product Description"
        name="productDescription"
        defaultValue={data?.productDescription}
        register={register}
        error={errors?.productDescription}
      />
    </div>

    
      <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
        <label
          className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
          htmlFor="img"
        >
          <Image src="/upload.png" alt="" width={28} height={28} />
          <span>Upload a photo</span>
        </label>
        <input type="file" id="img" {...register("img")} className="hidden" />
        {errors.img?.message && (
          <p className="text-xs text-red-400">
            {errors.img.message.toString()}
          </p>
        )}
      </div>
  
    <button className="bg-blue-400 text-white p-2 rounded-md">
      {type === "create" ? "Create" : "Update"}
    </button>
  </form>
  );
};

export default BidForm;
