import Image from "next/image";
import Link from "next/link";
import React from "react";

import icon from "/public/events-app-favicon.png";

const Header = () => (
    <header>
        <nav>
            <Image src={icon} alt="logo" />

            <div>
                <Link href="/">Home</Link>
                <Link href="/events">Events</Link>
                <Link href="/about-us">AboutUs</Link>
            </div>
        </nav>
    </header>
);

export default Header;
