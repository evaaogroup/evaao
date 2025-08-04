import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { ArrowLeft, FileText, Shield, AlertCircle, CheckCircle, Info } from "lucide-react";

export function TermsOfService() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <SEO 
        title="Terms of Service - Evaao"
        description="Read our terms of service to understand the rules and guidelines for using Evaao's services and website."
        keywords="terms of service, terms and conditions, Evaao terms, legal agreement"
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
              <FileText className="text-[#F2C94C]" size={20} />
              <h1 className="text-xl font-semibold text-[#0E1E3A]">Terms of Service</h1>
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
              <Shield size={16} className="text-[#F2C94C]" />
              <span className="text-sm text-[#0E1E3A] font-medium">Legal Agreement</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Last updated: January 2025. These Terms of Service govern your use of Evaao's services and website.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Acceptance of Terms */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-[#F2C94C]" />
                Acceptance of Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>By accessing and using Evaao's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                <p>These terms apply to all visitors, users, and others who access or use the service.</p>
              </div>
            </section>

            {/* Description of Service */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Info size={20} className="text-[#0E1E3A]" />
                Description of Service
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Evaao provides technology solutions including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Web application development and design</li>
                  <li>AI and machine learning solutions</li>
                  <li>Mobile application development</li>
                  <li>Gaming application development</li>
                  <li>ERP and CRM system implementation</li>
                  <li>Technology consulting and advisory services</li>
                </ul>
                <p>We reserve the right to modify or discontinue any part of our service at any time.</p>
              </div>
            </section>

            {/* User Accounts */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Shield size={20} className="text-[#F2C94C]" />
                User Accounts
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.</p>
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use another person's account without permission</li>
                  <li>Share your account credentials with others</li>
                  <li>Use the service for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <FileText size={20} className="text-[#0E1E3A]" />
                Intellectual Property Rights
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>The service and its original content, features, and functionality are and will remain the exclusive property of Evaao and its licensors. The service is protected by copyright, trademark, and other laws.</p>
                <p>Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>
                <p>For client projects, intellectual property rights are transferred according to the terms specified in individual project agreements.</p>
              </div>
            </section>

            {/* User Content */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-[#F2C94C]" />
                User Content
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>You retain ownership of any content you submit, post, or display on or through the service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content.</p>
                <p>You represent and warrant that:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You own the content or have the right to use it</li>
                  <li>The content does not violate any applicable laws or regulations</li>
                  <li>The content does not infringe on any third-party rights</li>
                </ul>
              </div>
            </section>

            {/* Privacy Policy */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Shield size={20} className="text-[#0E1E3A]" />
                Privacy Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.</p>
                <p>By using our service, you consent to the collection and use of information in accordance with our Privacy Policy.</p>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Info size={20} className="text-[#F2C94C]" />
                Payment Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Payment terms for our services are as follows:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Project-based pricing with detailed quotes provided upfront</li>
                  <li>Payment schedules vary by project size and duration</li>
                  <li>We accept various payment methods including bank transfers and credit cards</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refund policies are specified in individual project agreements</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-[#0E1E3A]" />
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>In no event shall Evaao, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your use or inability to use the service</li>
                  <li>Any unauthorized access to or use of our servers</li>
                  <li>Any interruption or cessation of transmission to or from the service</li>
                  <li>Any bugs, viruses, or other harmful code that may be transmitted</li>
                </ul>
                <p>Our total liability shall not exceed the amount paid by you for the specific service in question.</p>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-[#F2C94C]" />
                Disclaimers
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>The information on this service is provided on an "as is" basis. To the fullest extent permitted by law, Evaao:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Excludes all representations, warranties, conditions, and terms</li>
                  <li>Makes no warranties about the accuracy or completeness of information</li>
                  <li>Does not guarantee that the service will be uninterrupted or error-free</li>
                  <li>Does not warrant that defects will be corrected</li>
                </ul>
              </div>
            </section>

            {/* Termination */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Info size={20} className="text-[#0E1E3A]" />
                Termination
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                <p>If you wish to terminate your account, you may simply discontinue using the service.</p>
                <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <FileText size={20} className="text-[#F2C94C]" />
                Governing Law
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions.</p>
                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="border-l-4 border-[#0E1E3A] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Info size={20} className="text-[#0E1E3A]" />
                Changes to Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
                <p>What constitutes a material change will be determined at our sole discretion.</p>
                <p>By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.</p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="border-l-4 border-[#F2C94C] pl-6">
              <h2 className="text-2xl font-semibold text-[#0E1E3A] mb-4 flex items-center gap-2">
                <Shield size={20} className="text-[#F2C94C]" />
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-gray-50 rounded-lg p-6 mt-4">
                  <p><strong>Email:</strong> <a href="mailto:legal@evaao.com" className="text-[#F2C94C] hover:underline">legal@evaao.com</a></p>
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