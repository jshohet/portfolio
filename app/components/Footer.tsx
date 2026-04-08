import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="m-6 flex flex-col gap-2 text-black/80 dark:text-white/80 sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; {currentYear} Josef Shohet. All rights reserved.</p>
      <Link href="/privacy" className="hover:underline">
        Privacy Notice
      </Link>
    </footer>
  );
};

export default Footer;
