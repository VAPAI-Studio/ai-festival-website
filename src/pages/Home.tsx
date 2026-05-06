import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import programData from "../data/program.json";
import partnersData from "../data/partners.json";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Calendar, MapPin, Trophy, Users, Film, Mic, Globe, HelpCircle, Monitor } from "lucide-react";
import { HeroBackground } from "../components/3d/HeroBackground";
import { useTranslation } from "react-i18next";

export function Home() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <HeroBackground />
                <div className="absolute top-20 md:top-32 left-0 right-0 flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-1 md:gap-3 text-xs sm:text-sm md:text-base text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards z-20 px-2 sm:px-4 text-center pointer-events-none">
                    <img src="/images/sponsors/sideoutsticks.png" alt="Side Out Sticks" className="h-8 sm:h-10 md:h-16 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity pointer-events-auto" />
                    <span>{t('hero.togetherWith')}</span>
                    <img src="/images/sponsors/life.png" alt="Life Cinemas" className="h-6 sm:h-8 md:h-11 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity pointer-events-auto" />
                    <span>{t('hero.present')}</span>
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-8 pointer-events-none">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-forwards">
                            {siteConfig.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
                            {t('hero.subtitle')}
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-forwards pointer-events-auto">
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{t('hero.dates')}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>{siteConfig.city}</span>
                            </div>
                        </div>
                        <div className="relative group mt-4 pointer-events-auto">
                            <Button size="lg" className="cursor-default">
                                {t('hero.cta')}
                            </Button>
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-white/10 backdrop-blur-md text-muted-foreground px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {t('hero.ticketsSoon')}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Festival */}
            <section id="festival" className="py-24 bg-black/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary scroll-rgb" data-text={t('festival.title')}>
                                {t('festival.title')}
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    {t('festival.description')}
                                </p>
                                <p>
                                    {t('festival.description2')}
                                </p>
                                <p>
                                    {t('festival.description3')}
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                            <img
                                src="/images/festival_image.png"
                                alt="Sticks n' Festival"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Dates */}
            <section id="dates" className="py-24 border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 text-primary scroll-rgb" data-text={t('dates.title')}>
                        {t('dates.title')}
                    </h2>
                    <div className="grid gap-8 md:grid-cols-4">
                        {[
                            { date: "Feb 16, 2026", label: t('dates.open') },
                            { date: "May 1, 2026", label: t('dates.deadline') },
                            { date: "May 15, 2026", label: t('dates.notification') },
                            { date: "May 28-29, 2026", label: t('dates.screening') }
                        ].map((item, i) => (
                            <Card key={i} className="bg-white/5 border-white/10 text-center">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-primary">{item.date}</CardTitle>
                                    <CardDescription>{item.label}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsors */}
            <section id="sponsors" className="py-24 border-t border-white/10 bg-black/50">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-16 text-primary scroll-rgb" data-text={t('sponsors.title')}>
                        {t('sponsors.title')}
                    </h2>

                    {/* Gold */}
                    <div className="text-center mb-12">
                        <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">{t('sponsors.gold')}</h3>
                        <div className="flex justify-center">
                            {partnersData.filter((p) => p.tier === "Gold").map((partner) => (
                                <div key={partner.id} className="h-32 w-64 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-all p-6">
                                    {partner.logo ? (
                                        <img src={partner.logo} alt={partner.name} className={`max-h-full max-w-full object-contain opacity-90 ${partner.keepColor ? '' : 'brightness-0 invert'}`} />
                                    ) : (
                                        <span className="text-lg font-bold text-muted-foreground">{partner.name}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Apoya | Media Partners */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        {([["Apoya", t('sponsors.supports')], ["Media Partners", t('sponsors.mediaPartners')]] as const).map(([tierKey, tierLabel]) => (
                            <div key={tierKey} className="text-center">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">{tierLabel}</h3>
                                <div className="flex flex-wrap gap-3 items-center justify-center">
                                    {partnersData.filter((p) => p.tier === tierKey).map((partner) => (
                                        <div key={partner.id} className="h-20 w-48 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-all px-5">
                                            {partner.logo ? (
                                                <img src={partner.logo} alt={partner.name} className={`max-h-12 max-w-full object-contain opacity-90 ${partner.keepColor ? '' : 'brightness-0 invert'}`} />
                                            ) : (
                                                <span className="text-sm font-bold text-muted-foreground">{partner.name}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Organiza | Socios */}
                    <div className="grid grid-cols-2 gap-6">
                        {([["Organiza", t('sponsors.organizes')], ["Socios", t('sponsors.partners')]] as const).map(([tierKey, tierLabel]) => (
                            <div key={tierKey} className="text-center">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">{tierLabel}</h3>
                                <div className="flex flex-wrap gap-3 items-center justify-center">
                                    {partnersData.filter((p) => p.tier === tierKey).map((partner) => (
                                        <div key={partner.id} className="h-20 w-48 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-all px-5">
                                            {partner.logo ? (
                                                <img src={partner.logo} alt={partner.name} className={`max-h-12 max-w-full object-contain opacity-90 ${partner.keepColor ? '' : 'brightness-0 invert'}`} />
                                            ) : (
                                                <span className="text-sm font-bold text-muted-foreground">{partner.name}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section id="awards" className="py-24 border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary scroll-rgb" data-text={t('awards.title')}>
                            {t('awards.title')}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
                            {t('awards.description')}
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: t('awards.bestInternational'), icon: Globe, prize: t('awards.prizes.bestInternational') },
                            { title: t('awards.pitchCompetition'), icon: Mic, prize: t('awards.prizes.pitchCompetition') },
                            { title: t('awards.bestUruguayan'), icon: Trophy, prize: t('awards.prizes.bestUruguayan') }
                        ].map((award, i) => (
                            <Card key={i} className="bg-white/5 border-white/10 text-center hover:border-primary/50 transition-colors flex flex-col justify-between">
                                <CardHeader>
                                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <award.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="mb-2">{award.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xl font-bold text-primary">{award.prize}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>



            {/* Venue */}
            <section className="py-24 border-t border-white/10 bg-black/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="order-2 lg:order-1 h-[400px] rounded-xl overflow-hidden border border-white/10 bg-white/5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.787688776366!2d-56.15176692346946!3d-34.9117966738411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f810b1b3d5d5d%3A0x8b8d1b1b1b1b1b1b!2sMiguel%20Barreiro%203231%2C%2011300%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1sen!2suy!4v1709900000000!5m2!1sen!2suy"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary scroll-rgb" data-text={t('venue.title')}>
                                {t('venue.title')}
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p className="text-2xl font-semibold text-foreground">{t('venue.location')}</p>
                                <p className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    {t('venue.address')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program */}
            <section id="program" className="py-24 border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 text-primary scroll-rgb" data-text={t('program.title')}>
                        {t('program.title')}
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {programData.map((item) => (
                            <Card key={item.id} className="bg-white/5 border-white/10 overflow-hidden hover:border-primary/50 transition-colors group">
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                                    {item.image && !item.image.includes('placeholder') ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <>
                                            {item.type === 'Panel' ? (
                                                <Mic className="w-12 h-12 text-primary/50" />
                                            ) : item.type === 'Workshop' ? (
                                                <Monitor className="w-12 h-12 text-primary/50" />
                                            ) : item.type === 'Main Event' ? (
                                                <Film className="w-12 h-12 text-primary/50" />
                                            ) : item.title.includes('Pitch') ? (
                                                <Users className="w-12 h-12 text-primary/50" />
                                            ) : (
                                                <Film className="w-12 h-12 text-primary/50" />
                                            )}
                                        </>
                                    )}
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {item.type}
                                        </span>
                                        <span className="text-xs text-muted-foreground">{item.date}</span>
                                    </div>
                                    <CardTitle className="text-xl">{t(`program.items.${item.id}.title`)}</CardTitle>
                                    <CardDescription>{item.location}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{t(`program.items.${item.id}.description`)}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jury */}
            {/*
            <section id="jury" className="py-24 border-t border-white/10 bg-black/50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 text-primary scroll-rgb" data-text={t('jury.title')}>
                        {t('jury.title')}
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {juryData.map((member) => (
                            <Card key={member.id} className="bg-transparent border-none text-center group">
                                <CardHeader>
                                    <div className="mx-auto w-32 h-32 rounded-full bg-white/10 mb-6 overflow-hidden border-2 border-transparent group-hover:border-primary/50 transition-colors">
                                        Using User icon as fallback if image load fails or path is placeholder
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                }}
                                            />
                                        ) : null}
                                        <div className={`w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${member.image ? 'hidden' : ''}`}>
                                            <Users className="w-12 h-12 text-primary/50" />
                                        </div>
                                    </div>
                                    <CardTitle>{member.name}</CardTitle>
                                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        {t(`jury.bios.${member.id}`)}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            */}
            <section id="jury" className="py-24 border-t border-white/10 bg-black/50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 text-primary scroll-rgb" data-text={t('jury.title')}>
                        {t('jury.title')}
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="bg-transparent border-none text-center group">
                                <CardHeader>
                                    <div className="mx-auto w-32 h-32 rounded-full bg-white/10 mb-6 overflow-hidden border-2 border-transparent group-hover:border-primary/50 transition-colors">
                                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                            <Users className="w-12 h-12 text-primary/50" />
                                        </div>
                                    </div>
                                    <CardTitle>TBD</CardTitle>
                                    <CardDescription className="text-primary font-medium">TBD</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        {t('jury.comingSoon')}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>





            {/* FAQ */}
            <section className="py-24 border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 text-primary scroll-rgb" data-text={t('faq.title')}>
                        {t('faq.title')}
                    </h2>
                    <div className="space-y-8">
                        {[
                            { q: t('faq.q1'), a: t('faq.a1') },
                            { q: t('faq.q2'), a: t('faq.a2') },
                            { q: t('faq.q3'), a: t('faq.a3') },
                            { q: t('faq.q4'), a: t('faq.a4') },
                            { q: t('faq.q5'), a: t('faq.a5') },
                            { q: t('faq.q6'), a: t('faq.a6') },
                            { q: t('faq.q7'), a: t('faq.a7') },
                            { q: t('faq.q8'), a: t('faq.a8') },
                            { q: t('faq.q9'), a: t('faq.a9') }
                        ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5 text-primary" />
                                    {item.q}
                                </h3>
                                <p className="text-muted-foreground pl-7">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-white/10 bg-gradient-to-b from-black to-primary/5">
                <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        {t('hero.cta')}
                    </h2>
                    <div className="relative group inline-block">
                        <Button size="lg" className="text-lg px-8 cursor-default">
                            {t('nav.submitProject')}
                        </Button>
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-white/10 backdrop-blur-md text-muted-foreground px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {t('hero.ticketsSoon')}
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
