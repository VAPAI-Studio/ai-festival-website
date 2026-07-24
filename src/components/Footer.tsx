import { siteConfig } from "../config/site";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Instagram, Twitter, MessageCircle, Github } from "lucide-react";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t border-white/10 bg-black/90 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
                                {siteConfig.name}
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            {siteConfig.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {siteConfig.city}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {t('footer.organizedBy')}{" "}
                            <a
                                href="https://souts.studio"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
                            >
                                SOUTS — The AI-Native Film Production Company
                            </a>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">{t('nav.festival')}</h3>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link to="/#festival" className="hover:text-primary transition-colors">{t('nav.festival')}</Link>
                            <Link to="/#dates" className="hover:text-primary transition-colors">{t('nav.dates')}</Link>
                            <Link to="/#program" className="hover:text-primary transition-colors">{t('nav.program')}</Link>
                            <Link to="/#jury" className="hover:text-primary transition-colors">{t('nav.jury')}</Link>
                            <Link to="/#awards" className="hover:text-primary transition-colors">{t('nav.awards')}</Link>
                            <Link to="/rules" className="hover:text-primary transition-colors">Rules & Terms</Link>
                            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                        </nav>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Connect</h3>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                                <Instagram className="w-4 h-4" /> Instagram
                            </a>
                            <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                                <Github className="w-4 h-4" /> GitHub
                            </a>
                            <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                                <Twitter className="w-4 h-4" /> Twitter
                            </a>
                            <a href={siteConfig.links.discord} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" /> Discord
                            </a>
                        </nav>
                    </div>


                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                    <p>
                        {t('footer.builtBy')}{" "}
                        <a
                            href="https://souts.studio"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
                        >
                            SOUTS
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
