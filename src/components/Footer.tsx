import { siteConfig } from "../config/site";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="py-6 md:px-8 md:py-0 border-t border-white/10 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    {t('footer.builtBy')}{" "}
                    <a
                        href={siteConfig.links.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        {siteConfig.name}
                    </a>
                    . {t('footer.rights')}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link to="/#festival" className="hover:text-primary transition-colors">{t('nav.festival')}</Link>
                    <Link to="/#dates" className="hover:text-primary transition-colors">{t('nav.dates')}</Link>
                    <Link to="/#awards" className="hover:text-primary transition-colors">{t('nav.awards')}</Link>
                    <Link to="/#jury" className="hover:text-primary transition-colors">{t('nav.jury')}</Link>
                    <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        Twitter
                    </a>
                    <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}
