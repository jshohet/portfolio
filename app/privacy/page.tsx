import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Privacy notice for Josef Shohet's portfolio website, including Google Analytics usage and contact information.",
};

const PrivacyPage = () => {
  return (
    <main className="mx-4 my-12 max-w-3xl md:mx-auto text-black/80 dark:text-white/80">
      <h1 className="mb-6 text-3xl font-bold text-[#0c0d2e] dark:text-orange-400">
        Privacy Notice
      </h1>
      <div className="space-y-4 leading-7">
        <p>
          This portfolio collects limited technical and usage information needed
          to understand general site traffic and keep the website operating.
        </p>
        <p>
          Google Analytics is used on this site to measure visitor traffic and
          general page activity. This information is used only to understand how
          the portfolio is being viewed. This site does not sell personal
          information.
        </p>
        <p>
          If you contact Josef Shohet directly by email, any information you
          provide is used only to respond to your inquiry or discuss relevant
          opportunities.
        </p>
        <p>
          Third-party platforms linked from this portfolio, including GitHub,
          LinkedIn, and deployed project demos, operate under their own privacy
          policies.
        </p>
        <p>For privacy-related questions, contact joe.shohet@gmail.com.</p>
      </div>
    </main>
  );
};

export default PrivacyPage;
