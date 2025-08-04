import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

interface PrivacyPolicyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyPolicy({ open, onOpenChange }: PrivacyPolicyProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#0E1E3A]">Privacy Policy</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> January 2025
              </p>
              <p className="text-gray-700">
                At Evaao, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </div>

            <Separator />

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">1. Information We Collect</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Personal Information</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Name, email address, and contact information</li>
                    <li>Company name and business information</li>
                    <li>Project requirements and specifications</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Technical Information</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>IP address and browser information</li>
                    <li>Website usage analytics</li>
                    <li>Device and operating system data</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">2. How We Use Your Information</h3>
              <p className="text-gray-700 mb-3">We use collected information to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Provide and improve our development services</li>
                <li>Communicate about projects and services</li>
                <li>Process payments and manage contracts</li>
                <li>Send updates about our services (with consent)</li>
                <li>Analyze website performance and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">3. Information Sharing</h3>
              <p className="text-gray-700 mb-3">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share information only in these circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>With your explicit consent</li>
                <li>To fulfill service delivery (trusted partners under NDA)</li>
                <li>For legal compliance or protection of rights</li>
                <li>In case of business merger or acquisition</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">4. Data Security</h3>
              <p className="text-gray-700 mb-3">We implement comprehensive security measures:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>SSL encryption for all data transmission</li>
                <li>Secure server infrastructure and access controls</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">5. Client Project Data</h3>
              <p className="text-gray-700 mb-3">
                For client projects, we maintain the highest level of confidentiality:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>All project data is treated as confidential</li>
                <li>Separate secure environments for each client</li>
                <li>Limited access on a need-to-know basis</li>
                <li>Secure deletion of data after project completion (as agreed)</li>
                <li>Comprehensive non-disclosure agreements</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">6. Cookies and Tracking</h3>
              <p className="text-gray-700 mb-3">We use cookies to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Improve website functionality and user experience</li>
                <li>Analyze website traffic and performance</li>
                <li>Remember your preferences and settings</li>
                <li>Provide personalized content</li>
              </ul>
              <p className="text-gray-700 mt-3">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">7. Your Rights</h3>
              <p className="text-gray-700 mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your data</li>
                <li>Data portability (receive your data in a structured format)</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">8. Data Retention</h3>
              <p className="text-gray-700 mb-3">
                We retain personal information only as long as necessary for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Providing services and support</li>
                <li>Legal and regulatory compliance</li>
                <li>Resolving disputes and enforcing agreements</li>
                <li>Business operations and record-keeping</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">9. International Data Transfers</h3>
              <p className="text-gray-700 mb-3">
                If we transfer data internationally, we ensure adequate protection through:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Adequacy decisions by data protection authorities</li>
                <li>Standard contractual clauses</li>
                <li>Binding corporate rules</li>
                <li>Certified transfer mechanisms</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">10. Children's Privacy</h3>
              <p className="text-gray-700 mb-3">
                Our services are not directed to children under 16. We do not knowingly collect 
                personal information from children. If we become aware of such collection, 
                we will delete the information immediately.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">11. Updates to This Policy</h3>
              <p className="text-gray-700 mb-3">
                We may update this Privacy Policy periodically. We will notify you of significant 
                changes through email or website notice. Continued use constitutes acceptance of updates.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">12. Contact Us</h3>
              <p className="text-gray-700">
                For privacy-related questions or to exercise your rights, contact us at:
                <br />
                <strong>Privacy Officer</strong>
                <br />
                Email: privacy@evaao.com
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Address: [Your Business Address]
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}