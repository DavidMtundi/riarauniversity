import { Facebook, Twitter, Instagram, Linkedin, Youtube, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

// Types for better maintainability and reusability
interface FooterLink {
  label: string;
  href: string;
  testId?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialMediaLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  testId?: string;
}

interface ActionButton {
  label: string;
  href: string;
  testId?: string;
}

// Data configuration - easily maintainable and reusable
const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "SCHOOLS",
    links: [
      { label: "Business", href: "/schools/business", testId: "link-footer-business" },
      { label: "Education", href: "/schools/education", testId: "link-footer-education" },
      { label: "Engineering", href: "/schools/engineering", testId: "link-footer-engineering" },
      { label: "Humanities & Sciences", href: "/schools/humanities", testId: "link-footer-humanities" },
      { label: "Law", href: "/schools/law", testId: "link-footer-law" },
      { label: "Medicine", href: "/schools/medicine", testId: "link-footer-medicine" },
      { label: "Sustainability", href: "/schools/sustainability", testId: "link-footer-sustainability" },
    ],
  },
  {
    title: "ACADEMICS",
    links: [
      { label: "Undergraduate Majors", href: "/academics/undergraduate", testId: "link-footer-undergraduate" },
      { label: "Graduate Programs", href: "/academics/graduate", testId: "link-footer-graduate" },
    ],
  },
  {
    title: "RESEARCH",
    links: [
      { label: "Research Centers A - Z", href: "/research/centers", testId: "link-footer-research-centers" },
      { label: "Libraries", href: "/research/libraries", testId: "link-footer-libraries" },
    ],
  },
  {
    title: "HEALTH CARE",
    links: [
      { label: "Riara Health Care", href: "/healthcare/riara-health", testId: "link-footer-riara-health" },
      { label: "Riara Children's Health", href: "/healthcare/childrens-health", testId: "link-footer-childrens-health" },
    ],
  },
  {
    title: "ONLINE LEARNING",
    links: [
      { label: "Riara Online", href: "/online-learning", testId: "link-footer-online-learning" },
    ],
  },
  {
    title: "ABOUT RIARA",
    links: [
      { label: "Facts", href: "/about/facts", testId: "link-footer-facts" },
      { label: "History", href: "/about/history", testId: "link-footer-history" },
      { label: "Accreditation", href: "/about/accreditation", testId: "link-footer-accreditation" },
    ],
  },
  {
    title: "ADMISSION",
    links: [
      { label: "Undergraduate", href: "/admission/undergraduate", testId: "link-footer-admission-undergraduate" },
      { label: "Graduate", href: "/admission/graduate", testId: "link-footer-admission-graduate" },
      { label: "Financial Aid", href: "/admission/financial-aid", testId: "link-footer-financial-aid" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Campus Map", href: "/resources/campus-map", testId: "link-footer-campus-map" },
      { label: "Community Engagement", href: "/resources/community", testId: "link-footer-community" },
      { label: "Directory", href: "/resources/directory", testId: "link-footer-directory" },
      { label: "Riara Profiles", href: "/resources/profiles", testId: "link-footer-profiles" },
    ],
  },
];

const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    icon: Facebook,
    href: "https://facebook.com/riara",
    label: "Facebook",
    testId: "link-social-facebook",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/riara",
    label: "Twitter",
    testId: "link-social-twitter",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/riara",
    label: "Instagram",
    testId: "link-social-instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/school/riara-university",
    label: "LinkedIn",
    testId: "link-social-linkedin",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/riara-university",
    label: "YouTube",
    testId: "link-social-youtube",
  },
  {
    icon: Apple,
    href: "https://itunes.riara-university.edu",
    label: "iTunes U",
    testId: "link-social-itunes",
  },
];

const ACTION_BUTTONS: ActionButton[] = [
  { label: "Applying", href: "/apply", testId: "button-footer-applying" },
  { label: "Visiting", href: "/visit", testId: "button-footer-visiting" },
  { label: "Giving", href: "/giving", testId: "button-footer-giving" },
  { label: "Careers", href: "/careers", testId: "button-footer-careers" },
  { label: "Faculty Positions", href: "/faculty-positions", testId: "button-footer-faculty" },
  { label: "Contact", href: "/contact", testId: "button-footer-contact" },
];

const PRIMARY_FOOTER_LINKS: FooterLink[] = [
  { label: "Riara Home", href: "/", testId: "link-footer-home" },
  { label: "Maps & Directions", href: "/maps", testId: "link-footer-maps" },
      { label: "Search Riara", href: "/search", testId: "link-footer-search" },
  { label: "Emergency Info", href: "/emergency", testId: "link-footer-emergency" },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Terms of Use", href: "/terms", testId: "link-footer-terms" },
  { label: "Privacy", href: "/privacy", testId: "link-footer-privacy" },
  { label: "Copyright", href: "/copyright", testId: "link-footer-copyright" },
  { label: "Trademarks", href: "/trademarks", testId: "link-footer-trademarks" },
  { label: "Non-Discrimination", href: "/non-discrimination", testId: "link-footer-non-discrimination" },
  { label: "Accessibility", href: "/accessibility", testId: "link-footer-accessibility" },
];

// Reusable components for better maintainability
const FooterLinkList: React.FC<{ links: FooterLink[] }> = ({ links }) => (
  <ul className="space-y-2 text-sm text-gray-700">
    {links.map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          className="font-bold hover:text-red-600 transition-colors"
          data-testid={link.testId}
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

const FooterSection: React.FC<{ section: FooterSection }> = ({ section }) => (
  <div>
    <h3 className="font-bold text-sm mb-4 uppercase tracking-wide text-red-600">
      {section.title}
    </h3>
    <FooterLinkList links={section.links} />
  </div>
);

const SocialMediaIcons: React.FC = () => (
  <div className="flex gap-4">
    {SOCIAL_MEDIA_LINKS.map((social) => {
      const Icon = social.icon;
      return (
        <a
          key={social.href}
          href={social.href}
          className="text-gray-600 hover:text-red-600 transition-colors"
          aria-label={social.label}
          data-testid={social.testId}
        >
          <Icon className="h-5 w-5" />
        </a>
      );
    })}
  </div>
);

const ActionButtons: React.FC = () => (
  <div className="flex flex-col gap-2">
    {ACTION_BUTTONS.map((button) => (
      <Button
        key={button.href}
        variant="outline"
        className="w-full justify-start font-bold text-gray-700 border-gray-300 hover:border-red-600 hover:text-red-600"
        asChild
        data-testid={button.testId}
      >
        <a href={button.href}>{button.label}</a>
      </Button>
    ))}
  </div>
);

export function Footer() {
  return (
    <footer className="bg-white riara-footer">
      {/* Upper Section - Light Background */}
      <div className="bg-gray-50">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-12">
          {/* Social Media Icons - Top Right */}
          <div className="flex justify-end mb-6">
            <SocialMediaIcons />
          </div>
          
          {/* Footer Links and Action Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Footer Links */}
            <div className="lg:col-span-10">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
                {FOOTER_SECTIONS.map((section) => (
                  <FooterSection key={section.title} section={section} />
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="lg:col-span-2">
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Dark Red Background */}
      <div className="bg-red-600 text-white">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Riara Logo */}
            <div className="flex items-center gap-4">
              <div className="text-white">
                <div className="text-2xl font-serif font-bold">Riara</div>
                <div className="text-sm font-sans font-bold">University</div>
              </div>
            </div>

            {/* Primary Footer Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {PRIMARY_FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-bold hover:text-gray-200 transition-colors"
                  data-testid={link.testId}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 pt-6 border-t border-red-500">
            <div className="flex flex-wrap gap-6 text-sm text-gray-200 mb-4">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-bold hover:text-white transition-colors"
                  data-testid={link.testId}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <p className="text-sm font-bold text-gray-200">
              © Riara University. Riara, Nairobi, Kenya.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}