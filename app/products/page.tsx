import Container from "@/components/ui/container";
import Image from "next/image";
import { GraduationCap, Package } from "lucide-react";
import RedirectButton from "@/components/ui/redirectButton";

export const metadata = {
  title: "Products | Cod Vista Digital Solutions",
  description:
    "Explore our internally developed digital products and platforms designed to solve real-world problems.",
  metadataBase: new URL("https://www.codvista.com/products"),
};

const ProductsPage = () => {
  return (
    <Container>
      <div className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Our Products</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
          Beyond our premium services, we build robust, scalable products that transform how organizations and businesses operate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* FeeEase Card */}
          <div className="text-left bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">FeeEase</h2>
              <p className="text-gray-400 mb-6 text-lg">
                A comprehensive school management system designed to simplify fee collection, automate parent communication via WhatsApp, and manage accurate financial records.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/20">EdTech</span>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm border border-green-500/20">FinTech</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm border border-purple-500/20">SaaS</span>
              </div>
              <div className="rounded-xl overflow-hidden mb-8 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&auto=format&fit=crop"
                  alt="FeeEase Preview"
                  width={600}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <RedirectButton text="Live Demo" url="https://try.feeease.com" />
              <RedirectButton text="View Details" url="/products/feeease" />
            </div>
          </div>

          {/* Placeholder for future products */}
          <div className="bg-white/5 border border-white/10 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center mb-6 opacity-30">
              <Package className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-500 italic">More Products Coming Soon</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We're currently developing more internal platforms to solve complex challenges in E-commerce, Healthcare, and beyond. Stay tuned!
            </p>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
