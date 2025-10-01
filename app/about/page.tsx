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

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              About Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Building community, preserving culture, empowering youth
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-20">
          {/* Organization Info */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">Who We Are</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/800/600?random=20"
                  alt="Telugu Youth of America Community"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Card className="shadow-xl border">
                  <CardContent className="p-8">
                    <p className="text-xl leading-relaxed mb-6">
                      The Telugu Youth of America is dedicated to connecting,
                      empowering, and celebrating the Telugu youth community
                      across the United States. We strive to preserve our
                      cultural heritage while embracing the opportunities that
                      America provides.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Through events, podcasts, and community initiatives, we
                      create spaces where Telugu youth can connect, learn, grow,
                      and make a positive impact.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-xl border hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden pt-0">
                <div className="relative h-64">
                  <Image
                    src="https://picsum.photos/400/400?random=21"
                    alt="Team Member 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Team Member 1</CardTitle>
                  <CardDescription className="text-base">
                    Role/Position
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Brief description about the team member and their role in
                    the organization.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden pt-0">
                <div className="relative h-64">
                  <Image
                    src="https://picsum.photos/400/400?random=22"
                    alt="Team Member 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Team Member 2</CardTitle>
                  <CardDescription className="text-base">
                    Role/Position
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Brief description about the team member and their role in
                    the organization.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden pt-0">
                <div className="relative h-64">
                  <Image
                    src="https://picsum.photos/400/400?random=23"
                    alt="Team Member 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Team Member 3</CardTitle>
                  <CardDescription className="text-base">
                    Role/Position
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Brief description about the team member and their role in
                    the organization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mission and Values */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-xl border hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="text-4xl mb-3">🤝</div>
                  <CardTitle className="text-2xl">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Building strong connections within the Telugu youth
                    community.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="text-4xl mb-3">🎭</div>
                  <CardTitle className="text-2xl">Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Preserving and celebrating our Telugu heritage and
                    traditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="text-4xl mb-3">🌱</div>
                  <CardTitle className="text-2xl">Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Empowering young people to reach their full potential.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="text-4xl mb-3">✨</div>
                  <CardTitle className="text-2xl">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Making a positive difference in our communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of a vibrant community dedicated to celebrating Telugu
              culture and empowering the next generation.
            </p>
            <Link href="/get-involved">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-10"
              >
                Get Involved Today
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
