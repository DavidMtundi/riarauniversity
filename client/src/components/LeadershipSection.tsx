import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Container } from "@/components/Container";
import type { LeadershipMember } from "@shared/schema";

interface LeadershipSectionProps {
  members: LeadershipMember[];
  title?: string;
  showHeader?: boolean;
}

const roleLabels: Record<string, string> = {
  "chancellor": "Chancellor",
  "vc": "Vice Chancellor",
  "deputy-vc": "Deputy Vice Chancellor",
  "dean": "Dean",
  "director": "Director",
  "registrar": "Registrar",
  "finance": "Finance",
  "academic": "Academic Affairs",
  "research": "Research",
  "student-affairs": "Student Affairs",
};

export function LeadershipSection({ members, title = "Leadership & Management", showHeader = true }: LeadershipSectionProps) {
  // Group members by role
  const groupedByRole = members.reduce((acc, member) => {
    if (!acc[member.role]) {
      acc[member.role] = [];
    }
    acc[member.role].push(member);
    return acc;
  }, {} as Record<string, LeadershipMember[]>);

  // Extract top leadership roles (Chancellor, Vice Chancellor, Deputy Vice Chancellor)
  const topLeadershipRoles = ["chancellor", "vc", "deputy-vc"];
  const topLeadershipMembers: LeadershipMember[] = [];
  topLeadershipRoles.forEach(role => {
    if (groupedByRole[role]) {
      topLeadershipMembers.push(...groupedByRole[role].sort((a, b) => a.order - b.order));
    }
  });

  // Get other roles (excluding top leadership)
  const roleOrder = ["chancellor", "vc", "deputy-vc", "registrar", "dean", "director", "academic", "research", "student-affairs", "finance"];
  const sortedRoles = Object.keys(groupedByRole)
    .filter(role => !topLeadershipRoles.includes(role))
    .sort((a, b) => {
      const aIndex = roleOrder.indexOf(a);
      const bIndex = roleOrder.indexOf(b);
      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });

  const content = (
    <>
      {showHeader && (
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-primary)] mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)]">
            Meet the leadership team guiding Riara University's mission
          </p>
        </div>
      )}

      {/* Top Leadership: Chancellor, Vice Chancellor, Deputy Vice Chancellor */}
      {topLeadershipMembers.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--color-text-primary)] mb-8 text-center">
            University Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {topLeadershipMembers.map((member) => (
              <Card
                key={member.id}
                className="hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  {member.imageUrl && member.imageUrl.trim() !== '' ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center ${member.imageUrl && member.imageUrl.trim() !== '' ? 'hidden' : ''}`}
                    style={{ display: member.imageUrl && member.imageUrl.trim() !== '' ? 'none' : 'flex' }}
                  >
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-[var(--color-riara-red)]/20 flex items-center justify-center border-2 border-[var(--color-riara-red)]/30">
                        <span className="text-3xl font-bold text-[var(--color-riara-red)]">
                          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-base font-medium text-[var(--color-riara-red)] mb-3">
                    {member.title}
                  </p>
                  {member.department && (
                    <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                      {member.department}
                    </p>
                  )}
                  {member.bio && (
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-3">
                      {member.bio}
                    </p>
                  )}
                  <div className="space-y-2 pt-4 border-t border-[var(--color-border-secondary)]">
                    {member.email && (
                      <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <Mail className="h-4 w-4 text-[var(--color-riara-red)]" />
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-[var(--color-riara-red)] transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                    )}
                    {member.phone && (
                      <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <Phone className="h-4 w-4 text-[var(--color-riara-red)]" />
                        <a
                          href={`tel:${member.phone}`}
                          className="hover:text-[var(--color-riara-red)] transition-colors"
                        >
                          {member.phone}
                        </a>
                      </div>
                    )}
                    {member.office && (
                      <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <MapPin className="h-4 w-4 text-[var(--color-riara-red)]" />
                        <span>{member.office}</span>
                      </div>
                    )}
                    {member.link && member.link !== "#" && (
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] transition-colors mt-2"
                      >
                        View Full Profile
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Other Leadership Roles */}
      {sortedRoles.map((role) => (
        <div key={role} className="mb-12 last:mb-0">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--color-text-primary)] mb-6">
            {roleLabels[role] || role.charAt(0).toUpperCase() + role.slice(1).replace(/-/g, " ")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {groupedByRole[role]
              .sort((a, b) => a.order - b.order)
              .map((member) => (
                <Card
                  key={member.id}
                  className="hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                    {member.imageUrl && member.imageUrl.trim() !== '' ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          // Show fallback when image fails to load
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div 
                      className={`absolute inset-0 flex items-center justify-center ${member.imageUrl && member.imageUrl.trim() !== '' ? 'hidden' : ''}`}
                      style={{ display: member.imageUrl && member.imageUrl.trim() !== '' ? 'none' : 'flex' }}
                    >
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-[var(--color-riara-red)]/20 flex items-center justify-center border-2 border-[var(--color-riara-red)]/30">
                          <span className="text-3xl font-bold text-[var(--color-riara-red)]">
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-serif font-semibold text-[var(--color-text-primary)] mb-1">
                      {member.name}
                    </h4>
                    <p className="text-base font-medium text-[var(--color-riara-red)] mb-3">
                      {member.title}
                    </p>
                    {member.department && (
                      <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                        {member.department}
                      </p>
                    )}
                    {member.bio && (
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-3">
                        {member.bio}
                      </p>
                    )}
                    <div className="space-y-2 pt-4 border-t border-[var(--color-border-secondary)]">
                      {member.email && (
                        <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                          <Mail className="h-4 w-4 text-[var(--color-riara-red)]" />
                          <a
                            href={`mailto:${member.email}`}
                            className="hover:text-[var(--color-riara-red)] transition-colors"
                          >
                            {member.email}
                          </a>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                          <Phone className="h-4 w-4 text-[var(--color-riara-red)]" />
                          <a
                            href={`tel:${member.phone}`}
                            className="hover:text-[var(--color-riara-red)] transition-colors"
                          >
                            {member.phone}
                          </a>
                        </div>
                      )}
                      {member.office && (
                        <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                          <MapPin className="h-4 w-4 text-[var(--color-riara-red)]" />
                          <span>{member.office}</span>
                        </div>
                      )}
                      {member.link && member.link !== "#" && (
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-riara-red)] hover:text-[var(--color-riara-red-dark)] transition-colors mt-2"
                        >
                          View Full Profile
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </>
  );

  // Wrap in section only if showHeader is true (for standalone use)
  if (showHeader) {
    return (
      <section className="py-12 md:py-16 bg-white">
        <Container>
          {content}
        </Container>
      </section>
    );
  }

  // Return content without section/container wrapper when embedded in another page
  // (parent page will provide Container)
  return <>{content}</>;
}

