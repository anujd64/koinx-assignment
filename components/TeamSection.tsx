import { peopleData } from "@/utils/data";
import PersonCard from "@/components/PersonCard";

export default function TeamSection() {
  return (
    <div className="bg-white drop-shadow-lg rounded-lg lg:p-8 p-4 h-fit flex flex-col gap-3">
      <p className="text-2xl font-semibold">Team </p>
      <p>
      Lorem ipsum dolor sit amet consectetur. ld consequat adipiscing arcu nibh. Eget mattis in mi integer sit
egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-4">
        
      {peopleData.map((person, index) => {
          return <PersonCard key={index} person={person} />;
        })}
    </div>
    </div>
  );
}
