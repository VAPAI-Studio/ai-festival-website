import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../config/site";
import { Button } from "./ui/Button";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#")) {
            e.preventDefault();
            const id = href.replace("/#", "");

            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            } else {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
            setIsMenuOpen(false);
        }
    };

    const navigation = [
        { name: "The Festival", href: "/#festival" },
        { name: "Dates", href: "/#dates" },
        { name: "Program", href: "/#program" },
        { name: "Jury", href: "/#jury" },
        { name: "Awards", href: "/#awards" },
        { name: "Submit", href: "/submit" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
                        {siteConfig.name}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navigation.map((item) => (
                        item.href.startsWith("/#") ? (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ) : (
                            item.name === "Submit" ? (
                                <Button size="sm" asChild key={item.name}>
                                    <Link to={item.href}>{item.name} Project</Link>
                                </Button>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    {item.name}
                                </Link>
                            )
                        )
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black/95 border-b border-white/10 p-4 md:hidden flex flex-col space-y-4">
                    {navigation.map((item) => (
                        item.href.startsWith("/#") ? (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-foreground transition-colors hover:text-primary cursor-pointer"
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ) : (
                            item.name === "Submit" ? (
                                <Button size="sm" asChild key={item.name} className="w-full">
                                    <Link to={item.href} onClick={() => setIsMenuOpen(false)}>{item.name} Project</Link>
                                </Button>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        )
                    ))}
                </div>
            )}
        </header>
    );
}
