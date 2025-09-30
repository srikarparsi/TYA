import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      
      <div className="space-y-8">
        {/* Organization Info */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Telugu Youth of America</CardTitle>
              <CardDescription>Building community, preserving culture, empowering youth</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Telugu Youth of America is dedicated to connecting, empowering, and celebrating 
                the Telugu youth community across the United States. We strive to preserve our 
                cultural heritage while embracing the opportunities that America provides.
              </p>
              <p>
                Through events, podcasts, and community initiatives, we create spaces where 
                Telugu youth can connect, learn, grow, and make a positive impact.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Member 1</CardTitle>
                <CardDescription>Role/Position</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Brief description about the team member and their role in the organization.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Team Member 2</CardTitle>
                <CardDescription>Role/Position</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Brief description about the team member and their role in the organization.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Team Member 3</CardTitle>
                <CardDescription>Role/Position</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Brief description about the team member and their role in the organization.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission and Values */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Building strong connections within the Telugu youth community.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Preserving and celebrating our Telugu heritage and traditions.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Empowering young people to reach their full potential.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Making a positive difference in our communities.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
