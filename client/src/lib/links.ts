/**
 * Centralized Links Configuration
 * 
 * This file manages all external and internal links used throughout the application.
 * Update links here to make changes across the entire application.
 * 
 * Usage:
 * - Import the specific link constant you need
 * - Example: import { HEADER_LINKS } from '@/lib/links';
 * - Use: href={HEADER_LINKS.students}
 */

// Header Links - "Information for:" section
export const HEADER_LINKS = {
  students: "https://students.ru.ac.ke/Login/",
  facultyStaff: "https://staff.ru.ac.ke/login",
  virtualCampus: "https://odel.riarauniversity.ac.ke/?redirect=0",
  studentEmail: "https://accounts.google.com/v3/signin/",
  alumni: "#", // To be updated later
  ruShop: "https://ru-shop.riarauniversity.ac.ke/",
} as const;

// Footer Links
export const FOOTER_LINKS = {
  library: "https://library.riarauniversity.ac.ke/",
} as const;

// Social Media Links
export const SOCIAL_MEDIA_LINKS = {
  facebook: "https://www.facebook.com/RiaraUniversity",
  twitter: "https://x.com/RiaraUniversity",
  instagram: "https://www.instagram.com/riara.university/",
  linkedin: "https://ke.linkedin.com/school/riara-university/",
  youtube: "https://www.youtube.com/user/RiaraUniversity",
  itunes: "https://itunes.riara-university.edu",
} as const;

// School/Department Links
export const SCHOOL_LINKS = {
  business: "https://sob.riarauniversity.ac.ke/",
  education: "https://soe.riarauniversity.ac.ke/",
  law: "https://law.riarauniversity.ac.ke/",
  computingScience: "https://scs.riarauniversity.ac.ke/",
  internationalRelations: "https://ird.riarauniversity.ac.ke/",
  communicationJournalism: "https://cmj.riarauniversity.ac.ke/",
} as const;

