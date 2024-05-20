import Container from "@/components/ui/container";
import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Cod Vista</title>
        <meta
          name="description"
          content="Learn about Cod Vista's privacy policy and how we protect your personal information."
        />
        <meta
          name="keywords"
          content="Cod Vista, Privacy Policy, Data Protection"
        />
      </Head>
      <Container>
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4">Effective Date: 15/05/2024</p>
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="mb-4">
            Cod Vista values your privacy and is committed to protecting your
            personal information. This Privacy Policy outlines how we collect,
            use, disclose, and safeguard your information when you visit our
            website{" "}
            <Link
              className="text-blue-600 hover:text-purple-600 visited:text-purple-600"
              href="https://www.codvista.com"
            >
              {" "}
              [www.codvista.com]{" "}
            </Link>
            or use our services. Please read this policy carefully to understand
            our practices regarding your personal data.
          </p>
          <h2 className="text-2xl font-semibold mb-2">
            Information We Collect
          </h2>
          <p className="mb-4">
            <ul className="list-disc pl-6">
              <li>
                <strong>Personal Data:</strong> We collect personal
                identification information, such as your name, email address,
                phone number, and payment details, when you voluntarily provide
                it to us, for instance, when you register on our site or place
                an order.
              </li>
              <li>
                <strong>Non-Personal Data:</strong> We automatically collect
                certain non-personal information when you visit our website,
                including your IP address, browser type, operating system,
                access times, and the pages you view directly before and after
                accessing the site.
              </li>
            </ul>
          </p>
          <h2 className="text-2xl font-semibold mb-2">
            Use of Your Information
          </h2>
          <p className="mb-4">
            We use the information we collect in the following ways:
            <ul className="list-disc pl-6">
              <li>
                <strong>To Provide and Manage Services:</strong> We use your
                personal information to fulfill your requests, process your
                transactions, and provide you with customer support.
              </li>
              <li>
                <strong>To Improve Our Services:</strong> Your information helps
                us to personalize and enhance our services, website performance,
                and customer experience.
              </li>
              <li>
                <strong>For Communication:</strong> We may use your contact
                information to send you updates, newsletters, marketing
                materials, and other information related to our services. You
                can opt-out of these communications at any time.
              </li>
              <li>
                <strong>For Legal Obligations:</strong> We may process your
                information to comply with legal requirements, respond to legal
                processes, or protect our rights.
              </li>
            </ul>
          </p>
          <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to
            ensure the security of your personal data. However, please note that
            no method of transmission over the internet or method of electronic
            storage is 100% secure. While we strive to protect your personal
            data, we cannot guarantee its absolute security.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
          <p className="mb-4">
            We retain your personal data only for as long as necessary to
            fulfill the purposes for which it was collected, including any
            legal, accounting, or reporting requirements.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p className="mb-4">
            <ul className="list-disc pl-6">
              <li>
                Access: You have the right to request access to the personal
                data we hold about you.
              </li>
              <li>
                Rectification: You can request that we correct any inaccuracies
                in your personal data.
              </li>
              <li>
                Erasure: You have the right to request the deletion of your
                personal data, subject to certain legal conditions.
              </li>
              <li>
                Restriction: You may request the restriction of processing of
                your personal data under certain circumstances.
              </li>
              <li>
                Objection: You can object to the processing of your personal
                data for direct marketing purposes.
              </li>
              <li>
                Data Portability: You have the right to request the transfer of
                your personal data to another party.
              </li>
            </ul>
          </p>
          <h2 className="text-2xl font-semibold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. We
            encourage you to review this policy periodically to stay informed
            about how we are protecting your information.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
            <ul className="list-disc pl-6">
              <li>
                <strong>Email:</strong>{" "}
                <Link
                  className="text-blue-600 hover:text-purple-600 visited:text-purple-600"
                  target="_new"
                  href="mailto:contact@codvista.com"
                >
                  contact@codvista.com
                </Link>
              </li>
              <li>
                <strong>Phone:</strong>
                <ul className="list-disc pl-6">
                  <li>
                    <Link
                      href="tel:+919005228782"
                      className="text-blue-600 hover:text-purple-600 visited:text-purple-600"
                    >
                      +91 9005 2287 82
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+916393440986"
                      className="text-blue-600 hover:text-purple-600 visited:text-purple-600"
                    >
                      +91 6393 4409 86
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Address:</strong> Shop Number 9, 1st Floor, SK Plaza,
                Choteqazipur, Miyan Bazar Dakshini, Gorakhpur, Uttar Pradesh
                273001
              </li>
            </ul>
          </p>
        </div>
      </Container>
    </div>
  );
}
