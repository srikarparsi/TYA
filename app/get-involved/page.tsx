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

export default function GetInvolvedPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Join us in making a difference in the Telugu youth community
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-20">
          {/* Donate Section */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Support Our Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="shadow-xl border">
                  <CardHeader>
                    <CardTitle className="text-3xl">Make a Donation</CardTitle>
                    <CardDescription className="text-base">
                      Help us continue our mission to serve the Telugu youth
                      community
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-6 leading-relaxed">
                      Your generous donations help us organize events, create
                      educational content, and build a stronger community for
                      Telugu youth across America.
                    </p>
                    <Button size="lg" className="w-full md:w-auto px-8">
                      Donate Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/800/600?random=40"
                  alt="Community Impact"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Future Volunteer Opportunities */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Volunteer Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
                <Image
                  src="https://picsum.photos/800/600?random=41"
                  alt="Volunteers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <Card className="shadow-xl border">
                  <CardHeader>
                    <CardTitle className="text-3xl">Coming Soon</CardTitle>
                    <CardDescription className="text-base">
                      We&apos;re working on creating volunteer and open position
                      opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-6">
                      Check back soon for information about:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-purple-600 font-bold mr-3">
                          •
                        </span>
                        <span className="text-lg">
                          Event planning and coordination
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 font-bold mr-3">
                          •
                        </span>
                        <span className="text-lg">
                          Content creation and social media
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 font-bold mr-3">
                          •
                        </span>
                        <span className="text-lg">Community outreach</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 font-bold mr-3">
                          •
                        </span>
                        <span className="text-lg">
                          Technical support and web development
                        </span>
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full md:w-auto px-8"
                    >
                      Stay Updated
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether through donations, volunteering, or simply spreading the
              word, every contribution helps strengthen our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-10"
              >
                Donate Now
              </Button>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-10"
                >
                  Attend an Event
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
