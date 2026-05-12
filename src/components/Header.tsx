import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { siteConfig } from "../config/site";
import { Button } from "./ui/Button";
import { useTranslation } from "react-i18next";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

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

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navigation = [
        { name: t('nav.festival'), href: "/#festival" },
        { name: t('nav.dates'), href: "/#dates" },
        { name: t('nav.program'), href: "/#program" },
        { name: t('nav.jury'), href: "/#jury" },
        { name: t('nav.awards'), href: "/#awards" },
        { name: t('nav.submit'), href: "/submit" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="flex items-center gap-2" aria-label={siteConfig.name}>
                    <span
                        className="block h-7 w-52 bg-gradient-to-r from-orange-500 to-orange-300"
                        style={{
                            WebkitMaskImage: "url(/SnFLogo.png)",
                            maskImage: "url(/SnFLogo.png)",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                        }}
                    />
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
                            item.href === "/submit" ? (
                                <Button size="sm" asChild key={item.name}>
                                    <a href="https://www.lifecinemas.com.uy/pelicula/primer-festival-de-ia-en-el-cine" target="_blank" rel="noopener noreferrer">
                                        {t('nav.submitProject')}
                                    </a>
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

                    <button
                        onClick={toggleLanguage}
                        className="p-2 text-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium"
                        aria-label="Toggle language"
                    >
                        <Globe className="w-4 h-4" />
                        {i18n.language === 'en' ? 'ES' : 'EN'}
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className="p-2 text-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium"
                        aria-label="Toggle language"
                    >
                        <Globe className="w-4 h-4" />
                        {i18n.language === 'en' ? 'ES' : 'EN'}
                    </button>
                    <button
                        className="p-2 text-foreground"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
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
                            item.href === "/submit" ? (
                                <Button size="sm" asChild key={item.name} className="w-full">
                                    <a href="https://www.lifecinemas.com.uy/pelicula/primer-festival-de-ia-en-el-cine" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                                        {t('nav.submitProject')}
                                    </a>
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
