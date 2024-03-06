import Image from "next/image";
import logo from "../public/logo.svg";
import Nav from "./Nav";

export default function NavHeader() {
    return (
        <div className="bg-white absolute top-0 left-0 px-12 flex lg:flex-row flex-wrap font-semibold z-10 w-full justify-between text-sm drop-shadow-sm">
        <a href="/">
        <Image src={logo} alt="Logo" />
        </a>
        <Nav />
      </div>
    )
}