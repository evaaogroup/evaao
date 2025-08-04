import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

interface TermsOfServiceProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsOfService({ open, onOpenChange }: TermsOfServiceProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#0E1E3A]">Terms of Service</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> January 2025
              </p>
              <p className="text-gray-700">
                Welcome to Evaao. These Terms of Service ("Terms") govern your use of our services, 
                including web development, AI solutions, mobile applications, and enterprise software development.
              </p>
            </div>

            <Separator />

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-700 mb-3">
                By accessing or using Evaao's services, you agree to be bound by these Terms. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">2. Our Services</h3>
              <p className="text-gray-700 mb-3">
                Evaao provides comprehensive technology solutions including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Web application development and design</li>
                <li>AI and machine learning model development</li>
                <li>Mobile application development (iOS and Android)</li>
                <li>Gaming application development</li>
                <li>Enterprise resource planning (ERP) solutions</li>
                <li>Customer relationship management (CRM) systems</li>
                <li>Consulting and technical support services</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">3. Project Agreements</h3>
              <p className="text-gray-700 mb-3">
                Each project will be governed by a separate project agreement that will include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Project scope, timeline, and deliverables</li>
                <li>Payment terms and pricing</li>
                <li>Intellectual property rights</li>
                <li>Confidentiality agreements</li>
                <li>Support and maintenance terms</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">4. Intellectual Property</h3>
              <p className="text-gray-700 mb-3">
                Upon full payment, clients retain ownership of custom-developed solutions. 
                Evaao retains rights to proprietary frameworks, methodologies, and pre-existing intellectual property.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">5. Payment Terms</h3>
              <p className="text-gray-700 mb-3">
                Payment terms are specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>50% advance payment required to begin work</li>
                <li>Remaining balance due upon project completion</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to project agreement terms</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">6. Confidentiality</h3>
              <p className="text-gray-700 mb-3">
                We maintain strict confidentiality of all client information, business processes, 
                and proprietary data. All team members sign comprehensive non-disclosure agreements.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">7. Limitation of Liability</h3>
              <p className="text-gray-700 mb-3">
                Evaao's liability is limited to the amount paid for services. We are not liable for 
                indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">8. Support and Maintenance</h3>
              <p className="text-gray-700 mb-3">
                Post-launch support terms are defined in individual project agreements. 
                Standard support includes bug fixes and minor updates for a specified period.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">9. Termination</h3>
              <p className="text-gray-700 mb-3">
                Either party may terminate services with written notice. Termination terms, 
                including payment for completed work, are specified in project agreements.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">10. Governing Law</h3>
              <p className="text-gray-700 mb-3">
                These Terms are governed by applicable local laws. Any disputes will be resolved 
                through arbitration or in competent courts of jurisdiction.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">11. Changes to Terms</h3>
              <p className="text-gray-700 mb-3">
                We reserve the right to modify these Terms at any time. Updated terms will be 
                posted on our website with the revision date.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-[#0E1E3A] mb-3">12. Contact Information</h3>
              <p className="text-gray-700">
                For questions about these Terms, please contact us at:
                <br />
                Email: legal@evaao.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}