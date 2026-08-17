import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config/site";
import partnersData from "../data/partners.json";
import juryData from "../data/jury.json";
import speakersData from "../data/speakers.json";
import filmsData from "../data/films.json";
import winnersData from "../data/winners.json";
import galleryData from "../data/gallery.json";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Calendar, MapPin, Trophy, Users, Film, Mic, Globe, Camera } from "lucide-react";
import { HeroBackground } from "../components/3d/HeroBackground";
import { useTranslation } from "react-i18next";

type PartnerTileProps = {
    url?: string;
    className: string;
    children: React.ReactNode;
};

// Los partners con url real se renderizan como link; el resto queda como div.
function PartnerTile({ url, className, children }: PartnerTileProps) {
    if (url && url !== "#") {
        return (
            <a href={url} target="_blank" rel="noreferrer" className={`${className} hover:border-primary/50`}>
                {children}
            </a>
        );
    }
    return <div className={className}>{children}</div>;
}

export function Home() {
    const { t } = useTranslation();

    const filmsTrackRef = useRef<HTMLDivElement | null>(null);
    const filmsViewportRef = useRef<HTMLDivElement | null>(null);
    const filmsOffsetRef = useRef(0);
    const filmsDragRef = useRef({ active: false, startX: 0, baseOffset: 0, pointerId: 0 });
    const filmsHoverRef = useRef(false);
    const [isDraggingFilms, setIsDraggingFilms] = useState(false);

    useEffect(() => {
        const track = filmsTrackRef.current;
        if (!track) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const SPEED = 90; // px per second
        let raf = 0;
        let lastTime = performance.now();

        const tick = (now: number) => {
            const dt = (now - lastTime) / 1000;
            lastTime = now;
            const halfWidth = track.scrollWidth / 2;
            if (!filmsDragRef.current.active && !filmsHoverRef.current && !reduceMotion && halfWidth > 0) {
                filmsOffsetRef.current -= SPEED * dt;
                if (filmsOffsetRef.current <= -halfWidth) {
                    filmsOffsetRef.current += halfWidth;
                }
            }
            track.style.transform = `translateX(${filmsOffsetRef.current}px)`;
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    const onFilmsPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        filmsDragRef.current = {
            active: true,
            startX: e.clientX,
            baseOffset: filmsOffsetRef.current,
            pointerId: e.pointerId,
        };
        setIsDraggingFilms(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onFilmsPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!filmsDragRef.current.active) return;
        const track = filmsTrackRef.current;
        if (!track) return;
        const dx = e.clientX - filmsDragRef.current.startX;
        const halfWidth = track.scrollWidth / 2;
        let next = filmsDragRef.current.baseOffset + dx;
        if (halfWidth > 0) {
            next = ((next % halfWidth) + halfWidth) % halfWidth - halfWidth;
        }
        filmsOffsetRef.current = next;
    };

    const endFilmsDrag = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!filmsDragRef.current.active) return;
        filmsDragRef.current.active = false;
        setIsDraggingFilms(false);
        try { e.currentTarget.releasePointerCapture(filmsDragRef.current.pointerId); } catch {}
    };

    const onFilmsPointerEnter = () => { filmsHoverRef.current = true; };
    const onFilmsPointerLeave = () => { filmsHoverRef.current = false; };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <HeroBackground />
                <div className="absolute top-20 md:top-32 left-0 right-0 flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-1 md:gap-3 text-xs sm:text-sm md:text-base text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards z-20 px-2 sm:px-4 text-center pointer-events-none">
                    <a href="https://souts.studio" target="_blank" rel="noreferrer" className="pointer-events-auto">
                        <img src="/images/sponsors/sideoutsticks.png" alt="SOUTS" className="h-8 sm:h-10 md:h-16 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
                    </a>
                    <span>{t('hero.togetherWith')}</span>
                    <img src="/images/sponsors/life.png" alt="Life Cinemas" className="h-6 sm:h-8 md:h-11 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity pointer-events-auto" />
                    <span>{t('hero.present')}</span>
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-8 pointer-events-none">
                    <div className="space-y-4">
                        <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-forwards" aria-label={siteConfig.name}>
                            <span
                                className="block mx-auto h-16 md:h-24 lg:h-32 w-full max-w-[280px] md:max-w-[640px] lg:max-w-[900px]"
                                style={{
                                    backgroundColor: "rgb(205, 105, 94)",
                                    WebkitMaskImage: "url(/SnFLogo.png)",
                                    maskImage: "url(/SnFLogo.png)",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                    WebkitMaskPosition: "center",
                                    maskPosition: "center",
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain",
                                }}
                            />
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
                    </div>
                </div>
            </section>

            {/* Winners */}
            <section id="awards" className="py-24 border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary scroll-rgb" data-text={t('awards.title')}>
                            {t('awards.title')}
                        </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 items-stretch max-w-4xl mx-auto">
                        {[
                            { title: t('awards.bestInternational'), icon: Globe, prize: t('awards.prizes.bestInternational'), prizeLogo: "/images/sponsors/sideoutsticks.png", prizeLogoAlt: "SOUTS", prizeLogoUrl: "https://souts.studio", invertLogo: true, awardKey: "bestInternational" },
                            { title: t('awards.bestUruguayan'), icon: Trophy, prize: t('awards.prizes.bestUruguayan'), prizeLogo: "/images/sponsors/musitelli.png", prizeLogoAlt: "Musitelli", prizeLogoUrl: null, invertLogo: false, awardKey: "bestUruguayan" }
                        ].map((award, i) => {
                            const winner = winnersData.find(w => w.award === award.awardKey);
                            const hasWinner = winner && winner.film !== "TBD";
                            return (
                                <Card key={i} className="bg-white/5 border-white/10 text-center hover:border-primary/50 transition-colors flex flex-col justify-between">
                                    <CardHeader>
                                        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                            <award.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="mb-2">{award.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {hasWinner && winner ? (
                                            <>
                                                {winner.poster && (
                                                    <div className="mx-auto w-32 aspect-[3/4] rounded-lg overflow-hidden border border-white/10">
                                                        <img src={winner.poster} alt={winner.film} className="w-full h-full object-cover" />
                                                    </div>
                                                )}
                                                <div className="space-y-1">
                                                    <p className="text-2xl font-bold text-foreground">{winner.film}</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {t('awards.director')} {winner.director}
                                                        {winner.country && winner.country !== "TBD" && (
                                                            <span className="ml-2 opacity-60">· {winner.country}</span>
                                                        )}
                                                    </p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-lg text-muted-foreground italic">{t('awards.tba')}</p>
                                                {award.prize && <p className="text-xl font-bold text-primary">{award.prize}</p>}
                                                {award.prizeLogo && (
                                                    <div className="h-12 flex items-center justify-center">
                                                        {award.prizeLogoUrl ? (
                                                            <a href={award.prizeLogoUrl} target="_blank" rel="noreferrer" className="h-full flex items-center justify-center">
                                                                <img src={award.prizeLogo} alt={award.prizeLogoAlt} className={`max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity ${award.invertLogo ? 'brightness-0 invert' : ''}`} />
                                                            </a>
                                                        ) : (
                                                            <img src={award.prizeLogo} alt={award.prizeLogoAlt} className={`max-h-full w-auto object-contain opacity-90 ${award.invertLogo ? 'brightness-0 invert' : ''}`} />
                                                        )}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            {galleryData.length > 0 && (
                <section id="gallery" className="py-24 border-t border-white/10 bg-black/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12 space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                                <Camera className="w-3 h-3" />
                                {t('gallery.badge')}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary scroll-rgb" data-text={t('gallery.title')}>
                                {t('gallery.title')}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                {t('gallery.subtitle')}
                            </p>
                        </div>
                        <div className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
                            {galleryData.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="relative break-inside-avoid rounded-xl overflow-hidden border border-white/10 bg-white/5 group"
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        loading="lazy"
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Thank You Intro */}
            <section className="py-24 md:py-32 border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-8">
                    <p className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-foreground">
                        {t('intro.lead')}
                    </p>
                    <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        {(t('intro.paragraphs', { returnObjects: true }) as string[]).map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                    <p className="text-xl md:text-2xl font-semibold text-primary pt-2">
                        {t('intro.closing')}
                    </p>
                </div>
            </section>

            {/* Films Carousel */}
            <section id="films" className="relative py-24 border-t border-white/10 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 mb-12">
                    <div className="text-center space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                            <Film className="w-3 h-3" />
                            {t('films.badge')}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary scroll-rgb" data-text={t('films.title')}>
                            {t('films.title')}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {t('films.subtitle')}
                        </p>
                    </div>
                </div>
                <div
                    ref={filmsViewportRef}
                    className={`relative marquee-viewport ${isDraggingFilms ? 'is-dragging' : ''}`}
                    onPointerDown={onFilmsPointerDown}
                    onPointerMove={onFilmsPointerMove}
                    onPointerUp={endFilmsDrag}
                    onPointerCancel={endFilmsDrag}
                    onPointerEnter={onFilmsPointerEnter}
                    onPointerLeave={onFilmsPointerLeave}
                >
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />
                    <div
                        ref={filmsTrackRef}
                        className="flex gap-6 marquee-track py-2"
                    >
                        {[...filmsData, ...filmsData].map((film, i) => (
                            <div
                                key={`${film.id}-${i}`}
                                className="relative flex-shrink-0 w-56 md:w-64 aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-white/5 group hover:border-primary/50 transition-all"
                            >
                                <img
                                    src={film.poster}
                                    alt={film.title}
                                    draggable={false}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 select-none pointer-events-none"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                                {film.outOfCompetition && (
                                    <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-[0.18em] text-white/90 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 pointer-events-none">
                                        {t('films.outOfCompetition')}
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                                    <h3 className="text-base md:text-lg font-bold tracking-tight text-white drop-shadow-lg">
                                        {film.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers */}
            <section id="speakers" className="relative py-24 border-t border-white/10 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-[120px]" />
                    <div className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-[120px]" />
                </div>
                <div className="container mx-auto px-4 md:px-6 max-w-6xl relative">
                    <div className="text-center mb-20 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                            <Mic className="w-3 h-3" />
                            {t('speakers.title')}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary scroll-rgb" data-text={t('speakers.title')}>
                            {t('speakers.title')}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {t('speakers.subtitle')}
                        </p>
                    </div>
                    <div className="space-y-24 md:space-y-32">
                        {speakersData.map((speaker, idx) => {
                            const tags = t(`speakers.tags.${speaker.id}`, { returnObjects: true }) as string[];
                            const isReverse = idx % 2 === 1;
                            return (
                                <div key={speaker.id} className={`grid gap-8 md:gap-12 md:grid-cols-12 items-center ${isReverse ? 'md:[direction:rtl]' : ''}`}>
                                    <div className={`md:col-span-5 md:[direction:ltr] relative group`}>
                                        <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 via-accent/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/20 via-white/5 to-accent/20">
                                            {speaker.image ? (
                                                <img
                                                    src={speaker.image}
                                                    alt={speaker.name}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                                    style={{ objectPosition: speaker.imagePosition ?? 'center' }}
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                            ) : null}
                                            <div className={`w-full h-full flex items-center justify-center ${speaker.image ? 'hidden' : ''}`}>
                                                <span className="text-7xl md:text-8xl font-bold tracking-tighter text-primary/40">
                                                    {speaker.name.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            {speaker.tint && (
                                                <div
                                                    className="absolute inset-0 pointer-events-none mix-blend-color group-hover:opacity-0 transition-opacity duration-700"
                                                    style={{ backgroundColor: speaker.tint }}
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            <div className="absolute top-4 left-4 text-xs font-mono uppercase tracking-[0.2em] text-white/80 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                                                {String(idx + 1).padStart(2, '0')} / {String(speakersData.length).padStart(2, '0')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-7 md:[direction:ltr] space-y-5">
                                        <div className="space-y-2">
                                            <p className="text-sm font-mono uppercase tracking-[0.2em] text-primary">
                                                {t(`speakers.roles.${speaker.id}`)}
                                            </p>
                                            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
                                                {speaker.name}
                                            </h3>
                                        </div>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {t(`speakers.bios.${speaker.id}`)}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {tags.map((tag) => (
                                                <span key={tag} className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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
                        {juryData.map((member) => (
                            <Card key={member.id} className="bg-transparent border-none text-center group">
                                <CardHeader>
                                    <div className="relative mx-auto w-52 h-52 md:w-60 md:h-60 rounded-full bg-white/10 mb-6 overflow-hidden border-2 border-white/20 group-hover:border-primary/50 transition-colors">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover grayscale"
                                                style={{ objectPosition: member.imagePosition ?? 'center' }}
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
                                    <CardDescription className="text-primary font-medium">{t(`jury.roles.${member.id}`)}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsors */}
            <section id="sponsors" className="py-24 border-t border-white/10">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-16 text-primary scroll-rgb" data-text={t('sponsors.title')}>
                        {t('sponsors.title')}
                    </h2>

                    {/* Gold */}
                    <div className="text-center mb-12">
                        <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">{t('sponsors.gold')}</h3>
                        <div className="flex justify-center">
                            {partnersData.filter((p) => p.tier === "Gold").map((partner) => (
                                <PartnerTile key={partner.id} url={partner.url} className="h-32 w-64 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-all p-6">
                                    {partner.logo ? (
                                        <img src={partner.logo} alt={partner.name} className={`max-h-full max-w-full object-contain opacity-90 ${partner.keepColor ? '' : 'brightness-0 invert'} ${partner.grayscale ? 'grayscale' : ''}`} />
                                    ) : (
                                        <span className="text-lg font-bold text-muted-foreground">{partner.name}</span>
                                    )}
                                </PartnerTile>
                            ))}
                        </div>
                    </div>

                    {/* Silver */}
                    <div className="text-center mb-12">
                        <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">{t('sponsors.silver')}</h3>
                        <div className="flex flex-wrap gap-6 items-center justify-center">
                            {partnersData.filter((p) => p.tier === "Silver").map((partner) => (
                                <PartnerTile key={partner.id} url={partner.url} className="h-24 w-52 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-all p-5">
                                    {partner.logo ? (
                                        <img src={partner.logo} alt={partner.name} className={`max-h-full max-w-full object-contain opacity-90 ${partner.keepColor ? '' : 'brightness-0 invert'} ${partner.grayscale ? 'grayscale' : ''}`} />
                                    ) : (
                                        <span className="text-base font-bold text-muted-foreground">{partner.name}</span>
                                    )}
                                </PartnerTile>
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
                                        <PartnerTile key={partner.id} url={partner.url} className="h-20 w-48 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-all px-5">
                                            {partner.logo ? (
                                                <img src={partner.logo} alt={partner.name} style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined} className={`max-h-12 max-w-full object-contain opacity-90 ${partner.keepColor ? '' : 'brightness-0 invert'} ${partner.grayscale ? 'grayscale' : ''}`} />
                                            ) : (
                                                <span className="text-sm font-bold text-muted-foreground">{partner.name}</span>
                                            )}
                                        </PartnerTile>
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
                                        <PartnerTile key={partner.id} url={partner.url} className="h-20 w-48 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-all px-5">
                                            {partner.logo ? (
                                                <img src={partner.logo} alt={partner.name} style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined} className={`max-h-12 max-w-full object-contain opacity-90 ${partner.keepColor ? '' : 'brightness-0 invert'} ${partner.grayscale ? 'grayscale' : ''}`} />
                                            ) : (
                                                <span className="text-sm font-bold text-muted-foreground">{partner.name}</span>
                                            )}
                                        </PartnerTile>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
