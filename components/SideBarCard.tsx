import CardImage from "@/public/card-illustration-1.svg";
import Image from "next/image";
import CustomButton from "./CustomButton";

export default function SideBarCard() {

    return(
        <div className="h-fit font-bold text-white text-center w-full flex flex-col gap-2 items-center bg-blue-600 rounded-2xl px-16 py-12">
        <p className="lg:text-2xl text-xl ">Get Started with KoinX for Free</p>
        <p className="font-light text-md">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <Image
          src={CardImage}
          alt="card-illustration"
          className="lg:w-4/5 w-3/5"
        />
        <CustomButton buttonText="Get Started for FREE" />
      </div>
    )
    
}