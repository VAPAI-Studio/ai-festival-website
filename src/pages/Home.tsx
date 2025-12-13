import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import programData from "../data/program.json";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Calendar, MapPin, Trophy, Users, Film, Music, Globe, HelpCircle } from "lucide-react";
import { HeroBackground } from "../components/3d/HeroBackground";
import { useTranslation } from "react-i18next";

export function Home() {
    const { t } = useTranslation();

    const team = [
        { name: 'Side Out Sticks', role: t('team.roles.host'), bio: t('team.bios.host') },
        { name: "Yves Fogel", role: t('team.roles.programming'), bio: t('team.bios.programming') },
        { name: "Andrés Scheck", role: t('team.roles.technical'), bio: t('team.bios.technical') },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <HeroBackground />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-8 pointer-events-none">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
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
                                <span>{siteConfig.dates}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>{siteConfig.city}</span>
                            </div>
                        </div>
                        <Button size="lg" className="mt-4 pointer-events-auto" asChild>
                            <Link to="/submit">
                                {t('hero.cta')}
                            </Link>
                        </Button>
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
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                            {/* Placeholder for festival reel/image */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                <Film className="w-16 h-16 opacity-50" />
                            </div>
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
                            { date: "Dec 15, 2025", label: t('dates.open') },
                            { date: "Feb 28, 2026", label: t('dates.deadline') },
                            { date: "Mar 15, 2026", label: t('dates.notification') },
                            { date: "May 21-22, 2026", label: t('dates.screening') }
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
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    <Film className="w-12 h-12 text-primary/50" />
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {item.type}
                                        </span>
                                        <span className="text-xs text-muted-foreground">{item.date}</span>
                                    </div>
                                    <CardTitle className="text-xl">{item.title}</CardTitle>
                                    <CardDescription>{item.location}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{item.shortDescription}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jury */}
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
                                    <CardTitle>Jury Member {i}</CardTitle>
                                    <CardDescription className="text-primary font-medium">Industry Expert</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Renowned director and visual artist specializing in generative AI workflows.
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section id="awards" className="py-24 border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 text-primary scroll-rgb" data-text={t('awards.title')}>
                        {t('awards.title')}
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: t('awards.bestInternational'), icon: Globe },
                            { title: t('awards.bestMusicVideo'), icon: Music },
                            { title: t('awards.bestUruguayan'), icon: Trophy }
                        ].map((award, i) => (
                            <Card key={i} className="bg-white/5 border-white/10 text-center hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <award.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle>{award.title}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 border-t border-white/10 bg-black/50">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12 text-primary scroll-rgb" data-text={t('team.title')}>
                        {t('team.title')}
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {team.map((member, i) => (
                            <Card key={i} className="bg-transparent border-none text-center">
                                <CardHeader>
                                    <div className="mx-auto w-24 h-24 rounded-full bg-white/10 mb-4 overflow-hidden">
                                        {/* Placeholder avatar */}
                                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                            <Users className="w-8 h-8 opacity-50" />
                                        </div>
                                    </div>
                                    <CardTitle>{member.name}</CardTitle>
                                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{member.bio}</p>
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
                            { q: t('faq.q2'), a: t('faq.a2') }
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
                    <Button size="lg" className="text-lg px-8" asChild>
                        <Link to="/submit">{t('nav.submitProject')}</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
