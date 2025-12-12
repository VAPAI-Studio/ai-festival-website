import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Trophy, Film, MonitorPlay, Send, CheckCircle } from "lucide-react";

export function Submit() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock submission
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            console.log("Form submitted");
        }, 1500);
    };
    const categories = [
        {
            name: "AI Short Film",
            description: "Narrative or documentary short films where AI played a significant role in production.",
            format: "Up to 20 min",
            icon: Film
        },
        {
            name: "Experimental / Video Art",
            description: "Abstract, non-narrative, or conceptual works exploring the aesthetics of AI.",
            format: "Up to 15 min",
            icon: MonitorPlay
        },
        {
            name: "Interactive / Immersive",
            description: "VR, AR, or real-time experiences powered by AI.",
            format: "Executable or 360 video",
            icon: Trophy
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12 space-y-20">
            <Helmet>
                <title>Submit - {siteConfig.name}</title>
                <meta name="description" content="Submit your AI film or artwork to the festival." />
            </Helmet>

            {/* Intro */}
            <section className="text-center max-w-3xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold tracking-tight">Competitions & Submission</h1>
                <p className="text-xl text-muted-foreground">
                    We are looking for visionary works that challenge the status quo of filmmaking. Open to creators from all over the world, with a special spotlight on Latin American talent.
                </p>
            </section>

            {/* Categories */}
            <section>
                <h2 className="text-2xl font-bold mb-8 text-center">Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <Card key={index} className="bg-transparent border-white/10 hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <cat.icon className="w-6 h-6" />
                                </div>
                                <CardTitle>{cat.name}</CardTitle>
                                <CardDescription>{cat.format}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{cat.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Eligibility & Criteria */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Eligibility</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span> Works produced after January 1, 2024.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span> Must use AI tools in a significant way (visuals, audio, script).
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span> Open to all nationalities (LATAM creators eligible for special awards).
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span> English subtitles required for non-English works.
                        </li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Selection Criteria</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span> Innovation in the use of AI tools.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span> Narrative and artistic quality.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span> Technical proficiency.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span> Ethical consideration.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Submission Form */}
            <section className="max-w-2xl mx-auto py-12" id="submit-form">
                <div className="text-center mb-10 space-y-4">
                    <h2 className="text-3xl font-bold">Submit Your Project</h2>
                    <p className="text-muted-foreground">
                        Fill out the form below to enter your work. Early bird deadline: <span className="text-primary font-semibold">June 1st, 2026</span>.
                    </p>
                </div>

                {isSubmitted ? (
                    <Card className="bg-primary/10 border-primary/20">
                        <CardContent className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold">Submission Received!</h3>
                            <p className="text-muted-foreground max-w-md">
                                Thank you for submitting your work to SALADA. We have sent a confirmation email to your inbox. Good luck!
                            </p>
                            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                                Submit Another Project
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="jane@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Project Title
                            </label>
                            <input
                                id="title"
                                required
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="The Electric Dream"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="category" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="" disabled selected>Select a category</option>
                                    {categories.map((cat) => (
                                        <option key={cat.name} value={cat.name}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="link" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Project Link (URL)
                                </label>
                                <input
                                    id="link"
                                    type="url"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="https://vimeo.com/..."
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Project Description
                            </label>
                            <textarea
                                id="description"
                                required
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Brief synopsis and technical details..."
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full gap-2" disabled={isLoading}>
                            {isLoading ? "Submitting..." : (
                                <>
                                    Submit Project <Send className="w-4 h-4" />
                                </>
                            )}
                        </Button>
                    </form>
                )}
            </section>
        </div>
    );
}
