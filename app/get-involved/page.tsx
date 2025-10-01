import { HeroSection, CTASection, FeatureCard } from "@/components/custom";

export default function GetInvolvedPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Get Involved"
        description="Join us in making a difference in the Telugu youth community"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-20">
          {/* Donate Section */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Support Our Mission
            </h2>
            <FeatureCard
              title="Make a Donation"
              description="Help us continue our mission to serve the Telugu youth community"
              imageSrc="https://picsum.photos/800/600?random=40"
              imageAlt="Community Impact"
              imagePosition="right"
              buttons={[{ text: "Donate Now", href: "#" }]}
            >
              <p className="text-lg mb-6 leading-relaxed">
                Your generous donations help us organize events, create
                educational content, and build a stronger community for Telugu
                youth across America.
              </p>
            </FeatureCard>
          </section>

          {/* Future Volunteer Opportunities */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Volunteer Opportunities
            </h2>
            <FeatureCard
              title="Coming Soon"
              description="We're working on creating volunteer and open position opportunities"
              imageSrc="https://picsum.photos/800/600?random=41"
              imageAlt="Volunteers"
              imagePosition="left"
              buttons={[
                { text: "Stay Updated", href: "#", variant: "outline" },
              ]}
            >
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">•</span>
                  <span className="text-lg">
                    Event planning and coordination
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">•</span>
                  <span className="text-lg">
                    Content creation and social media
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">•</span>
                  <span className="text-lg">Community outreach</span>
                </li>
              </ul>
            </FeatureCard>
          </section>

          {/* Call to Action */}
          <CTASection
            title="Ready to Make an Impact?"
            description="Whether through donations, volunteering, or simply spreading the word, every contribution helps strengthen our community."
            buttons={[{ text: "Donate Now", href: "#" }]}
          />
        </div>
      </div>
    </div>
  );
}
