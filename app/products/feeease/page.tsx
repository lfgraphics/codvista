import Container from "@/components/ui/container";
import Image from "next/image";
import { GraduationCap, Wallet, Bell, ShieldCheck } from "lucide-react";
import RedirectButton from "@/components/ui/redirectButton";

export const metadata = {
  title: "FeeEase | Smart School Fee Management",
  description:
    "An all-in-one ERP solution for schools to manage fee collection, parent communication, and financial reporting with ease.",
  metadataBase: new URL("https://www.codvista.com/products/feeease"),
  openGraph: {
    images: ["https://www.codvista.com/logo.png"],
  },
};

const FeeEasePage = () => {
  return (
    <Container>
      <div className="py-12">
        {/* Hero Section for Product */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              FeeEase: Revolutionizing School Management
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The smartest way to handle fee collections, automated notifications, and student financial records. Built for modern educational institutions.
            </p>
            <div className="flex gap-4">
              <RedirectButton text="Live Demo" url="https://feeease.in" />
              <RedirectButton text="Get Started" url="/contact" />
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20">
              <Image
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1471&auto=format&fit=crop"
                alt="School Management"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <Wallet className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Smart Billing</h3>
            <p className="text-gray-400">Automated fee generation and invoice tracking for every student.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <Bell className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">WA Notifications</h3>
            <p className="text-gray-400">Send instant fee receipts and reminders directly to parents' WhatsApp.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <GraduationCap className="text-purple-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Student Portal</h3>
            <p className="text-gray-400">Complete academic and financial history accessible at a glance.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <ShieldCheck className="text-yellow-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-gray-400">Enterprise-grade encryption for sensitive school and financial data.</p>
          </div>
        </div>

        {/* Deep Dive Section */}
        <div className="space-y-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Centralized WhatsApp Management</h2>
              <p className="text-gray-300 mb-4">
                Say goodbye to manual messaging. FeeEase integrates with leading WhatsApp providers like AiSensy and Picky Assist to automate your communication.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Automated fee receipts upon payment.</li>
                <li>Scheduled reminders for pending dues.</li>
                <li>Broadcast important school announcements.</li>
                <li>Secure OTP-based login for staff and parents.</li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Communication"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Multi-Tenant Architecture</h2>
              <p className="text-gray-300 mb-4">
                Developed with scalability in mind, FeeEase allows regional education boards or private school groups to manage multiple institutions under a single powerful platform.
              </p>
              <p className="text-gray-400">
                Each school enjoys a private deployment with its own database, brand identity, and customized fee structures, while the main platform provides oversight and global analytics.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop"
                alt="Analytics"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 p-12 rounded-3xl text-center border border-dotted">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to modernize your school?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of schools that have simplified their finances and improved parent satisfaction with FeeEase.
          </p>
          <RedirectButton text="Speak to an Expert" url="https://feeease.com/contactus" />
        </div>
      </div>
    </Container>
  );
};

export default FeeEasePage;
