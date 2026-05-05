import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Privacy notice for Josef Shohet's portfolio — covers analytics, contact data, and third-party links.",
};

const PrivacyPage = () => {
  return (
    <main className="mx-4 my-12 max-w-3xl md:mx-auto text-black/80 dark:text-white/80">
      <h1 className="mb-6 text-3xl font-bold text-[#0c0d2e] dark:text-orange-400">
        Privacy Notice
      </h1>
      <div className="space-y-4 leading-7">
        <p>
          This portfolio collects limited technical data to understand site
          traffic and keep things running.
        </p>
        <p>
          Google Analytics is active on this site. It tracks general visitor
          and page activity. That data is not sold or shared beyond what
          Google Analytics requires to function.
        </p>
        <p>
          If you reach out by email, your message is used only to respond to
          you or discuss relevant opportunities.
        </p>
        <p>
          External links to GitHub, LinkedIn, and project demos point to
          platforms with their own privacy policies.
        </p>
        <p>Privacy questions? Email joe.shohet@gmail.com.</p>
      </div>
    </main>
  );
};

export default PrivacyPage;
