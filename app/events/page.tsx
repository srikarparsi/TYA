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
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { getEventsByStatus } from "@/lib/events-data";
import { HeroSection, CTASection } from "@/components/custom";

export default function EventsPage() {
  const upcomingEvents = getEventsByStatus("upcoming");
  const pastEvents = getEventsByStatus("past");

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Events"
        description="Join us for exciting community events that celebrate Telugu culture and bring our youth together"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-20">
          {/* Upcoming Events */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Upcoming Events
            </h2>
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="group shadow-xl border hover:shadow-2xl transition-all duration-300 cursor-pointer pt-0 overflow-hidden"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={
                          event.images[0] ||
                          "https://picsum.photos/400/300?random=10"
                        }
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Upcoming
                        </span>
                      </div>
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                      <CardDescription>
                        {event.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(event.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Link href={`/events/${event.slug}`}>
                        <Button className="w-full group-hover:translate-y-0 transition-transform">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="shadow-xl border">
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-muted-foreground mb-4">
                    No upcoming events scheduled at the moment.
                  </p>
                  <p className="text-muted-foreground">
                    Check back soon for exciting new events!
                  </p>
                </CardContent>
              </Card>
            )}
          </section>

          {/* Past Events */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">
              Past Events
            </h2>
            {pastEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="group shadow-xl border hover:shadow-2xl transition-all duration-300 cursor-pointer pt-0 overflow-hidden"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={
                          event.images[0] ||
                          "https://picsum.photos/400/300?random=10"
                        }
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Completed
                        </span>
                      </div>
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                      <CardDescription>
                        {event.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(event.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Link href={`/events/${event.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full group-hover:translate-y-0 transition-transform"
                        >
                          View Gallery & Testimonials
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="shadow-xl border">
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-muted-foreground">
                    Past event galleries will be displayed here.
                  </p>
                </CardContent>
              </Card>
            )}
          </section>

          {/* Call to Action */}
          <CTASection
            title="Don't Miss Out!"
            description="Stay connected with our community to never miss an event. Join us in celebrating Telugu culture and building lasting connections."
            buttons={[
              { text: "Get Involved", href: "/get-involved" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
