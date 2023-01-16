const navigation = {
    home: { name: "Home", href: "/" },
    events: { name: "Events", href: "/events" },
    aboutUs: { name: "About us", href: "/about-us" },
};

const navCreator = () => {
    let items = [];

    for (const i in navigation) {
        items.push(navigation[i]);
    }

    return items;
};

const navItems = navCreator();

export { navigation, navItems };
