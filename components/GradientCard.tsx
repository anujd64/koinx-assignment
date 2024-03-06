import Image, { StaticImageData } from "next/image";
import CustomButton from "./CustomButton";

type GradientCardProps = {
  cardText: string;
  cardImage: StaticImageData;
};
export default function GradientCard({
  cardText,
  cardImage,
}: GradientCardProps) {
  return (
    <div className="first:bg-gradient-to-br first:from-green-400 first:to-blue-700 last:bg-gradient-to-br last:from-orange-300 last:to-red-600 w-full max-w-[500px] p-3 flex flex-row lg:gap-8 gap-6 rounded-lg object-contain">
      <Image
        src={cardImage}
        className="rounded-lg lg:h-[150px] h-[120px]  lg:w-[150px] w-[120px]  object-cover"
        alt="image"
      />
      <div className=" w-2/3 lg:3/5 flex flex-col items-start justify-evenly">
        <p className=" lg:text-2xl text-lg font-bold text-white">{cardText}</p>
        <CustomButton buttonText="Check Now" />
      </div>
    </div>
  );
}
