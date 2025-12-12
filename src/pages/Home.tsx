import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { HeroBackground } from "../components/3d/HeroBackground";

export function Home() {
    const team = [
        { name: 'Side Out Sticks', role: "Festival Host", bio: "AI-Native film studio." },
        { name: "Yves Fogel", role: "Head of Programming", bio: "Curator with 10 years of experience." },
        { name: "Andrés Scheck", role: "Technical Lead", bio: "AI researcher and developer." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>{siteConfig.name} - Home</title>
                <meta name="description" content={siteConfig.description} />
            </Helmet>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 bg-gradient-to-b from-background to-background/50 overflow-hidden">
                <HeroBackground />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />

                <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 pointer-events-none select-none">
                    {siteConfig.name}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl pointer-events-none select-none">
                    {siteConfig.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
                    <Button size="lg" variant="outline" asChild>
                        <Link to="/submit">Submit your project</Link>
                    </Button>
                </div>
                <div className="mt-12 text-sm font-medium text-muted-foreground pointer-events-none select-none">
                    {siteConfig.dates} • {siteConfig.city}
                </div>
            </section>

            {/* The Festival (About) */}
            <section id="festival" className="py-20 px-4 container mx-auto space-y-20">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight text-primary">The Festival</h2>
                    <p className="text-xl text-muted-foreground">
                        For the first time ever, Montevideo will be home to a festival celebrating the best of Latin America's AI film community.
                    </p>
                    <p className="text-xl text-muted-foreground">
                        AI is not just a tool, but a new medium that requires critical engagement and artistic experimentation.
                    </p>
                </div>

                {/* Team */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center text-primary">The Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {team.map((member, index) => (
                            <Card key={index} className="bg-transparent border-white/10 hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="w-24 h-24 rounded-full bg-white/10 mb-4 mx-auto border-2 border-primary/20" />
                                    <CardTitle className="text-center">{member.name}</CardTitle>
                                    <CardDescription className="text-center text-primary">{member.role}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-center text-muted-foreground">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dates & Deadlines */}
            <section id="dates" className="py-20 px-4 container mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-primary">Dates & Deadlines</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-bold text-primary">01</div>
                        <div className="text-lg font-semibold">Dec 15, 2025</div>
                        <div className="text-sm text-muted-foreground">Open for submissions</div>
                    </div>
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-bold text-primary">02</div>
                        <div className="text-lg font-semibold">Feb 28, 2026</div>
                        <div className="text-sm text-muted-foreground">Submissions deadline</div>
                    </div>
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-bold text-primary">03</div>
                        <div className="text-lg font-semibold">Mar 15, 2026</div>
                        <div className="text-sm text-muted-foreground">Notification Date</div>
                    </div>
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-bold text-primary">04</div>
                        <div className="text-lg font-semibold">May 21-22, 2026</div>
                        <div className="text-sm text-muted-foreground">Screening & Awards</div>
                    </div>
                </div>
            </section>

            {/* Venue */}
            <section id="venue" className="py-20 px-4 bg-white/5">
                <div className="container mx-auto text-center space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight text-primary">Venue</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Cultural Alfabeta</h3>
                            <p className="text-muted-foreground">
                                Join us in the heart of Montevideo for a unique cinematic experience.
                            </p>
                            <Button variant="outline" asChild>
                                <a href="https://www.google.com/maps/search/?api=1&query=Cultural+Alfabeta+Montevideo" target="_blank" rel="noreferrer">
                                    View on Map
                                </a>
                            </Button>
                        </div>

                        {/* Map Embed */}
                        <div className="w-full h-[400px] rounded-lg overflow-hidden border border-white/10 bg-black/50">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=Cultural+Alfabeta+Montevideo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                title="Venue Map"
                                className="filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program */}
            <section id="program" className="py-20 px-4 container mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-primary">Program 2026</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="border-l-2 border-primary pl-6 space-y-2">
                        <h3 className="text-xl font-bold">Day 1: May 21</h3>
                        <p className="text-muted-foreground">Registration, Welcome, Screening Block 1, Panel Discussion, Networking.</p>
                    </div>
                    <div className="border-l-2 border-primary pl-6 space-y-2">
                        <h3 className="text-xl font-bold">Day 2: May 22</h3>
                        <p className="text-muted-foreground">Screening Block 2, Workshops, Awards Ceremony, Afterparty.</p>
                    </div>
                </div>
            </section>

            {/* Jury */}
            <section id="jury" className="py-20 px-4 bg-white/5">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-primary">Festival Jury</h2>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                        The festival jury is composed of film professionals, creatives and experts on the use of AI in filmmaking.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Placeholder Jury Members */}
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="bg-transparent border-white/10 hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="w-24 h-24 rounded-full bg-white/10 mb-4 mx-auto border-2 border-primary/20" />
                                    <CardTitle className="text-center">Jury Member {i}</CardTitle>
                                    <CardDescription className="text-center text-primary">Filmmaker / Expert</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section id="awards" className="py-20 px-4 container mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-primary">Awards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-center">
                    {["Best International AI Film", "Best AI Music Video", "Best Uruguayan AI Film"].map((award) => (
                        <div key={award} className="p-4 border border-white/10 rounded-lg hover:border-primary hover:text-primary transition-all cursor-default">
                            <span className="font-medium">{award}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-20 px-4 bg-white/5">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-primary">FAQ</h2>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg text-primary/80">Who can submit?</h3>
                            <p className="text-muted-foreground">Anyone from anywhere in the world. We welcome creators of all backgrounds.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg text-primary/80">Is there a submission fee?</h3>
                            <p className="text-muted-foreground">Check the submission page for current fee structures and deadlines.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg text-primary/80">What defines an AI film?</h3>
                            <p className="text-muted-foreground">Any moving image work where AI played a significant role in the creative process.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Block */}
            <section className="py-24 px-4 container mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-8 text-primary">Join the Revolution</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link to="/submit">Submit my work</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
