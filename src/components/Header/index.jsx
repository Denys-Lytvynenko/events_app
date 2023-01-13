import Image from "next/image";
import Link from "next/link";

import icon from "/public/events-app-favicon.png";

const Header = () => (
    <header>
        <div>
            <div>
                <Image src={icon} alt="logo" />

                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/events">Events</Link>
                        </li>
                        <li>
                            <Link href="/about-us">AboutUs</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <p>Some title</p>
        </div>
    </header>
);

export default Header;
