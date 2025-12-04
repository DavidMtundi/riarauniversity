import { Facebook, Twitter, Instagram, Linkedin, Youtube, Apple, Download } from "lucide-react";
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
  icon: React.ComponentType<any>;
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
      { label: "History", href: "/history", testId: "link-footer-history" },
      { label: "Accreditation", href: "/about/accreditation", testId: "link-footer-accreditation" },
      { label: "Partners", href: "/partners", testId: "link-footer-partners" },
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

// Quick Downloads Data
const QUICK_DOWNLOADS = [
  { label: "University Brochure", href: "/downloads/brochure.pdf", testId: "link-download-brochure" },
  { label: "Application Form", href: "/downloads/application-form.pdf", testId: "link-download-application" },
  { label: "Academic Calendar", href: "/downloads/academic-calendar.pdf", testId: "link-download-calendar" },
  { label: "Fee Structure", href: "/downloads/fee-structure.pdf", testId: "link-download-fees" },
];

// Reusable components for better maintainability
const FooterLinkList: React.FC<{ links: FooterLink[] }> = ({ links }) => (
  <ul className="space-y-3 md:space-y-3.5 text-base md:text-lg text-[var(--color-text-secondary)]">
    {links.map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          className="font-semibold hover:text-[var(--color-stanford-red)] transition-colors leading-relaxed md:leading-loose"
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
    <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4 uppercase tracking-wide text-[var(--color-stanford-red)]">
      {section.title}
    </h3>
    <FooterLinkList links={section.links} />
  </div>
);

const QuickDownloadsSection: React.FC = () => (
  <div className="bg-gradient-to-r from-[var(--color-stanford-red)]/10 to-[var(--color-stanford-red)]/5 border-l-4 border-[var(--color-stanford-red)] rounded-lg p-6 md:p-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-[var(--color-stanford-red)]/20 rounded-lg">
        <Download className="h-5 w-5 text-[var(--color-stanford-red)]" />
      </div>
      <h3 className="font-bold text-lg md:text-xl uppercase tracking-wide text-[var(--color-stanford-red)]">
        Quick Downloads
      </h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {QUICK_DOWNLOADS.map((download) => (
        <a
          key={download.href}
          href={download.href}
          download
          className="group flex items-center gap-3 p-3 bg-white hover:bg-[var(--color-stanford-red)] rounded-lg border-2 border-gray-200 hover:border-[var(--color-stanford-red)] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          data-testid={download.testId}
        >
          <div className="flex-shrink-0 p-2 bg-[var(--color-stanford-red)]/10 group-hover:bg-white rounded-lg transition-colors">
            <Download className="h-4 w-4 text-[var(--color-stanford-red)] group-hover:text-[var(--color-stanford-red)]" />
          </div>
          <span className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-white transition-colors line-clamp-2">
            {download.label}
          </span>
        </a>
      ))}
    </div>
  </div>
);

const SocialMediaIcons: React.FC = () => (
  <div className="flex gap-4 md:gap-5 text-[var(--color-text-primary)]">
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
          <Icon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2.5} />
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

      {/* Quick Downloads Section - Prominent Banner */}
      <div className="bg-gradient-to-b from-white to-[var(--color-bg-secondary)]/30 border-b border-gray-200">
        <Container className="py-8 md:py-10 px-4 sm:px-6 md:px-8">
          <QuickDownloadsSection />
        </Container>
      </div>

      {/* Upper Section - Light Background */}
      <div className="bg-[var(--color-bg-primary)] text-lg sm:text-xl">
        <Container className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8">
          {/* Footer Links and Action Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
            {/* Footer Links */}
            <div className="lg:col-span-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
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
          <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-12">
            {/* Column 1: Riara University Name */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left text-white min-w-[160px]">
              <span className="text-2xl md:text-[2.25rem] font-serif font-semibold leading-none tracking-tight">Riara</span>
              <span className="text-xl md:text-[1.75rem] font-serif font-semibold leading-tight tracking-tight mt-1">University</span>
            </div>

            {/* Column 2: Links + Legal + Copyright */}
            <div className="flex flex-col gap-5 text-white flex-1">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-base font-semibold tracking-[0.05em] text-white">
                {PRIMARY_FOOTER_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="transition-colors whitespace-nowrap !text-white visited:!text-white hover:!text-[var(--color-text-inverse-secondary)]"
                    data-testid={link.testId}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm md:text-base font-semibold tracking-[0.04em] text-white">
                {LEGAL_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="transition-colors whitespace-nowrap !text-white visited:!text-white hover:!text-[var(--color-text-inverse-secondary)]"
                    data-testid={link.testId}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <p className="text-sm md:text-base font-semibold tracking-[0.05em] text-white/90">
                © Riara University. Riara, Nairobi, Kenya.
              </p>
            </div>

            {/* Column 3: Campus Map */}
            <div className="w-full md:w-auto md:min-w-[280px] lg:min-w-[320px] mt-6 md:mt-0">
              <h4 className="text-sm md:text-base font-semibold tracking-wide text-white mb-3 uppercase">Campus Location</h4>
              <div className="aspect-[4/3] rounded overflow-hidden border-2 border-white/20 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.812!2d36.8069232!3d-1.3148565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f105e9f1c97eb%3A0xd0d8411685ae0273!2s49940%2C%20Raila%20Odinga%20Wy%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1735689600000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Riara University Campus Location"
                ></iframe>
              </div>
              <p className="text-xs md:text-sm text-white/80 mt-2 text-center md:text-left">
                49940, Raila Odinga Way, Nairobi
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}