// pages/terms-of-service.js
import Head from "next/head";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div>
      <Head>
        <title>Terms of Service | Cod Vista</title>
        <meta
          name="description"
          content="Read the terms of service for using Cod Vista's website and services."
        />
        <meta name="keywords" content="Cod Vista, Terms of Service, Legal" />
      </Head>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">Effective Date: 15/05/2024</p>
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          These Terms of Service (“Terms”) govern your access to and use of Cod
          Vista’s website and services. By accessing or using our services, you
          agree to comply with these Terms. If you do not agree to these Terms,
          please do not use our services.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Use of Services</h2>
        <p className="mb-4">
          <ul className="list-disc pl-6">
            <li>
              <strong>Eligibility:</strong> You must be at least 18 years old to
              use our services. By using our services, you represent and warrant
              that you meet this age requirement.
            </li>
            <li>
              <strong>User Conduct:</strong> You agree to use our services only
              for lawful purposes and in a way that does not infringe on the
              rights of others or restrict or inhibit their use of the services.
              Prohibited behavior includes, but is not limited to, harassment,
              defamation, abuse, threatening, or otherwise violating the legal
              rights of others.
            </li>
          </ul>
        </p>
        <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
        <p className="mb-4">
          <ul>
            <li>
              <strong>Ownership:</strong> All content, including but not limited
              to text, graphics, logos, images, and software, provided on our
              website is owned by Cod Vista or our licensors and is protected by
              intellectual property laws. Unauthorized use of this content is
              strictly prohibited.
            </li>
            <li>
              <strong>License:</strong> We grant you a limited, non-exclusive,
              non-transferable, and revocable license to access and use our
              services for personal and non-commercial purposes. This license
              does not allow you to reproduce, distribute, modify, or create
              derivative works from our content without our prior written
              consent.
            </li>
          </ul>
        </p>
        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          To the maximum extent permitted by law, Cod Vista shall not be liable
          for any indirect, incidental, special, or consequential damages
          arising out of or in connection with your use of our services, even if
          we have been advised of the possibility of such damages. Our total
          liability to you for any claims arising from your use of our services
          shall not exceed the amount paid by you, if any, for accessing our
          services.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify, defend, and hold harmless Cod Vista, its
          officers, directors, employees, agents, and affiliates from and
          against any claims, liabilities, damages, losses, and expenses,
          including reasonable attorneys' fees, arising out of or in any way
          connected with your use of our services or violation of these Terms.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms from time to time. Any changes will be
          posted on this page with an updated effective date. Your continued use
          of our services after any changes indicates your acceptance of the new
          Terms.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the
          laws of India, without regard to its conflict of law principles. Any
          disputes arising under or in connection with these Terms shall be
          subject to the exclusive jurisdiction of the courts located in
          Gorakhpur, Uttar Pradesh.
        </p>
      </div>
    </div>
  );
}
