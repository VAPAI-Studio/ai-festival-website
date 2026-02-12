
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
                <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16">

                    {/* Eligibility */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Eligibility</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>To be eligible for submission to Sticks n' Festival, works must meet the following criteria:</p>
                            <ul className="space-y-3 pl-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Works must have been produced after <strong>January 1, 2024</strong>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Artificial Intelligence tools must have played a <strong>significant role</strong> in the creative process (visual generation, audio design, scriptwriting, editing, or other production aspects).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Submissions are open to creators based in <strong>Latin America</strong>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Creators must hold the necessary rights to submit and publicly screen their work.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Categories</h2>
                        <div className="space-y-6 text-muted-foreground">
                            <div className="border-l-2 border-primary/50 pl-6 space-y-2">
                                <h3 className="text-xl font-semibold text-white">AI Short Film</h3>
                                <p>Narrative or documentary short films (up to 12 minutes) where AI played a significant role in production.</p>
                            </div>
                            <div className="border-l-2 border-primary/50 pl-6 space-y-2">
                                <h3 className="text-xl font-semibold text-white">Experimental / Video Art</h3>
                                <p>Abstract, non-narrative, or conceptual works (up to 10 minutes) exploring the aesthetics and possibilities of AI-generated media.</p>
                            </div>

                            <div className="border-l-2 border-primary/50 pl-6 space-y-2">
                                <h3 className="text-xl font-semibold text-white">Music Video</h3>
                                <p>Original music videos (up to 5 minutes) with significant AI-generated visual or audio components.</p>
                            </div>
                        </div>
                    </div>

                    {/* Selection Criteria */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Selection Criteria</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>Our jury evaluates submissions based on the following criteria:</p>
                            <ul className="space-y-3 pl-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Innovation in the use of AI tools.</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Narrative and artistic quality.</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Strong aesthetic vision.</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Technical proficiency.</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Thoughtful exploration of technology's role in creative expression.</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Submission Process */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Submission Process</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <ol className="space-y-3 pl-6 list-decimal">
                                <li>Complete the <a href="/#/submit" className="text-primary hover:underline">online submission form</a> with project details.</li>
                                <li>Provide a publicly accessible link to your work (Vimeo, YouTube, Google Drive, etc.). Ensure we have permission to view it (e.g., Unlisted link).</li>
                                <li>Include a brief description of how AI was used in your project.</li>
                                <li>Submit before the <strong>Submission Deadline: May 1, 2026</strong>.</li>
                                <li>You will receive a confirmation email upon successful submission.</li>
                                <li>Selected projects will be notified by <strong>May 15, 2026</strong>.</li>
                            </ol>
                        </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Terms & Conditions</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <ul className="space-y-3 pl-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>By submitting, you grant Sticks n' Festival the right to publicly screen your work during the festival and use excerpts for promotional purposes (with proper credit).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>You retain all intellectual property rights to your work.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Jury decisions are final and not subject to appeal.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Festival organizers reserve the right to disqualify submissions that do not meet eligibility criteria or contain offensive/illegal content.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>There is no submission fee for Sticks n' Festival 2026.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6 bg-white/5 p-8 rounded-xl border border-white/10">
                        <h2 className="text-2xl font-bold text-primary">Questions?</h2>
                        <p className="text-muted-foreground">
                            If you have questions about eligibility, submission requirements, or any other aspect of the festival, please contact us at{' '}
                            <a href="mailto:yves@vapai.studio" className="text-primary hover:underline">yves@vapai.studio</a>.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}
