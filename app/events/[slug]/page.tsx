"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getEventBySlug } from "@/lib/events-data";

export default function EventDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const event = getEventBySlug(slug);
  
  if (!event) {
    notFound();
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <div className="mb-6">
        <Link href="/events">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Button>
        </Link>
      </div>

      {/* Event Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <div className="flex flex-col md:flex-row gap-4 text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(event.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long', 
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-lg leading-relaxed">{event.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Image Carousel */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Event Gallery</CardTitle>
              <CardDescription>
                {event.images.length > 1 
                  ? `Browse through ${event.images.length} photos from this event`
                  : event.status === 'upcoming' 
                    ? 'Event photos will be added after the event'
                    : 'Photo from this event'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {event.images.length > 0 ? (
                <Carousel className="w-full">
                  <CarouselContent>
                    {event.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`${event.title} - Photo ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 66vw"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {event.images.length > 1 && (
                    <>
                      <CarouselPrevious />
                      <CarouselNext />
                    </>
                  )}
                </Carousel>
              ) : (
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Photos coming soon...</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Event Details */}
        <div className="space-y-6">
          {/* Event Status */}
          <Card>
            <CardHeader>
              <CardTitle>Event Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                event.status === 'upcoming' 
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              }`}>
                {event.status === 'upcoming' ? 'Upcoming Event' : 'Past Event'}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          {event.status === 'upcoming' && (
            <Card>
              <CardHeader>
                <CardTitle>Join This Event</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg">
                  Register Now
                </Button>
                <Button variant="outline" className="w-full">
                  Add to Calendar
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      {event.testimonials.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">What Attendees Said</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="p-6">
                  {/* Rating */}
                  {testimonial.rating && (
                    <div className="flex gap-1 mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                  )}
                  
                  {/* Testimonial Content */}
                  <blockquote className="text-sm leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {testimonial.avatar ? (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-sm font-medium">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      {testimonial.role && (
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Related Events or Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don&apos;t miss out on future events and community activities. Join our community to stay updated.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-involved">
            <Button size="lg">Get Involved</Button>
          </Link>
          <Link href="/events">
            <Button variant="outline" size="lg">View All Events</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
