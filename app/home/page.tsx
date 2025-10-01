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

export default function Home() {
  return (
    <div>
      {/* Hero Section with Background */}
      <HeroSection
        title="Telugu Youth of America"
        subtitle='"For the youth, by the youth"'
        description="Empowering Telugu youth across America through cultural enrichment, community building, and meaningful connections."
        buttons={[
          { text: "Get Involved", href: "/get-involved" },
          { text: "View Events", href: "/events", variant: "secondary" },
        ]}
      />

      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <section className="py-16 -mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-lg border-t-4 border-t-purple-500">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  500+
                </div>
                <p className="text-muted-foreground font-medium">
                  Active Members
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-t-4 border-t-pink-500">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
                <p className="text-muted-foreground font-medium">
                  Events Hosted
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-t-4 border-t-orange-500">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  15
                </div>
                <p className="text-muted-foreground font-medium">
                  Cities Reached
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-t-4 border-t-blue-500">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
                <p className="text-muted-foreground font-medium">
                  Years Strong
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="space-y-20 py-8">
          {/* Mission Statement with Image */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Mission
            </h2>
            <FeatureCard
              title=""
              imageSrc="https://picsum.photos/800/600?random=1"
              imageAlt="Community gathering"
              imagePosition="left"
            >
              <p className="text-xl leading-relaxed mb-6">
                TYA Telugu Youth of America is dedicated to enriching the
                cultural heritage of Telugu youth in America, providing
                opportunities for growth and empowerment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span>Celebrating Telugu culture and traditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span>Building a strong, supportive community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span>Creating opportunities for personal growth</span>
                </li>
              </ul>
            </FeatureCard>
          </section>

          {/* Upcoming Events */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Upcoming Events
            </h2>
            <Card className="max-w-4xl mx-auto shadow-xl border overflow-hidden py-0">
              <div className="md:flex">
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <Image
                    src="https://picsum.photos/600/400?random=2"
                    alt="Event preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-3/5 my-7">
                  <CardHeader>
                    <CardTitle className="text-3xl">
                      Diwali Celebration
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Don&apos;t miss our next community gathering
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-6">
                      Join us for our next exciting event! Details will be
                      announced soon. Stay connected with our community for
                      updates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/events">
                        <Button size="lg" className="w-full sm:w-auto">
                          View All Events
                        </Button>
                      </Link>
                      <Link href="/get-involved">
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full sm:w-auto"
                        >
                          Stay Updated
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </section>

          {/* Community Gallery */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-4">
              Our Community
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Celebrating our culture, creating memories, and building lifelong
              friendships
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <Image
                  src="https://picsum.photos/400/400?random=3"
                  alt="Community event 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <Image
                  src="https://picsum.photos/400/400?random=4"
                  alt="Community event 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <Image
                  src="https://picsum.photos/400/400?random=5"
                  alt="Community event 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <Image
                  src="https://picsum.photos/400/400?random=6"
                  alt="Community event 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Explore Section with Images */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">Explore</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ImageCard
                imageSrc="https://picsum.photos/600/400?random=7"
                imageAlt="Podcast"
                title="Listen to Our Podcast"
                description="Stories, discussions, and insights from our community"
                buttonText="Explore Podcasts"
                buttonHref="/podcast"
                buttonVariant="outline"
                aspectRatio="wide"
              />

              <ImageCard
                imageSrc="https://picsum.photos/600/400?random=8"
                imageAlt="Events"
                title="Join Our Events"
                description="Connect with fellow Telugu youth at our gatherings"
                buttonText="View Events"
                buttonHref="/events"
                buttonVariant="outline"
                aspectRatio="wide"
              />

              <ImageCard
                imageSrc="https://picsum.photos/600/400?random=9"
                imageAlt="About us"
                title="Learn About Us"
                description="Meet our team and learn about our values"
                buttonText="About Us"
                buttonHref="/about"
                buttonVariant="outline"
                aspectRatio="wide"
              />
            </div>
          </section>

          {/* Call to Action */}
          <CTASection
            title="Ready to Join Our Community?"
            description="Be part of something bigger. Connect with Telugu youth across America and celebrate our rich cultural heritage together."
            buttons={[{ text: "Get Started Today", href: "/get-involved" }]}
          />
        </div>
      </div>
    </div>
  );
}
