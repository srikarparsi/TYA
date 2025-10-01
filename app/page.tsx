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

export default function Home() {
  return (
    <div>
      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white py-24 md:py-32">
        {/* Optional: Add overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Telugu Youth of America
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              &quot;For the youth, by the youth&quot;
            </p>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Empowering Telugu youth across America through cultural
              enrichment, community building, and meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved">
                <Button className="bg-white hover:bg-white/80 text-purple-700 font-semibold px-8">
                  Get Involved
                </Button>
              </Link>
              <Link href="/events">
                <Button className="bg-white hover:bg-white/80 text-pink-700 font-semibold px-8">
                  View Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
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
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/800/600?random=1"
                  alt="Community gathering"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <p className="text-xl leading-relaxed mb-6">
                      TYA Telugu Youth of America is dedicated to enriching the
                      cultural heritage of Telugu youth in America, providing
                      opportunities for growth and empowerment.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-purple-600 font-bold mr-3">
                          ✓
                        </span>
                        <span>Celebrating Telugu culture and traditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 font-bold mr-3">
                          ✓
                        </span>
                        <span>Building a strong, supportive community</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 font-bold mr-3">
                          ✓
                        </span>
                        <span>Creating opportunities for personal growth</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Upcoming Events */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Upcoming Events
            </h2>
            <Card className="max-w-4xl mx-auto shadow-xl overflow-hidden py-0">
              <div className="md:flex">
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <Image
                    src="https://picsum.photos/600/400?random=2"
                    alt="Event preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-3/5 my-5">
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
              <Card className="hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden pt-0">
                <div className="relative h-48">
                  <Image
                    src="https://picsum.photos/600/400?random=7"
                    alt="Podcast"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Listen to Our Podcast</CardTitle>
                  <CardDescription>
                    Stories, discussions, and insights from our community
                  </CardDescription>
                </CardHeader>
                <CardContent className="justify-end">
                  <Link href="/podcast">
                    <Button variant="outline" className="w-full">
                      Explore Podcasts
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden pt-0">
                <div className="relative h-48">
                  <Image
                    src="https://picsum.photos/600/400?random=8"
                    alt="Events"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Join Our Events</CardTitle>
                  <CardDescription>
                    Connect with fellow Telugu youth at our gatherings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/events">
                    <Button variant="outline" className="w-full">
                      View Events
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden pt-0">
                <div className="relative h-48">
                  <Image
                    src="https://picsum.photos/600/400?random=9"
                    alt="About us"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Learn About Us</CardTitle>
                  <CardDescription>
                    Meet our team and learn about our values
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/about">
                    <Button variant="outline" className="w-full">
                      About Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of something bigger. Connect with Telugu youth across
              America and celebrate our rich cultural heritage together.
            </p>
            <Link href="/get-involved">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-10"
              >
                Get Started Today
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
