//Next Image
import Image from "next/image";

//Next Link
import Link from "next/link";

//Logos
import desktoplogo from "../../public/airbnb-desktop.png";
import mobilelogo from "../../public/airbnb-mobile.webp";

//Components
import { UserNav } from "./UserNavbar";
import { SearchModalComponent } from "./SearchComponent";

export function Navbar() {
    return (
        <nav className="w-full border-b">
            <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
                <Link href="/">
                <Image src={desktoplogo} alt="Desktop Logo" className="w-32 hidden lg:block"/>
                <Image  src={mobilelogo} alt="Mobile Logo" className="w-12 block lg:hidden"/>
                </Link>
                <SearchModalComponent/>
                <UserNav/>
            </div>
        </nav>
    )
}