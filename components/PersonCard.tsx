import Image from 'next/image'
import { PersonType } from '@/utils/types'

type PersonCardProps = {
    person: PersonType;
}
export default function PersonCard(
    {person}: PersonCardProps
){
    return (
        <div className="w-full flex lg:flex-row flex-col items-center justify-center p-4 bg-blue-100 bg-opacity-80 rounded-xl">
            <div className="lg:w-[8%] md:w-[15%] w-[30%] object-contain flex flex-col items-center text-center">
                <Image src={person.image} className="rounded-lg"  alt="person" />
                    <p className="text-xs font-semibold w-full line-clamp-2 pt-1">{person.name}</p>
                    <p className="text-xs text-gray-500 w-full line-clamp-4">{person.position}</p>
            </div>
            <div className='text-sm w-[90%] lg:p-4 p-1'>
            {person.feedback}
            </div>
        </div>
    )
}