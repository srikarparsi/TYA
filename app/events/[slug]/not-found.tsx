import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar } from "lucide-react";

export default function EventNotFound() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/events">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Button>
        </Link>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <Card>
          <CardHeader>
            <div className="mx-auto mb-4 text-muted-foreground">
              <Calendar className="h-16 w-16" />
            </div>
            <CardTitle className="text-2xl">Event Not Found</CardTitle>
            <CardDescription className="text-lg">
              The event you&apos;re looking for doesn&apos;t exist or may have been moved.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Don&apos;t worry! You can explore our other events or check back later 
              as we regularly add new community events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <Button size="lg">Browse All Events</Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg">Go to Homepage</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
