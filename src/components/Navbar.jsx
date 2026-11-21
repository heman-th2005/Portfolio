import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    // Add background once the page is scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Highlight the link of the section currently in view
    useEffect(() => {
        if (!("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        links.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Close the mobile menu with Escape
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header className={`navbar ${scrolled || open ? "scrolled" : ""}`}>
            <nav className="nav-inner" aria-label="Main">

                <a href="#home" className="logo" onClick={() => setOpen(false)}>
                    Hemanth<span>.</span>
                </a>

                <button
                    className={`nav-toggle ${open ? "open" : ""}`}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="nav-links"
                    onClick={() => setOpen((o) => !o)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul id="nav-links" className={`nav-links ${open ? "open" : ""}`}>
                    {links.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={active === id ? "active" : ""}
                                aria-current={active === id ? "true" : undefined}
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    );
}

export default Navbar;
