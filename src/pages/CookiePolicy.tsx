import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { ArrowLeft, Cookie, Settings, Shield, Info, AlertCircle } from "lucide-react";

export function CookiePolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <SEO 
        title="Cookie Policy - Evaao"
        description="Learn about how Evaao uses cookies and similar technologies to enhance your browsing experience and provide personalized services."
        keywords="cookie policy, cookies, tracking, website analytics, Evaao cookies, data collection"
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <Cookie className="text-[#F2C94C]" size={20} />
              <h1 className="text-xl font-semibold text-[#0E1E3A]">Cookie Policy</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Introduction */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F2C94C]/10 px-4 py-2 rounded-full mb-6">
              <Cookie size={16} className="text-[#F2C94C]" />
              <span className="text-sm text-[#0E1E3A] font-medium">Cookie Management</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Last updated: January 2025. This Cookie Policy explains how Evaao uses cookies and similar technologies on our website.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* What Are Cookies */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Info size={20} className="text-[#F2C94C]" />
                What Are Cookies?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings, which can make your next visit easier and the site more useful to you.</p>
                <p>Cookies play an important role in making the web work more efficiently and providing information to website owners.</p>
              </div>
            </section>

            {/* Types of Cookies We Use */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Settings size={20} className="text-[#0E1E3A]" />
                Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                
                {/* Essential Cookies */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Essential Cookies</h3>
                  <p className="text-gray-700 mb-3">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Authentication cookies</li>
                    <li>Security cookies</li>
                    <li>Session management cookies</li>
                  </ul>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-3">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Google Analytics cookies</li>
                    <li>Page view tracking</li>
                    <li>User behavior analysis</li>
                  </ul>
                </div>

                {/* Functional Cookies */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Functional Cookies</h3>
                  <p className="text-gray-700 mb-3">These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>Form data retention</li>
                  </ul>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Marketing Cookies</h3>
                  <p className="text-gray-700 mb-3">These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Social media cookies</li>
                    <li>Advertising cookies</li>
                    <li>Retargeting cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-[#F2C94C]" />
                Third-Party Cookies
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We may use third-party services that place cookies on your device. These services include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google Ads:</strong> For advertising and remarketing purposes</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and integration</li>
                  <li><strong>Chat Services:</strong> For customer support and communication</li>
                </ul>
                <p className="mt-4">These third-party services have their own privacy policies and cookie policies.</p>
              </div>
            </section>

            {/* Cookie Management */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Shield size={20} className="text-[#0E1E3A]" />
                Managing Your Cookie Preferences
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>You can control and manage cookies in several ways:</p>
                
                <div className="bg-blue-50 rounded-lg p-6 mt-4">
                  <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Browser Settings</h3>
                  <p className="text-gray-700 mb-3">Most web browsers allow you to control cookies through their settings preferences. You can:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Delete existing cookies</li>
                    <li>Block cookies from being set</li>
                    <li>Set your browser to ask for permission before setting cookies</li>
                    <li>Disable third-party cookies</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Cookie Consent</h3>
                  <p className="text-gray-700 mb-3">When you first visit our website, you'll see a cookie consent banner that allows you to:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your cookie preferences</li>
                    <li>Learn more about our cookie usage</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Cookie Preferences Manager</h3>
                  <p className="text-gray-700 mb-3">You can change your cookie preferences at any time by:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Clicking the "Cookie Settings" link in our footer</li>
                    <li>Using our cookie preferences manager</li>
                    <li>Contacting us directly</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Impact of Disabling Cookies */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4">Impact of Disabling Cookies</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you choose to disable cookies, some features of our website may not function properly:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You may need to re-enter information each time you visit</li>
                  <li>Some website features may not work as expected</li>
                  <li>Personalized content may not be available</li>
                  <li>Analytics and performance monitoring may be limited</li>
                </ul>
              </div>
            </section>

            {/* Updates to Policy */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4">Updates to This Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on our website.</p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about our use of cookies, please contact us:</p>
                <div className="bg-gray-50 rounded-lg p-6 mt-4">
                  <p><strong>Email:</strong> <a href="mailto:cookies@evaao.com" className="text-[#F2C94C] hover:underline">cookies@evaao.com</a></p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> Evaao, 123 Tech Street, Innovation City, IC 12345</p>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Top Button */}
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToTop}
              className="bg-[#0E1E3A] hover:bg-[#F2C94C] text-white hover:text-[#0E1E3A] transition-all duration-300"
            >
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 