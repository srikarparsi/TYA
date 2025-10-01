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

export default function PodcastPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Our Podcast
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Stories, discussions, and insights from the Telugu youth community
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-20">
          {/* Past Podcasts */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Past Episodes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-xl border hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden pt-0">
                <div className="relative h-48">
                  <Image
                    src="https://picsum.photos/600/400?random=30"
                    alt="Episode 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Episode 1: Sample Episode</CardTitle>
                  <CardDescription>Episode Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Summary of the podcast episode content goes here.
                  </p>
                  <Button className="w-full" variant="outline">
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Suggestion Form */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Suggest a Podcast Topic or Guest
            </h2>
            <Card className="shadow-xl border max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Share Your Ideas</CardTitle>
                <CardDescription className="text-base">
                  Have an idea for a podcast topic or know someone who would be
                  a great guest?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Suggestion Type
                    </label>
                    <select className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background">
                      <option value="topic">Podcast Topic</option>
                      <option value="guest">Guest Suggestion</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Details
                    </label>
                    <textarea
                      className="w-full p-3 border border-input rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring bg-background"
                      placeholder="Tell us about your suggestion..."
                    />
                  </div>
                  <Button size="lg" className="w-full">
                    Submit Suggestion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Have a Story to Share?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We&apos;re always looking for inspiring voices and compelling
              stories from the Telugu youth community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-10"
              >
                Submit Your Story
              </Button>
              <Link href="/get-involved">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-10"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
