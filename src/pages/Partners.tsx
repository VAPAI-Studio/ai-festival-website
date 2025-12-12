import partnersData from "../data/partners.json";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";
import { Button } from "../components/ui/Button";

export function Partners() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-20">
            <Helmet>
                <title>Partners - {siteConfig.name}</title>
                <meta name="description" content="Our partners and sponsors. Press information." />
            </Helmet>
            {/* Intro */}
            <section className="text-center max-w-3xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold tracking-tight">Partners & Sponsors</h1>
                <p className="text-xl text-muted-foreground">
                    We are proud to collaborate with leading organizations that share our vision for the future of creativity.
                </p>
            </section>

            {/* Partners Grid */}
            <section>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {partnersData.map((partner) => (
                        <a
                            key={partner.id}
                            href={partner.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col items-center justify-center p-8 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            <div className="w-full h-16 bg-white/20 mb-4 rounded opacity-50 group-hover:opacity-100 transition-opacity" />
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">{partner.name}</span>
                            <span className="text-xs text-muted-foreground/50 mt-1">{partner.tier}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Why Partner */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                    <h3 className="font-bold text-lg">Visibility</h3>
                    <p className="text-sm text-muted-foreground">Connect with a global audience of creators and tech enthusiasts.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="font-bold text-lg">Innovation</h3>
                    <p className="text-sm text-muted-foreground">Position your brand at the forefront of the AI revolution.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="font-bold text-lg">Community</h3>
                    <p className="text-sm text-muted-foreground">Support the growth of the Latin American creative ecosystem.</p>
                </div>
            </section>

            {/* Press Area */}
            <section className="bg-white/5 rounded-2xl p-8 md:p-12 text-center space-y-8">
                <h2 className="text-2xl font-bold">Press Area</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    For press inquiries, interview requests, and accreditation, please contact our press office. You can also download our media kit below.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" asChild>
                        <a href={siteConfig.links.pressKit} target="_blank" rel="noreferrer">
                            Download Press Kit
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <a href={`mailto:${siteConfig.contact.press}`}>
                            Contact Press Office
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
}
