import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Events</h1>
      
      <div className="space-y-8">
        {/* Current/Upcoming Events */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sample Upcoming Event</CardTitle>
                <CardDescription>Coming Soon - Date TBD</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Details about the upcoming event will be posted here.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sample Past Event</CardTitle>
                <CardDescription>Completed Event</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Photos and memories from our past events will be displayed here.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
