// src/components/Footer.tsx
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type Column = {
  heading: string;
  links: { label: string; href: string }[];
};

type Social = {
  Icon: IconType;
  href: string;
  label: string;
};

const COLUMNS: Column[] = [
  {
    heading: "Explore",
    links: [
      { label: "Discover Vendors", href: "#" },
      { label: "Popular Near You", href: "#" },
      { label: "Community Picks", href: "#" },
      { label: "New on Next Corner", href: "#" },
    ],
  },
  {
    heading: "Vendors",
    links: [
      { label: "Become a Vendor", href: "#" },
      { label: "Vendor Dashboard", href: "#" },
      { label: "Vendor Resources", href: "#" },
      { label: "Pricing & Fees", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Safety Standards", href: "#" },
      { label: "Community Blog", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Legal", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const SOCIALS: Social[] = [
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaTwitter, href: "#", label: "Twitter" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="flex-shrink-0 bg-white border-t">
      {/* Link columns */}
      <div
        className="
          max-w-6xl mx-auto px-4 py-10
          grid grid-cols-1 sm:grid-cols-2 gap-y-8
          md:flex md:justify-between md:space-x-8
        "
      >
        {COLUMNS.map(({ heading, links }) => (
          <div key={heading} className="md:w-1/4">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">
              {heading}
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright & Socials */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 text-gray-500 text-sm">
        <span>© 2025 Next Corner, Inc.</span>

        <div className="flex space-x-4 mt-3 md:mt-0">
          {SOCIALS.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={`Follow us on ${label}`}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
