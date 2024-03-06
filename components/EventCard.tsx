import { EventType } from "@/utils/types";
import { cn } from "@/utils/utils";
import Image from "next/image";

type EventCardProps = {
    event: EventType;
    index: number;
}

export default function EventCard({event, index }: EventCardProps) {
    return (

        <div className={cn("lg:w-[400px] w-[300px] flex flex-row gap-4 items-start align-top rounded-lg p-5", index%2===0 ?"bg-blue-100" : "bg-green-100" )} >
        <Image src={event.icon} className={cn("p-2 w-1/10 rounded-full", index%2===0 ? "bg-blue-400" : "bg-green-400")} width={40} height={40} alt="icon" />
        <div className="flex flex-col gap-1">
            <p className="text-md font-semibold w-full line-clamp-2">{event.heading}</p>
            <p className="text-md w-full line-clamp-4">{event.content}</p>
        </div>
    </div>
    )    
}