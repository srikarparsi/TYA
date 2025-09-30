import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GetInvolvedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Get Involved</h1>
      
      <div className="space-y-8">
        {/* Donate Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Support Our Mission</h2>
          <Card>
            <CardHeader>
              <CardTitle>Make a Donation</CardTitle>
              <CardDescription>
                Help us continue our mission to serve the Telugu youth community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Your generous donations help us organize events, create educational content, 
                and build a stronger community for Telugu youth across America.
              </p>
              <Button size="lg">Donate Now</Button>
            </CardContent>
          </Card>
        </section>

        {/* Future Volunteer Opportunities */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Volunteer Opportunities</h2>
          <Card>
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
              <CardDescription>
                We&apos;re working on creating volunteer and open position opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Check back soon for information about:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Event planning and coordination</li>
                <li>Content creation and social media</li>
                <li>Community outreach</li>
                <li>Technical support and web development</li>
              </ul>
              <Button variant="outline">Stay Updated</Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
