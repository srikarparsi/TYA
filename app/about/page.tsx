import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  HeroSection,
  CTASection,
  ImageCard,
  FeatureCard,
} from "@/components/custom";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About Us"
        description="Building community, preserving culture, empowering youth"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-20">
          {/* Organization Info */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">Who We Are</h2>
            <FeatureCard
              title=""
              imageSrc="https://picsum.photos/800/600?random=20"
              imageAlt="Telugu Youth of America Community"
              imagePosition="left"
            >
              <p className="text-xl leading-relaxed mb-6">
                The Telugu Youth of America is dedicated to connecting,
                empowering, and celebrating the Telugu youth community across
                the United States. We strive to preserve our cultural heritage
                while embracing the opportunities that America provides.
              </p>
              <p className="text-lg leading-relaxed">
                Through events, podcasts, and community initiatives, we create
                spaces where Telugu youth can connect, learn, grow, and make a
                positive impact.
              </p>
            </FeatureCard>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ImageCard
                imageSrc="https://picsum.photos/400/400?random=21"
                imageAlt="Team Member 1"
                title="Team Member 1"
                description="Role/Position"
                aspectRatio="tall"
              >
                <p>
                  Brief description about the team member and their role in the
                  organization.
                </p>
              </ImageCard>

              <ImageCard
                imageSrc="https://picsum.photos/400/400?random=22"
                imageAlt="Team Member 2"
                title="Team Member 2"
                description="Role/Position"
                aspectRatio="tall"
              >
                <p>
                  Brief description about the team member and their role in the
                  organization.
                </p>
              </ImageCard>

              <ImageCard
                imageSrc="https://picsum.photos/400/400?random=23"
                imageAlt="Team Member 3"
                title="Team Member 3"
                description="Role/Position"
                aspectRatio="tall"
              >
                <p>
                  Brief description about the team member and their role in the
                  organization.
                </p>
              </ImageCard>
            </div>
          </section>

          {/* Mission and Values */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard icon="🤝" title="Community">
                <p className="text-lg">
                  Building strong connections within the Telugu youth community.
                </p>
              </FeatureCard>

              <FeatureCard icon="🎭" title="Culture">
                <p className="text-lg">
                  Preserving and celebrating our Telugu heritage and traditions.
                </p>
              </FeatureCard>

              <FeatureCard icon="🌱" title="Growth">
                <p className="text-lg">
                  Empowering young people to reach their full potential.
                </p>
              </FeatureCard>

              <FeatureCard icon="✨" title="Impact">
                <p className="text-lg">
                  Making a positive difference in our communities.
                </p>
              </FeatureCard>
            </div>
          </section>

          {/* Call to Action */}
          <CTASection
            title="Join Our Journey"
            description="Be part of a vibrant community dedicated to celebrating Telugu culture and empowering the next generation."
            buttons={[{ text: "Get Involved Today", href: "/get-involved" }]}
          />
        </div>
      </div>
    </div>
  );
}
