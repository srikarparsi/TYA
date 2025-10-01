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
import { HeroSection, CTASection, ImageCard } from "@/components/custom";

export default function PodcastPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Podcast"
        description="Stories, discussions, and insights from the Telugu youth community"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-20">
          {/* Past Podcasts */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Past Episodes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ImageCard
                imageSrc="https://picsum.photos/600/400?random=30"
                imageAlt="Episode 1"
                title="Episode 1: Sample Episode"
                description="Episode Description"
                buttonText="Listen Now"
                buttonHref="#"
                buttonVariant="outline"
                aspectRatio="wide"
              >
                <p className="mb-4">
                  Summary of the podcast episode content goes here.
                </p>
              </ImageCard>
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
          <CTASection
            title="Have a Story to Share?"
            description="We're always looking for inspiring voices and compelling stories from the Telugu youth community."
            buttons={[{ text: "Submit Your Story", href: "#" }]}
          />
        </div>
      </div>
    </div>
  );
}
