import { Facebook, Twitter, Instagram, Linkedin, Youtube, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { FOOTER_LINKS, SOCIAL_MEDIA_LINKS as SOCIAL_LINKS_CONFIG, SCHOOL_LINKS } from "@/lib/links";

// Types for better maintainability and reusability
interface FooterLink {
  label: string;
  href: string;
  testId?: string;
  external?: boolean;
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
      { label: "School of Business", href: SCHOOL_LINKS.business, testId: "link-footer-business", external: true },
      { label: "School of Education", href: SCHOOL_LINKS.education, testId: "link-footer-education", external: true },
      { label: "Riara Law School", href: SCHOOL_LINKS.law, testId: "link-footer-law", external: true },
      { label: "School of Computing Science", href: SCHOOL_LINKS.computingScience, testId: "link-footer-computing", external: true },
      { label: "School of International Relations", href: SCHOOL_LINKS.internationalRelations, testId: "link-footer-international", external: true },
      { label: "School of Communication and Journalism", href: SCHOOL_LINKS.communicationJournalism, testId: "link-footer-communication", external: true },
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
      { label: "School Library", href: FOOTER_LINKS.library, testId: "link-footer-School Library" },
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
    href: SOCIAL_LINKS_CONFIG.facebook,
    label: "Facebook",
    testId: "link-social-facebook",
  },
  {
    icon: Twitter,
    href: SOCIAL_LINKS_CONFIG.twitter,
    label: "Twitter",
    testId: "link-social-twitter",
  },
  {
    icon: Instagram,
    href: SOCIAL_LINKS_CONFIG.instagram,
    label: "Instagram",
    testId: "link-social-instagram",
  },
  {
    icon: Linkedin,
    href: SOCIAL_LINKS_CONFIG.linkedin,
    label: "LinkedIn",
    testId: "link-social-linkedin",
  },
  {
    icon: Youtube,
    href: SOCIAL_LINKS_CONFIG.youtube,
    label: "YouTube",
    testId: "link-social-youtube",
  },
  {
    icon: Apple,
    href: SOCIAL_LINKS_CONFIG.itunes,
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
  <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-[var(--color-text-secondary)]">
    {links.map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          className="font-semibold hover:text-[var(--color-stanford-red)] transition-colors leading-relaxed"
          data-testid={link.testId}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

const FooterSection: React.FC<{ section: FooterSection }> = ({ section }) => (
  <div>
    <h3 className="font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide text-[var(--color-stanford-red)]">
      {section.title}
    </h3>
    <FooterLinkList links={section.links} />
  </div>
);

const SocialMediaIcons: React.FC = () => (
  <div className="flex gap-4 md:gap-5">
    {SOCIAL_MEDIA_LINKS.map((social) => {
      const Icon = social.icon;
      return (
        <a
          key={social.href}
          href={social.href}
          className="text-[var(--color-text-tertiary)] hover:text-[var(--color-stanford-red)] transition-colors hover:scale-110"
          aria-label={social.label}
          data-testid={social.testId}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="h-5 w-5 md:h-6 md:w-6" />
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
        className="w-full justify-start font-bold text-[var(--color-text-secondary)] border-[var(--color-border-medium)] hover:border-[var(--color-stanford-red)] hover:text-[var(--color-stanford-red)]"
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
    <footer className="bg-[var(--color-bg-primary)] riara-footer">
      {/* Social Icons Row */}
      <div className="bg-[var(--color-bg-tertiary)] border-t border-[var(--color-border-secondary)]">
        <Container className="py-6 sm:py-8 px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center md:justify-end">
            <SocialMediaIcons />
          </div>
        </Container>
      </div>

      {/* Upper Section - Light Background */}
      <div className="bg-[var(--color-bg-primary)]">
        <Container className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8">
          {/* Footer Links and Action Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
            {/* Footer Links */}
            <div className="lg:col-span-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8">
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
        </Container>
      </div>

      {/* Lower Section - Dark Red Background */}
      <div className="bg-[var(--color-stanford-red)]">
        <Container className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            {/* Riara Logo */}
            <div className="flex items-center">
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-serif font-bold leading-tight">Riara</div>
                <div className="text-sm md:text-base font-sans font-semibold mt-1">University</div>
              </div>
            </div>

            {/* Primary Footer Links */}
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
              {PRIMARY_FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="!text-white font-bold hover:!text-[var(--color-text-inverse-secondary)] transition-colors whitespace-nowrap"
                  data-testid={link.testId}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 sm:mt-7 md:mt-8 pt-5 sm:pt-6 border-t border-white/20">
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm mb-4">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="!text-white font-bold hover:!text-[var(--color-text-inverse-secondary)] transition-colors whitespace-nowrap"
                  data-testid={link.testId}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <p className="text-xs md:text-sm font-bold !text-white">
              © Riara University. Riara, Nairobi, Kenya.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}