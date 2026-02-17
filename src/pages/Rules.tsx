
import { HeroBackground } from "../components/3d/HeroBackground";
import { useTranslation } from "react-i18next";

export function Rules() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <HeroBackground />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-8 pointer-events-none">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                            {t('rules.title')}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-black/50">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16">

                    {/* Eligibility */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">{t('rules.eligibility.title')}</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('rules.eligibility.intro')}</p>
                            <ul className="space-y-3 pl-6">
                                {(t('rules.eligibility.items', { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">{t('rules.categories.title')}</h2>
                        <div className="space-y-6 text-muted-foreground">
                            <div className="border-l-2 border-primary/50 pl-6 space-y-2">
                                <h3 className="text-xl font-semibold text-white">{t('rules.categories.aiShort.title')}</h3>
                                <p>{t('rules.categories.aiShort.description')}</p>
                            </div>
                            <div className="border-l-2 border-primary/50 pl-6 space-y-2">
                                <h3 className="text-xl font-semibold text-white">{t('rules.categories.experimental.title')}</h3>
                                <p>{t('rules.categories.experimental.description')}</p>
                            </div>

                            <div className="border-l-2 border-primary/50 pl-6 space-y-2">
                                <h3 className="text-xl font-semibold text-white">{t('rules.categories.musicVideo.title')}</h3>
                                <p>{t('rules.categories.musicVideo.description')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Selection Criteria */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">{t('rules.criteria.title')}</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t('rules.criteria.intro')}</p>
                            <ul className="space-y-3 pl-6">
                                {(t('rules.criteria.items', { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Submission Process */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">{t('rules.process.title')}</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <ol className="space-y-3 pl-6 list-decimal">
                                {(t('rules.process.items', { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i}>
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">{t('rules.terms.title')}</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <ul className="space-y-3 pl-6">
                                {(t('rules.terms.items', { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6 bg-white/5 p-8 rounded-xl border border-white/10">
                        <h2 className="text-2xl font-bold text-primary">{t('rules.contact.title')}</h2>
                        <p className="text-muted-foreground">
                            <span dangerouslySetInnerHTML={{ __html: t('rules.contact.text') }} />
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}
