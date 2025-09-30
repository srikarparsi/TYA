import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Telugu Youth of America
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connecting, empowering, and celebrating the Telugu youth community across America
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-involved">
            <Button size="lg">Get Involved</Button>
          </Link>
          <Link href="/events">
            <Button size="lg" variant="outline">View Events</Button>
          </Link>
        </div>
      </section>

      <div className="space-y-12">
        {/* Mission Statement */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-center leading-relaxed">
                We are dedicated to building a vibrant community that preserves our Telugu heritage 
                while embracing the opportunities that America provides. Through events, educational 
                content, and meaningful connections, we empower young Telugu Americans to thrive 
                culturally, professionally, and personally.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Current Main Event */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Featured Event</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Upcoming Event</CardTitle>
              <CardDescription>Don&apos;t miss our next community gathering</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Join us for our next exciting event! Details will be announced soon. 
                Stay connected with our community for updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/events">
                  <Button className="w-full sm:w-auto">View All Events</Button>
                </Link>
                <Link href="/get-involved">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Stay Updated
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Listen to Our Podcast</CardTitle>
                <CardDescription>Stories, discussions, and insights from our community</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/podcast">
                  <Button variant="outline" className="w-full">Explore Podcasts</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Join Our Events</CardTitle>
                <CardDescription>Connect with fellow Telugu youth at our gatherings</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/events">
                  <Button variant="outline" className="w-full">View Events</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Learn About Us</CardTitle>
                <CardDescription>Meet our team and learn about our values</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/about">
                  <Button variant="outline" className="w-full">About Us</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
