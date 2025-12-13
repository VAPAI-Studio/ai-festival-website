
import { HeroBackground } from "../components/3d/HeroBackground";

export function Rules() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <HeroBackground />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-8 pointer-events-none">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                            Rules & Terms
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-black/50">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="prose prose-invert mx-auto">
                        <p className="text-xl text-muted-foreground text-center">
                            {/* Placeholder for Rules content */}
                            Content coming soon...
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
