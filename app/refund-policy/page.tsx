// pages/refund-policy.js
import Head from "next/head";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div>
      <Head>
        <title>Refund Policy | Cod Vista</title>
        <meta
          name="description"
          content="Read Cod Vista's refund policy for our products and services."
        />
        <meta
          name="keywords"
          content="Cod Vista, Refund Policy, Customer Satisfaction"
        />
      </Head>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
        <p className="mb-4">Effective Date: 15/05/2024</p>
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          At Cod Vista, we aim to ensure customer satisfaction. This Refund
          Policy outlines the conditions under which you may request a refund
          for our products and services.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Eligibility for Refunds</h2>
        <p className="mb-4">
          <ul className="list-disc pl-6">
            <li>
              <strong>Time Frame:</strong>Refund requests must be made within 30
              days from the date of purchase.
            </li>
            <li>
              <strong>Service-Based Refunds:</strong> Refunds are not available
              for services that have already been rendered or for any customized
              work.
            </li>
            <li>
              <strong>Digital Products:</strong> Refunds for digital products
              are only available if the product is defective or does not match
              the description provided at the time of purchase.
            </li>
          </ul>
        </p>
        <h2 className="text-2xl font-semibold mb-2">Refund Process</h2>
        <p className="mb-4">
          <ul className="list-disc pl-6">
            <li>
              <strong> Submission:</strong> To request a refund, please contact
              our customer support team at{" "}
              <Link
                className="text-blue-600 hover:text-purple-600 visited:text-purple-600"
                href="mailto:contact@codvista.com"
              >
                contact@codvista.com
              </Link>{" "}
              with your order number and a detailed explanation of your reason
              for the request.
            </li>
            <li>
              <strong>Review:</strong> Our team will review your request and
              respond within 3 business days. We may request additional
              information or evidence to support your claim.
            </li>
            <li>
              <strong>Approval:</strong> If your refund is approved, we will
              process it within 3 business days using the original method of
              payment. You will be notified once the refund has been issued.
            </li>
          </ul>
        </p>
        <h2 className="text-2xl font-semibold mb-2">Non-Refundable Items</h2>
        <p className="mb-4">
          <ul className="list-disc pl-6">
            <li>
              <strong>Gift Cards:</strong> Purchases of gift cards are
              non-refundable.
            </li>
            <li>
              <strong>Downloadable Software Products:</strong> Unless they are
              defective or not as described, downloadable software products are
              non-refundable.
            </li>
          </ul>
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Changes to This Refund Policy
        </h2>
        <p className="mb-4">
          We reserve the right to modify this Refund Policy at any time. Any
          changes will be effective immediately upon posting on our website.
          Your continued use of our services indicates your acceptance of the
          new policy.
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
    </div>
  );
}
