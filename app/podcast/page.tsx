import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PodcastPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Podcast</h1>
      
      <div className="space-y-8">
        {/* Past Podcasts */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Past Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Episode 1: Sample Episode</CardTitle>
                <CardDescription>Episode Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Summary of the podcast episode content goes here.</p>
                <Button className="mt-4" variant="outline">Listen Now</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Suggestion Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Suggest a Podcast Topic or Guest</h2>
          <Card>
            <CardHeader>
              <CardTitle>Share Your Ideas</CardTitle>
              <CardDescription>
                Have an idea for a podcast topic or know someone who would be a great guest?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded-md" 
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border border-gray-300 rounded-md" 
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Suggestion Type</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="topic">Podcast Topic</option>
                    <option value="guest">Guest Suggestion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Details</label>
                  <textarea 
                    className="w-full p-2 border border-gray-300 rounded-md h-32" 
                    placeholder="Tell us about your suggestion..."
                  />
                </div>
                <Button>Submit Suggestion</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
