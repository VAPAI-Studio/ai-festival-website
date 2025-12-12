import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import { Button } from "./ui/Button";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-primary">{siteConfig.name}</h3>
                    <p className="text-sm text-muted-foreground">
                        {siteConfig.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {siteConfig.dates} • {siteConfig.city}
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Festival</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="/#festival" className="text-muted-foreground hover:text-primary transition-colors">The Festival</a></li>
                        <li><a href="/#dates" className="text-muted-foreground hover:text-primary transition-colors">Dates</a></li>
                        <li><a href="/#venue" className="text-muted-foreground hover:text-primary transition-colors">Venue</a></li>
                        <li><a href="/#program" className="text-muted-foreground hover:text-primary transition-colors">Program</a></li>
                        <li><a href="/#jury" className="text-muted-foreground hover:text-primary transition-colors">Jury</a></li>
                        <li><a href="/#awards" className="text-muted-foreground hover:text-primary transition-colors">Awards</a></li>
                        <li><a href="/#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Community</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link to="/community" className="hover:text-primary">LATAM Hub</Link></li>
                        <li><a href={siteConfig.links.discord} target="_blank" rel="noreferrer" className="hover:text-primary">Discord</a></li>
                        <li><a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a></li>
                        <li><a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="hover:text-primary">Twitter</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Stay Updated</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                        Join our newsletter for the latest updates.
                    </p>
                    <div className="flex gap-2">
                        <Button variant="outline" className="w-full" asChild>
                            <a href={siteConfig.links.newsletter} target="_blank" rel="noreferrer">
                                Subscribe
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>
        </footer >
    );
}
