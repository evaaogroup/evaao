import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, Database, Users, Globe } from "lucide-react";

export function PrivacyPolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <SEO 
        title="Privacy Policy - Evaao"
        description="Learn how Evaao collects, uses, and protects your personal information. Our comprehensive privacy policy ensures your data security and transparency."
        keywords="privacy policy, data protection, GDPR, personal information, data security, Evaao privacy"
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
              <Shield className="text-[#F2C94C]" size={20} />
              <h1 className="text-xl font-semibold text-[#0E1E3A]">Privacy Policy</h1>
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
              <Lock size={16} className="text-[#F2C94C]" />
              <span className="text-sm text-[#0E1E3A] font-medium">Data Protection</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Last updated: January 2025. This Privacy Policy describes how Evaao collects, uses, and protects your personal information.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Information We Collect */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Database size={20} className="text-[#F2C94C]" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact us through our website forms</li>
                  <li>Request a quote or consultation</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Apply for employment opportunities</li>
                  <li>Engage with our services</li>
                </ul>
                <p className="mt-4">This may include your name, email address, phone number, company information, and project details.</p>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Eye size={20} className="text-[#0E1E3A]" />
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about projects and updates</li>
                  <li>Send marketing materials (with your consent)</li>
                  <li>Process employment applications</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and abuse</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Users size={20} className="text-[#F2C94C]" />
                Information Sharing
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Shield size={20} className="text-[#0E1E3A]" />
                Data Security
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Globe size={20} className="text-[#F2C94C]" />
                Your Rights
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:privacy@evaao.com" className="text-[#F2C94C] hover:underline">privacy@evaao.com</a></p>
              </div>
            </section>

            {/* Cookies */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4">Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Improve website functionality and user experience</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Remember your preferences and settings</li>
                  <li>Provide personalized content and advertisements</li>
                </ul>
                <p className="mt-4">You can control cookie settings through your browser preferences.</p>
              </div>
            </section>

            {/* International Transfers */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4">International Data Transfers</h2>
              <div className="space-y-4 text-gray-700">
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.</p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4">Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4">Changes to This Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="bg-gray-50 rounded-lg p-6 mt-4">
                  <p><strong>Email:</strong> <a href="mailto:privacy@evaao.com" className="text-[#F2C94C] hover:underline">privacy@evaao.com</a></p>
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