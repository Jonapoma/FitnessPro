import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, XCircle } from 'lucide-react'

export default function Component() {
const [daysLeft, setDaysLeft] = useState(3);

return (
  <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border p-4 flex justify-between items-center sticky top-0 bg-background z-50">
      <h1 className="text-2xl font-bold">FitnessPro by LeadLegend</h1>
      <nav>
        <a href="#pain-points" className="ml-4 text-sm hover:text-primary">Pain Points</a>
        <a href="#solution" className="ml-4 text-sm hover:text-primary">Solution</a>
        <a href="#features" className="ml-4 text-sm hover:text-primary">Features</a>
        <a href="#proof" className="ml-4 text-sm hover:text-primary">Proof</a>
        <a href="#offer" className="ml-4 text-sm hover:text-primary">Offer</a>
        <a href="#action" className="ml-4 text-sm hover:text-primary">Action</a>
      </nav>
    </header>

    <main>
      <section id="pain-points" className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">Is Your Fitness Business Hemorrhaging Leads and Profits?</h1>
          <p className="text-2xl mb-12">83% of gym owners are losing potential members due to poor follow-up systems. Don't let your competition steal your growth!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-3xl font-semibold mb-2">$5,000+</h3>
              <p>Lost revenue per month from missed opportunities</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-2">67%</h3>
              <p>Of leads never receive proper follow-up</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-2">3x</h3>
              <p>Higher conversion rates with proper lead nurturing</p>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="animate-pulse text-xl py-6 px-12">
            Stop the Bleeding Now!
          </Button>
        </div>
      </section>

      <section id="solution" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Introducing FitnessPro: Your All-in-One Lead Conversion Powerhouse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Skyrocket Your Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Turn cold leads into hot prospects with our AI-driven nurturing system. Watch your conversion rates soar by up to 300%!</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Intelligent lead scoring</li>
                  <li>Personalized follow-up sequences</li>
                  <li>Behavior-triggered communications</li>
                  <li>A/B testing for optimal results</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Dominate Every Channel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Capture and nurture leads from SMS, chat widgets, social media, missed calls, and more. Never miss an opportunity again!</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Omnichannel lead capture</li>
                  <li>Unified communication dashboard</li>
                  <li>Automated channel switching</li>
                  <li>Cross-channel performance analytics</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Automate Your Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our intelligent workflows handle lead nurturing, appointment management, and follow-ups 24/7. Grow your business while you sleep!</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Set-and-forget campaign creation</li>
                  <li>Dynamic content personalization</li>
                  <li>Automated task assignment</li>
                  <li>Real-time performance optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Powerful Features That Drive Results</h2>
          <Tabs defaultValue="workflows" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="workflows">Smart Workflows</TabsTrigger>
              <TabsTrigger value="funnels">High-Converting Funnels</TabsTrigger>
              <TabsTrigger value="channels">Multi-Channel Mastery</TabsTrigger>
            </TabsList>
            <TabsContent value="workflows">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">AI-Powered Workflows That Convert</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Lead Nurturing</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Personalized follow-ups that turn inquiries into members</li>
                        <li>Behavior-based segmentation for targeted messaging</li>
                        <li>Automated drip campaigns with dynamic content</li>
                        <li>Interest and engagement tracking for optimal conversion</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Appointment Management</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Boost show-up rates and minimize no-shows</li>
                        <li>Automated reminders via SMS, email, and push notifications</li>
                        <li>Easy rescheduling options for flexibility</li>
                        <li>Post-appointment follow-ups for feedback and upsells</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Walk-In Snapshot</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Capture and nurture every walk-in lead effortlessly</li>
                        <li>Quick data entry for seamless visitor processing</li>
                        <li>Instant lead assignment to sales team</li>
                        <li>Automated follow-up sequences for walk-in leads</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Intelligent Rebooking</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Automatically re-engage cancellations and no-shows</li>
                        <li>Smart timing algorithms for optimal rebooking success</li>
                        <li>Personalized incentives to encourage rescheduling</li>
                        <li>Analytics to identify and address common cancellation reasons</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="funnels">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Conversion-Optimized Funnels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">3-Step Funnel</h4>
                      <p className="mb-4">Maximize conversions with our proven offer-claim-appointment process:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Compelling offer presentation</li>
                        <li>Frictionless claim process</li>
                        <li>Immediate appointment scheduling</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">2-Step Funnel</h4>
                      <p className="mb-4">Rapidly capture leads with our streamlined opt-in system:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>High-converting lead magnet</li>
                        <li>Simplified data capture form</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Custom Website Templates</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Choose from conversion-focused designs that drive action</li>
                        <li>Mobile-responsive layouts for all devices</li>
                        <li>Easy customization to match your brand</li>
                        <li>Built-in SEO optimization for better visibility</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Funnel Analytics</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Real-time conversion tracking</li>
                        <li>Detailed funnel step analysis</li>
                        <li>Heatmaps and user behavior insights</li>
                        <li>A/B testing capabilities for continuous improvement</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="channels">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Dominate Every Channel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">SMS Marketing</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Engage leads with personalized text messages</li>
                        <li>Automated SMS campaigns and follow-ups</li>
                        <li>Two-way texting for real-time conversations</li>
                        <li>SMS keyword campaigns for easy opt-ins</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Chat Widget</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Capture website visitors in real-time</li>
                        <li>AI-powered chatbot for 24/7 lead qualification</li>
                        <li>Seamless handoff to live agents when needed</li>
                        <li>Chat-to-SMS continuation for ongoing engagement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Social Media Integration</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Connect via Facebook Messenger, Instagram DM, and more</li>
                        <li>Unified inbox for all social media messages</li>
                        <li>Automated responses to common inquiries</li>
                        <li>Social media ad integration for seamless lead capture</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Missed Call Text-Back</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Never lose a lead due to a missed call again</li>
                        <li>Instant text follow-up for missed calls</li>
                        <li>Automated scheduling options via text</li>
                        <li>Call tracking and analytics for optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Email Marketing</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Nurture leads through targeted email campaigns</li>
                        <li>Behavior-triggered email sequences</li>
                        <li>Dynamic content personalization</li>
                        <li>Advanced segmentation for targeted messaging</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Google My Business</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Capture leads directly from your GMB profile</li>
                        <li>Automated responses to GMB messages</li>
                        <li>Integration with other communication channels</li>
                        <li>Review management and response automation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="proof" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Real Results from Real Gym Owners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">"FitnessPro transformed our business. We've seen a 250% increase in member sign-ups since implementing their system."</p>
                <p className="font-semibold">- Sarah J., CrossFit Box Owner</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">"I used to spend hours following up with leads. Now, FitnessPro does it all for me, and our conversion rate has doubled!"</p>
                <p className="font-semibold">- Mike T., Yoga Studio Manager</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">"The ROI is incredible. FitnessPro paid for itself in the first month. Now we're seeing 5x the return every single month."</p>
                <p className="font-semibold">- Lisa R., Gym Chain Owner</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Don't Just Take Our Word For It</h3>
            <p className="text-xl mb-8">Join the 400+ fitness businesses that have revolutionized their lead conversion with FitnessPro</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Join Now
            </Button>
          </div>
        </div>
      </section>

      <section id="comparison" className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How FitnessPro Stacks Up Against the Competition</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-background">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">FitnessPro</th>
                  <th className="p-4 text-center">Generic CRM</th>
                  <th className="p-4 text-center">Basic Lead Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border">AI-Powered Lead Nurturing</td>
                  <td className="p-4 border text-center"><CheckCircle className="inline-block text-green-500" /></td>
                  <td className="p-4 border text-center"><XCircle className="inline-block text-red-500" /></td>
                  <td className="p-4 border text-center"><XCircle className="inline-block text-red-500" /></td>
                </tr>
                <tr>
                  <td className="p-4 border">Multi-Channel Communication</td>
                  <td className="p-4 border text-center"><CheckCircle className="inline-block text-green-500" /></td>
                  <td className="p-4 border text-center"><CheckCircle className="inline-block text-green-500" /></td>
                  <td className="p-4 border text-center"><XCircle className="inline-block text-red-500" /></td>
                </tr>
                <tr>
                  <td className="p-4 border">Fitness-Specific Workflows</td>
                  <td className="p-4 border text-center"><CheckCircle className="inline-block text-green-500" /></td>
                  <td className="p-4 border text-center"><XCircle className="inline-block text-red-500" /></td>
                  <td className="p-4 border text-center"><XCircle className="inline-block text-red-500" /></td>
                </tr>
                <tr>
                  <td className="p-4 border">Automated Follow-up Sequences</td>
                  <td className="p-4 border text-center"><CheckCircle className="inline-block text-green-500" /></td>
                  <td className="p-4 border text-center"><CheckCircle className="inline-block text-green-500" /></td>
                  <td className="p-4 border text-center"><XCircle className="inline-block text-red-500" /></td>
                </tr>
                <tr>
                  <td className="p-4 border">Real-time Analytics Dashboard</td>
                  <td className="p-4 border text-center"><CheckCircle className="inline-block text-green-500" /></td>
                  <td className="p-4 border text-center"><CheckCircle className="inline-block text-green-500" /></td>
                  <td className="p-4 border text-center"><XCircle className="inline-block text-red-500" /></td>
                </tr>
                <tr>
                  <td className="p-4 border">Customizable Marketing Funnels</td>
                  <td className="p-4 border text-center"><CheckCircle className="inline-block text-green-500" /></td>
                  <td className="p-4 border text-center"><XCircle className="inline-block text-red-500" /></td>
                  <td className="p-4 border text-center"><XCircle className="inline-block text-red-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="offer" className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Limited Time Offer: Dominate Your Local Fitness Market!</h2>
          <p className="text-2xl mb-12">Lock in our special introductory rate before prices skyrocket!</p>
          <Card className="max-w-2xl mx-auto bg-background text-foreground">
            <CardHeader>
              <CardTitle className="text-3xl">FitnessPro Elite Package</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold mb-6">
                $497<span className="text-2xl font-normal">/month</span>
                <Badge variant="destructive" className="ml-2 text-lg">Save 50%</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">What's Included:</h4>
                  <ul className="space-y-2 text-left">
                    <li>✓ AI-Powered Lead Nurturing</li>
                    <li>✓ Multi-Channel Communication</li>
                    <li>✓ Automated Follow-up Sequences</li>
                    <li>✓ Real-time Analytics Dashboard</li>
                    <li>✓ Customizable Marketing Funnels</li>
                    <li>✓ Unlimited Users</li>
                    <li>✓ Unlimited Contacts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Bonus Features:</h4>
                  <ul className="space-y-2 text-left">
                    <li>✓ 1-on-1 Onboarding Session</li>
                    <li>✓ Weekly Strategy Calls</li>
                    <li>✓ Custom Workflow Setup</li>
                    <li>✓ ROI Tracking Tools</li>
                    <li>✓ Priority Feature Requests</li>
                    <li>✓ Exclusive Fitness Industry Reports</li>
                  </ul>
                </div>
              </div>
              <p className="mb-8 font-semibold text-xl bg-yellow-100 text-yellow-800 p-4 rounded">Bonus: Next 20 signups get $200 worth of SMS credits!</p>
              <p className="text-sm text-muted-foreground mb-4">One-time setup fee: $2,000</p>
              <Button size="lg" className="w-full animate-pulse bg-primary text-primary-foreground hover:bg-primary/90 text-xl py-6">
                Claim Your Discount Now
              </Button>
            </CardContent>
          </Card>
          <p className="mt-8 text-xl">Only {daysLeft} days left at this price! Don't let your competition get the edge!</p>
        </div>
      </section>

      <section id="action" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explode Your Fitness Business Growth?</h2>
          <p className="text-2xl mb-12">Join the elite gym owners who are crushing their competition with FitnessPro. Your success story starts here!</p>
          <Button type="submit" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-xl py-6 px-12">
            Get Started Now
          </Button>
          <p className="mt-8 text-xl">Limited spots available. Act now to secure your competitive advantage!</p>
        </div>
      </section>
    </main>

    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About FitnessPro</h3>
            <p className="text-sm text-muted-foreground">FitnessPro by LeadLegend is the ultimate lead conversion solution for fitness businesses. We help you turn prospects into loyal members.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#proof" className="text-sm text-muted-foreground hover:text-primary">Testimonials</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-muted-foreground">Email: support@fitnesspro.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2024 FitnessPro by LeadLegend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
);
}