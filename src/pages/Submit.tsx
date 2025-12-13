import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Trophy, Film, MonitorPlay, Send, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Submit() {
    const { t } = useTranslation();
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
            name: t('submit.categories.short.name'),
            description: t('submit.categories.short.desc'),
            format: t('submit.categories.short.format'),
            icon: Film
        },
        {
            name: t('submit.categories.experimental.name'),
            description: t('submit.categories.experimental.desc'),
            format: t('submit.categories.experimental.format'),
            icon: MonitorPlay
        },
        {
            name: t('submit.categories.immersive.name'),
            description: t('submit.categories.immersive.desc'),
            format: t('submit.categories.immersive.format'),
            icon: Trophy
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12 space-y-20">
            <Helmet>
                <title>{t('submit.title')} - {siteConfig.name}</title>
                <meta name="description" content={t('submit.intro')} />
            </Helmet>

            {/* Intro */}
            <section className="text-center max-w-3xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold tracking-tight">{t('submit.title')}</h1>
                <p className="text-xl text-muted-foreground">
                    {t('submit.intro')}
                </p>
            </section>

            {/* Categories */}
            <section>
                <h2 className="text-2xl font-bold mb-8 text-center">{t('submit.categories.title')}</h2>
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
                    <h2 className="text-2xl font-bold">{t('submit.eligibility.title')}</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {(t('submit.eligibility.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-primary">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">{t('submit.criteria.title')}</h2>
                    <ul className="space-y-3 text-muted-foreground">
                        {(t('submit.criteria.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-primary">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Submission Form */}
            <section className="max-w-2xl mx-auto py-12" id="submit-form">
                <div className="text-center mb-10 space-y-4">
                    <h2 className="text-3xl font-bold">{t('submit.form.title')}</h2>
                    <p className="text-muted-foreground">
                        {t('submit.form.subtitle')} <span className="text-primary font-semibold">{t('submit.form.date')}</span>.
                    </p>
                </div>

                {isSubmitted ? (
                    <Card className="bg-primary/10 border-primary/20">
                        <CardContent className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold">{t('submit.form.success.title')}</h3>
                            <p className="text-muted-foreground max-w-md">
                                {t('submit.form.success.message')}
                            </p>
                            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                                {t('submit.form.success.button')}
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {t('submit.form.labels.name')}
                                    </label>
                                    <input
                                        id="name"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder={t('submit.form.placeholders.name')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {t('submit.form.labels.email')}
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder={t('submit.form.placeholders.email')}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {t('submit.form.labels.projectTitle')}
                                </label>
                                <input
                                    id="title"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder={t('submit.form.placeholders.projectTitle')}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="category" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {t('submit.form.labels.category')}
                                    </label>
                                    <select
                                        id="category"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <option value="" disabled selected>{t('submit.form.labels.selectCategory')}</option>
                                        {categories.map((cat) => (
                                            <option key={cat.name} value={cat.name}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="link" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {t('submit.form.labels.link')}
                                    </label>
                                    <input
                                        id="link"
                                        type="url"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder={t('submit.form.placeholders.link')}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="description" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {t('submit.form.labels.description')}
                                </label>
                                <textarea
                                    id="description"
                                    required
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder={t('submit.form.placeholders.description')}
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full gap-2" disabled={isLoading}>
                                {isLoading ? t('submit.form.submitting') : (
                                    <>
                                        {t('submit.form.submitButton')} <Send className="w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                        <p className="text-center text-sm text-muted-foreground mt-4">
                            By submitting, you agree to our <Link to="/rules" className="underline hover:text-primary">Rules & Terms</Link>.
                        </p>
                    </>
                )}
            </section>
        </div>
    );
}
