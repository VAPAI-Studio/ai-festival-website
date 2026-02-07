import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "General Festival Info",
    items: [
      {
        question: "What is Sticks n' Festival?",
        answer:
          "Sticks n' Festival is Uruguay's first festival celebrating AI creativity in film and art. Over two days (May 28-29, 2026), we bring together filmmakers, artists, and creators pushing the boundaries of what's possible with artificial intelligence.",
      },
      {
        question: "Where and when is the festival?",
        answer:
          "**Dates:** May 28-29, 2026 (Thursday-Friday)\n\n**Venue:** Life Cinema, Miguel Barreiro 3231 esq. Berro, Pocitos, Montevideo, Uruguay\n\n**Hours:** TBD (typically 6pm-11pm both nights)",
      },
      {
        question: "Who organizes Sticks n' Festival?",
        answer:
          "The festival is organized by **SOUTS** (Salado Out Studio) — a creative AI studio based in Montevideo, Uruguay. We're passionate about exploring AI as a tool for artistic expression and storytelling.",
      },
      {
        question: "What makes this festival different?",
        answer:
          "• **Regional focus:** First AI creativity festival in Uruguay/Southern Cone\n• **Creator-first:** Built by and for people making things with AI (not just talking about it)\n• **Intimate scale:** ~250 attendees = real networking, not crowds\n• **Hands-on:** Workshops, demos, and practical sessions alongside screenings",
      },
      {
        question: "Is this a commercial or non-profit event?",
        answer:
          "Sticks n' Festival is organized by SOUTS as a community-driven event. Ticket sales and sponsorships cover costs (venue, speakers, catering, production). Our goal is to break even and build a sustainable annual event, not generate profit.",
      },
      {
        question: "Can I volunteer or help with the festival?",
        answer:
          "Yes! We'll need volunteers for registration, tech support, and logistics. If you're interested, email **[volunteer contact TBD]** with 'Volunteer' in the subject line. Priority for local creatives and students.",
      },
      {
        question: "Will there be speakers or panels?",
        answer:
          "Yes! We're curating talks and panels with filmmakers, post-production artists, and AI tool creators. Topics include:\n\n• AI in post-production (color grading, VFX, editing)\n• Ethical considerations in AI creativity\n• Technical workflows and tool demos\n• Future of storytelling with AI\n\nSpeaker lineup will be announced in March 2026.",
      },
    ],
  },
  {
    title: "Submissions & Applications",
    items: [
      {
        question: "Who can submit work to the festival?",
        answer:
          "Anyone worldwide! We welcome:\n\n• **Filmmakers:** Shorts, music videos, experimental films made with AI tools\n• **Artists:** AI-generated art, installations, interactive pieces\n• **Students:** University/film school projects using AI\n• **Professionals:** Commercial work showcasing creative AI use\n\nNo age restrictions. We especially encourage Latin American creators.",
      },
      {
        question: "What categories are open for submissions?",
        answer:
          "• **Best AI Film** (narrative shorts, experimental, documentary)\n• **Best AI Music Video**\n• **Best AI Art/Visual** (static or motion)\n• **Audience Choice Award** (voted during festival)\n• **Regional Award** (Uruguay/LATAM creators)\n\nSee full [Rules](/rules) for eligibility details.",
      },
      {
        question: "How much does it cost to submit?",
        answer: "**Submissions are FREE.** No submission fees.",
      },
      {
        question: "When is the submission deadline?",
        answer:
          "**April 15, 2026** (11:59pm UTC-3 Montevideo time)\n\n**Early submissions encouraged** — we'll start reviewing in March and may reach out for featured slots.",
      },
      {
        question: "What formats do you accept?",
        answer:
          "**Video:** MP4, MOV, or ProRes (H.264/H.265 codec preferred)\n**Resolution:** Minimum 1920×1080 (Full HD); 4K welcome\n**Max duration:** 20 minutes (shorts), 5 minutes (music videos)\n**Art submissions:** High-res images (PNG/JPG, min 2000px width) or video loops\n\n**Upload via:** [TBD: submission platform]",
      },
      {
        question: "Do I need to disclose which AI tools I used?",
        answer:
          "**Yes, required.** During submission, you'll list:\n\n• AI tools used (e.g., Runway, Midjourney, ElevenLabs, etc.)\n• Brief description of how AI was integrated into your workflow\n• Percentage of AI-generated vs human-created content (estimate)\n\nThis helps us educate audiences and celebrate diverse approaches.",
      },
      {
        question: "When will I hear back about my submission?",
        answer:
          "• **Initial review:** March-April 2026 (rolling basis)\n• **Finalists announced:** May 1, 2026\n• **Official selections:** May 7, 2026 (3 weeks before festival)\n\nWe'll email all submitters regardless of acceptance status.",
      },
      {
        question: "If my work is selected, do I get a free ticket?",
        answer:
          "**Yes!** Selected creators receive:\n\n• 1 free festival pass (both days)\n• Recognition during screening + awards ceremony\n• Digital laurels/certificate for promotional use\n• Priority access to speaker sessions\n\nAdditional crew tickets available at 50% discount (max 2 per project).",
      },
      {
        question:
          "Can I submit work created entirely by AI (no human creative input)?",
        answer:
          "**No.** We require meaningful human creative direction. Acceptable:\n\n✅ Using AI as a tool in your creative process (prompting, editing, compositing, sound design, etc.)\n✅ AI-assisted workflows where you make creative decisions\n❌ Fully automated AI generations with zero human curation/editing\n\nWe're celebrating **human creativity amplified by AI**, not AI replacing humans.",
      },
    ],
  },
  {
    title: "Attendance & Tickets",
    items: [
      {
        question: "How much are tickets?",
        answer:
          "• **Early Bird:** [TBD: ~$25 USD] — available March 1-31, 2026\n• **Regular:** [TBD: ~$35 USD] — April 1 - May 20, 2026\n• **At the door:** [TBD: ~$45 USD] — if available (limited capacity)\n• **2-Day Pass:** Includes both nights + access to all sessions\n\n**Student discount:** 30% off with valid student ID (email proof before purchase)",
      },
      {
        question: "Where do I buy tickets?",
        answer:
          "Tickets available starting **March 1, 2026** via:\n\n[TBD: Ticketing platform link]\n\n**Payment methods:** Credit card, PayPal, [TBD: local options]",
      },
      {
        question: "What's included in my ticket?",
        answer:
          "• Access to both festival nights (May 28-29)\n• All film screenings + art exhibitions\n• Speaker talks and panel discussions\n• Networking sessions + coffee breaks\n• Awards ceremony (night 2)\n• Light refreshments (coffee, snacks)\n\n**Not included:** Full meals (dinner). Food/drinks available for purchase at venue or nearby.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "• **Before May 1, 2026:** Full refund minus processing fee (~5%)\n• **May 1-20, 2026:** 50% refund\n• **After May 20, 2026:** No refunds (can transfer ticket to another person)\n\nEmail **[tickets contact TBD]** with your order number to request refund.",
      },
      {
        question: "Is the venue accessible?",
        answer:
          "Life Cinema has:\n\n✅ Wheelchair access (ramps, elevator)\n✅ Accessible bathrooms\n⚠️ Limited accessible seating (contact us in advance to reserve)\n\nFor specific accessibility needs, email **[accessibility contact TBD]** at least 1 week before the festival.",
      },
      {
        question: "Can I attend just one night instead of both?",
        answer:
          "The festival pass is **2 days only** (no single-night tickets). This ensures:\n\n• Better value per attendee\n• Consistent community throughout the event\n• Simplified logistics\n\nIf you can only attend one night, you're still welcome — your pass covers both.",
      },
    ],
  },
  {
    title: "Technical & Logistics",
    items: [
      {
        question: "What projection/display equipment will be used?",
        answer:
          "• **Cinema-grade digital projectors** (4K capable)\n• **Dolby 5.1 surround sound**\n• **Color-calibrated displays** for art exhibitions\n• Professional screening environment (not laptop-on-wall)\n\nWe'll test all selected works before the festival to ensure optimal presentation.",
      },
      {
        question: "Can I attend virtually/online?",
        answer:
          "**Not this year.** Sticks n' Festival 2026 is **in-person only** to maximize:\n\n• Real networking opportunities\n• Hands-on workshops and demos\n• Immersive cinema experience\n\nWe may explore hybrid/streaming for future editions depending on demand.",
      },
      {
        question: "Will sessions be recorded?",
        answer:
          "• **Screenings:** No recording/photography during film screenings (respect creators' rights)\n• **Talks/panels:** May be recorded for later release (TBD)\n• **Networking:** Feel free to take photos and share on social media (#SticksNFestival)",
      },
      {
        question: "Can I bring my own AI demos or installations?",
        answer:
          "Not as a general attendee. If you have a relevant demo/installation, submit it via the [Submissions](/submit) form and select 'Interactive/Installation' category.\n\nWe have limited space for live demos — selected installations will be featured in the venue lobby.",
      },
    ],
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#00ff9d]"
      >
        <span className="text-lg font-medium">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-400">
          <div className="prose prose-invert max-w-none">
            {item.answer.split("\n").map((line, i) => (
              <p key={i} className="mb-2 last:mb-0">
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ - Sticks n' Festival</title>
        <meta
          name="description"
          content="Frequently asked questions about Sticks n' Festival - Uruguay's first AI creativity festival. Submissions, tickets, speakers, and logistics."
        />
      </Helmet>

      <div className="relative overflow-hidden bg-black text-white">
        {/* Hero Section */}
        <section className="relative px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              FAQ
            </h1>
            <p className="text-xl text-gray-400">
              Everything you need to know about Sticks n' Festival
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="relative px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-12">
            {faqSections.map((section, idx) => (
              <div key={idx}>
                <h2 className="mb-6 text-2xl font-bold text-[#00ff9d]">
                  {section.title}
                </h2>
                <div className="space-y-0">
                  {section.items.map((item, itemIdx) => (
                    <FAQAccordion key={itemIdx} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative border-t border-gray-800 px-6 py-16 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold">Still have questions?</h2>
            <p className="mb-8 text-gray-400">
              We're here to help. Reach out and we'll get back to you soon.
            </p>
            <a
              href="mailto:info@souts.uy"
              className="inline-block rounded-lg bg-[#00ff9d] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#00cc7d]"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
