import { type User, type InsertUser, type NewsArticle, type EducationPath, type School, type ResearchStat, type Profile, type Event, type Career, type ContentSection, type PartnerCategory, type LeadershipMember } from "@shared/schema";
import { randomUUID } from "crypto";
import { transformImageUrls } from "./repositories/ContentRepository";
import { getImageUrl } from "./config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Storage Interface - Backward compatible with existing code
 * This wraps the new repository pattern for easy migration
 */
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getNewsArticles(): Promise<NewsArticle[]>;
  getEducationPaths(): Promise<EducationPath[]>;
  getSchools(): Promise<School[]>;
  getResearchStats(): Promise<ResearchStat[]>;
  getProfile(type: string): Promise<Profile | undefined>;
  getCampusLifeSections(): Promise<ContentSection[]>;
  getArtsSections(): Promise<ContentSection[]>;
  getEvents(): Promise<Event[]>;
  getCareers(): Promise<Career[]>;
  getHealthcareSections(): Promise<ContentSection[]>;
  getAthleticsSections(): Promise<ContentSection[]>;
  getPartners(): Promise<PartnerCategory[]>;
  getLeadership(): Promise<LeadershipMember[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private newsArticles: NewsArticle[] = [];
  private educationPaths: EducationPath[] = [];
  private schools: School[] = [];
  private researchStats: ResearchStat[] = [];
  private profiles: Map<string, Profile> = new Map();
  private campusLifeSections: ContentSection[] = [];
  private artsSections: ContentSection[] = [];
  private events: Event[] = [];
  private careers: Career[] = [];
  private healthcareSections: ContentSection[] = [];
  private athleticsSections: ContentSection[] = [];

  constructor() {
    this.users = new Map();
    this.initializeData();
  }

  private initializeData() {
    this.newsArticles = [
      {
        id: "1",
        category: "University Milestone",
        title: "Riara University Awarded Charter by President William Ruto",
        subtitle: "Historic recognition marks transition to fully accredited institution",
        excerpt: "On March 19, 2025, Riara University was granted a Charter by President William Ruto at State House, Nairobi, marking a historic milestone in the university's journey.",
        content: "On March 19, 2025, Riara University was granted a Charter by President William Ruto at State House, Nairobi. This recognition marks the university's transition to a fully accredited higher learning institution, affirming its commitment to academic excellence and institutional independence. The Charter award ceremony was attended by university leadership, faculty, students, and distinguished guests. This milestone represents years of dedication to providing quality education and demonstrates Riara University's readiness to contribute significantly to Kenya's higher education landscape. The Charter enables the university to operate with full autonomy while maintaining the highest standards of academic integrity and excellence.",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/05/char.jpg",
        link: "https://riarauniversity.ac.ke/charter-award-press-release/",
        featured: true,
        publishedDate: "Mar 19, 2025",
        author: "University Communications"
      },
      {
        id: "2",
        category: "Partnerships",
        title: "Riara University Partners with IFC on Employability Program",
        subtitle: "Enhancing graduate employability and entrepreneurship in Kenya",
        excerpt: "Riara University has partnered with the International Finance Corporation (IFC) under the Vitae Employability Program to enhance graduate employability and foster entrepreneurship.",
        content: "In October 2025, Riara University partnered with the International Finance Corporation (IFC) under the Vitae Employability Program. This collaboration aims to enhance graduate employability and foster entrepreneurship in Kenya by aligning academic programs with labor market needs and supporting students in building career skills. The partnership focuses on bridging the gap between education and employment, ensuring that Riara graduates are well-prepared for the job market. Through this initiative, students will have access to career development resources, mentorship programs, and opportunities to connect with potential employers. The program also emphasizes entrepreneurship, encouraging students to develop innovative solutions and start their own businesses.",
        imageUrl: "https://www.vitaeready.org/wp-content/uploads/2025/10/IMG_2465-scaled.jpg",
        link: "https://www.vitaeready.org/learning-hub/riara-university-partnership/",
        publishedDate: "Oct 2025",
        author: "Partnerships Office"
      },
      {
        id: "3",
        category: "Innovation",
        title: "Riara University Signs Commercialization and Entrepreneurship Masterplan",
        subtitle: "Partnership with KeNIA to foster innovation and entrepreneurship",
        excerpt: "Riara University signed a masterplan with the Kenya National Innovation Agency (KeNIA) during the Kenya Innovation Week 2024.",
        content: "In November 2024, Riara University signed a masterplan with the Kenya National Innovation Agency (KeNIA) during the Kenya Innovation Week. This partnership focuses on fostering innovation, promoting entrepreneurship, and accelerating the commercialization of creative ideas and technologies within the university. The masterplan establishes a framework for supporting student and faculty innovations, providing resources for startup development, and creating pathways for research commercialization. This initiative aligns with Riara University's vision to become a leading innovation and startup-driven university in Africa, creating an ecosystem where innovative ideas can flourish and transform into viable businesses.",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2024/12/MOU-Signing-Cover-Page.jpg",
        link: "https://riarauniversity.ac.ke/riara-university-signs-commercialization-and-entrepreneurship-masterplan-at-kenya-innovation-week-2024/",
        publishedDate: "Nov 2024",
        author: "Innovation Office"
      },
      {
        id: "4",
        category: "Innovation",
        title: "Riara, A Hub of Innovations",
        subtitle: "Guest lecture on thriving innovation and startup ecosystems",
        excerpt: "The School of Computing Sciences hosted Professor Prabhu Rajagopal from IIT Madras for a talk on innovation and startup ecosystems.",
        content: "In June 2025, the School of Computing Sciences hosted Professor Prabhu Rajagopal from IIT Madras, who delivered a talk on thriving innovation and startup ecosystems. The session emphasized the importance of fostering an entrepreneurial mindset among students and creating an environment where innovation can flourish. Professor Rajagopal shared insights from IIT Madras's successful innovation ecosystem, highlighting best practices for nurturing startups and supporting student entrepreneurs. The lecture inspired students and faculty to think creatively about solving real-world problems and building sustainable businesses. This event is part of Riara University's ongoing commitment to becoming a hub of innovation in Kenya and Africa.",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/06/asd-3.jpg",
        link: "https://riarauniversity.ac.ke/riara-a-hub-of-innovations/",
        publishedDate: "Jun 2025",
        author: "School of Computing Sciences"
      },
      {
        id: "5",
        category: "Campus Development",
        title: "Riara University Commences Construction of New Campus at Konza Technopolis",
        subtitle: "Kshs 20 billion investment in state-of-the-art facilities",
        excerpt: "Riara University has commenced the construction of a new campus at Konza Technopolis, with an estimated investment of Kshs 20 billion.",
        content: "Riara University has commenced the construction of a new campus at Konza Technopolis, with an estimated investment of Kshs 20 billion. The new campus is expected to become the university's main campus, aligning with its vision to become a leading innovation and startup-driven university in Africa. The Konza Technopolis location positions Riara University at the heart of Kenya's technology and innovation hub, providing students with access to cutting-edge facilities and opportunities to collaborate with tech companies and startups. The new campus will feature modern classrooms, research laboratories, innovation centers, and student accommodation facilities designed to support the university's mission of nurturing innovators.",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/12/1231313-409x258.jpg",
        link: "#",
        publishedDate: "2025",
        author: "Campus Development"
      },
      {
        id: "6",
        category: "Technology",
        title: "Riara University Launches Cybersecurity Training Hub",
        subtitle: "ARU Hub strengthens Kenya's defense against cyber threats",
        excerpt: "The university launched the Acyberschool Riara University (ARU) Hub, a center dedicated to training professionals in cybersecurity.",
        content: "In December 2023, the university launched the Acyberschool Riara University (ARU) Hub, a center dedicated to training professionals in cybersecurity. This initiative aims to bolster the country's defense against increasing and sophisticated cyber threats. The ARU Hub provides comprehensive cybersecurity training programs, equipping professionals with the skills needed to protect digital infrastructure and data. The hub offers both short-term courses and long-term certification programs, making cybersecurity education accessible to a wide range of professionals. This initiative reflects Riara University's commitment to addressing critical technology challenges and contributing to Kenya's digital security landscape.",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/huawei-409x258.png",
        link: "#",
        publishedDate: "Dec 2023",
        author: "School of Computing Sciences"
      }
    ];

    this.educationPaths = [
      {
        id: "undergraduate",
        title: "Undergraduate Education",
        description: "Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise",
        imageUrl: "https://pub-9dae0f05d1fc4e96997fa47a670a3841.r2.dev/LIBRARY/VKCL6601.jpg",
        link: "/academics#undergraduate",
      },
      {
        id: "graduate",
        title: "Graduate Programs",
        description: "Unsurpassed opportunities to participate in the advancement of entire fields of knowledge",
        imageUrl: "https://pub-9dae0f05d1fc4e96997fa47a670a3841.r2.dev/GRADUATION%20DAY/VKCL9304.jpg",
        link: "/academics#graduate",
      },
      {
        id: "lifelong",
        title: "Lifelong Learning",
        description: "Continuing adult education, executive and professional programs, and programs for K-12 students",
        imageUrl: "https://pub-9dae0f05d1fc4e96997fa47a670a3841.r2.dev/IR/VKCL6671.jpg",
        link: "/academics#lifelong",
      }
    ];

    this.schools = [
      { id: "business", name: "School of Business", url: "https://sob.riarauniversity.ac.ke/" },
      { id: "education", name: "School of Education", url: "https://soe.riarauniversity.ac.ke/" },
      { id: "law", name: "Riara Law School", url: "https://law.riarauniversity.ac.ke/" },
      { id: "computing", name: "School of Computing Science", url: "https://scs.riarauniversity.ac.ke/" },
      { id: "international", name: "School of International Relations", url: "https://ird.riarauniversity.ac.ke/" },
      { id: "communication", name: "School of Communication and Journalism", url: "https://cmj.riarauniversity.ac.ke/" }
    ];

    this.researchStats = [
      { id: "1", value: "6,699", label: "Inventions created by federally funded Riara research" },
      { id: "2", value: "3,029", label: "Kenyan patents based on federally funded Riara research" },
      { id: "3", value: "400+", label: "Start-up companies founded based on federally funded research" },
      { id: "4", value: "350,000+", label: "Jobs created by companies from Riara research" },
      { id: "5", value: "kshs 94B", label: "Private investment in start-ups from Riara research" },
      { id: "6", value: "kshs 11T+", label: "Market value of top 30 companies founded by Riara alumni" }
    ];

    this.profiles = new Map([
      ["research", {
        id: "research-profile",
        name: "Prof. Gateru",
        title: "Vice Chancellor, Riara University",
        quote: "Excellence in research and innovation drives our commitment to advancing knowledge and transforming communities.",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2024/01/Prof.-Gateru-MGT-Page.jpg",
        link: "#"
      }],
      ["campus", {
        id: "campus-profile",
        name: "Riara University Students",
        title: "Active student community",
        quote: "At Riara, we foster a vibrant campus life where students engage in diverse activities, build lasting friendships, and develop skills beyond the classroom.",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      }],
      ["arts", {
        id: "arts-profile",
        name: "Prof. Wanja Tenambergen",
        title: "Deputy Vice Chancellor - Academic Affairs",
        quote: "Arts and culture enrich our academic environment, fostering creativity and critical thinking among our students.",
        imageUrl: "https://pub-9dae0f05d1fc4e96997fa47a670a3841.r2.dev/MEDIA%20%26%20JOURNALISM/VKCL6951.jpg",
        link: "#"
      }],
      ["law", {
        id: "law-profile",
        name: "Dr. Lando Welcome",
        title: "Dean, Riara Law School",
        quote: "Excellence in legal education and commitment to shaping the next generation of legal professionals.",
        imageUrl: "https://law.riarauniversity.ac.ke/wp-content/uploads/2025/04/Dr.-Lando-Welcome-1-1.jpg",
        link: "#"
      }],
      ["business", {
        id: "business-profile",
        name: "Dr. Opati Welcome",
        title: "Dean, School of Business",
        quote: "Empowering students to become innovative leaders and entrepreneurs who drive positive change in the business world.",
        imageUrl: "https://sob.riarauniversity.ac.ke/wp-content/uploads/2024/03/Dr.-Opati-Welcome-1-2-1.jpg",
        link: "#"
      }]
    ]);

    this.campusLifeSections = [
      {
        id: "student-life",
        title: "Student Life",
        description: "A residential campus with diverse housing, exceptional dining, and over 600 student organizations",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      },
      {
        id: "dialogue",
        title: "Constructive Dialogue",
        description: "Uplifting academic freedom and free speech; curiosity and critical inquiry; open, inclusive exchange of ideas",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      },
      {
        id: "wellness",
        title: "Recreation & Wellness",
        description: "State-of-the-art facilities and fitness programs to encourage movement and play",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      }
    ];

    this.artsSections = [
      {
        id: "interdisciplinary",
        title: "Interdisciplinary Scholarship",
        description: "Innovative programs center the arts in research and education and expand the role of art across academic disciplines",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      },
      {
        id: "museums",
        title: "Museums and Public Art",
        description: "Two world-class art museums and more than 80 outdoor installations, accessible to the public 365 days a year",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      },
      {
        id: "performance",
        title: "Live Performance",
        description: "Riara Live presents a wide range of performances by artists from around the world",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      }
    ];

    this.events = [
      {
        id: "1",
        type: "Exhibition",
        title: "Branner Library Monthly Book & Map Exhibit - Oceans: Indian Ocean",
        date: "Oct 24",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      },
      {
        id: "2",
        type: "Exhibition",
        title: "Spotlight on Special Collections",
        date: "Oct 24",
        time: "09:00 am EAT",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      },
      {
        id: "3",
        type: "Conference",
        title: "Teaching and Mentoring Academy's 8th Annual Education Day",
        date: "Oct 25",
        time: "08:30 am EAT",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      },
      {
        id: "4",
        type: "Performance",
        title: "Ensemble OH? x Riara Climate Week",
        date: "Oct 25",
        time: "07:30 pm EAT",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      },
      {
        id: "5",
        type: "Conference",
        title: "Riara, A hub of Innovations",
        date: "Jun 26",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "https://riarauniversity.ac.ke/riara-a-hub-of-innovations/"
      }
    ];

    this.careers = [
      {
        id: "c1",
        type: "Faculty",
        title: "ICT Senior Lecturer",
        date: "Open",
        time: "Full-time",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/02/ENQUIRY-FORM-WEBPAGE-4.jpg",
        link: "https://riarauniversity.ac.ke/wp-content/uploads/2025/05/ICT-Senior-Lecturer-Job-Opportunity-1-2.pdf",
        department: "School of Computing Sciences"
      },
      {
        id: "c2",
        type: "Faculty",
        title: "Computer Science Lecturer",
        date: "Open",
        time: "Full-time",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/02/ENQUIRY-FORM-WEBPAGE-4.jpg",
        link: "https://riarauniversity.ac.ke/wp-content/uploads/2025/10/ICT-Lecturer-Job-Opportunity.pdf",
        department: "School of Computing Sciences"
      },
      {
        id: "c3",
        type: "Faculty",
        title: "Lecturer - Department of International Relations & Diplomacy",
        date: "Open",
        time: "Full-time",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/02/ENQUIRY-FORM-WEBPAGE-4.jpg",
        link: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/IRD-Lecturer-Job-Opportunity.pdf",
        department: "School of International Relations & Diplomacy"
      },
      {
        id: "c4",
        type: "Faculty",
        title: "Senior Lecturer - Department of International Relations & Diplomacy",
        date: "Open",
        time: "Full-time",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/02/ENQUIRY-FORM-WEBPAGE-4.jpg",
        link: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/IRD-Senior-Lecturer-Job-Opportunity.pdf",
        department: "School of International Relations & Diplomacy"
      }
    ];

    this.healthcareSections = [
      {
        id: "mental-health",
        title: "Mental Health Support",
        description: "Access to professional counseling, therapy, and mental health awareness programs",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "/healthcare"
      },
      {
        id: "wellness-education",
        title: "Wellness Education",
        description: "Workshops, seminars, and resources on stress management, self-care, healthy relationships, and emotional resilience",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "/healthcare"
      },
      {
        id: "peer-support",
        title: "Peer Support Programs",
        description: "Safe spaces for students to connect, share, and support one another through student-led wellness initiatives",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "/healthcare"
      }
    ];

    this.athleticsSections = [
      {
        id: "championships",
        title: "Home of Champions",
        description: "Riara's 137 NCAA championships are the most for any university, a product of an unrivaled culture of excellence",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      },
      {
        id: "olympic",
        title: "Olympic Excellence",
        description: "The Cardinal has produced at least one medalist in every Olympics in which Kenya has competed since 1912",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      },
      {
        id: "impact",
        title: "Multidimensional Impact",
        description: "Riara student-athletes have achieved local, national, and global impact through community involvement and advocacy",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/11/Website-Cover-1.jpg",
        link: "#"
      }
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getNewsArticles(): Promise<NewsArticle[]> {
    // Transform image URLs before returning
    return transformImageUrls(this.newsArticles);
  }

  async getEducationPaths(): Promise<EducationPath[]> {
    return transformImageUrls(this.educationPaths);
  }

  async getSchools(): Promise<School[]> {
    // Schools don't have imageUrl, return as-is
    return this.schools;
  }

  async getResearchStats(): Promise<ResearchStat[]> {
    // Research stats don't have imageUrl, return as-is
    return this.researchStats;
  }

  async getProfile(type: string): Promise<Profile | undefined> {
    const profile = this.profiles.get(type);
    if (!profile) return undefined;
    // Transform image URL
    return {
      ...profile,
      imageUrl: profile.imageUrl ? getImageUrl(profile.imageUrl) : profile.imageUrl,
    };
  }

  async getCampusLifeSections(): Promise<ContentSection[]> {
    return transformImageUrls(this.campusLifeSections);
  }

  async getArtsSections(): Promise<ContentSection[]> {
    return transformImageUrls(this.artsSections);
  }

  async getEvents(): Promise<Event[]> {
    return transformImageUrls(this.events);
  }

  async getCareers(): Promise<Career[]> {
    return transformImageUrls(this.careers);
  }

  async getHealthcareSections(): Promise<ContentSection[]> {
    return transformImageUrls(this.healthcareSections);
  }

  async getAthleticsSections(): Promise<ContentSection[]> {
    return transformImageUrls(this.athleticsSections);
  }

  async getPartners(): Promise<PartnerCategory[]> {
    // For now, read from JSON file (will be moved to DB later)
    // This method signature allows easy migration to database
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    try {
      const publicPath = path.resolve(__dirname, "..", "client", "public", "api", "partners.json");
      const distPath = path.resolve(__dirname, "..", "dist", "public", "api", "partners.json");
      
      let filePath = publicPath;
      if (!fs.existsSync(publicPath) && fs.existsSync(distPath)) {
        filePath = distPath;
      }
      
      if (fs.existsSync(filePath)) {
        const fileContent = await fs.promises.readFile(filePath, "utf-8");
        const partners: PartnerCategory[] = JSON.parse(fileContent);
        
        // Transform image URLs for categories and partners
        return partners.map((category) => ({
          ...category,
          imageUrl: category.imageUrl ? getImageUrl(category.imageUrl) : category.imageUrl,
          partners: category.partners.map((partner) => ({
            ...partner,
            logoUrl: partner.logoUrl ? getImageUrl(partner.logoUrl) : partner.logoUrl,
          })),
        }));
      }
      
      return [];
    } catch (error) {
      console.error("Error loading partners:", error);
      return [];
    }
  }

  async getLeadership(): Promise<LeadershipMember[]> {
    // For now, read from JSON file (will be moved to DB later)
    // This method signature allows easy migration to database
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    try {
      const publicPath = path.resolve(__dirname, "..", "client", "public", "api", "leadership.json");
      const distPath = path.resolve(__dirname, "..", "dist", "public", "api", "leadership.json");
      
      console.log("[getLeadership] Attempting to load file...");
      console.log("[getLeadership] __dirname:", __dirname);
      console.log("[getLeadership] process.cwd():", process.cwd());
      console.log("[getLeadership] publicPath:", publicPath, "exists:", fs.existsSync(publicPath));
      console.log("[getLeadership] distPath:", distPath, "exists:", fs.existsSync(distPath));
      
      let filePath = publicPath;
      if (!fs.existsSync(publicPath) && fs.existsSync(distPath)) {
        filePath = distPath;
        console.log("[getLeadership] Using distPath:", filePath);
      } else if (fs.existsSync(publicPath)) {
        console.log("[getLeadership] Using publicPath:", filePath);
      }
      
      if (fs.existsSync(filePath)) {
        console.log("[getLeadership] Reading file from:", filePath);
        const fileContent = await fs.promises.readFile(filePath, "utf-8");
        const leadership: LeadershipMember[] = JSON.parse(fileContent);
        
        console.log("[getLeadership] Successfully parsed", leadership.length, "leadership members");
        
        // Transform image URLs
        return leadership.map((member) => ({
          ...member,
          imageUrl: member.imageUrl ? getImageUrl(member.imageUrl) : member.imageUrl,
        }));
      }
      
      console.error("[getLeadership] File not found at either path!");
      console.error("[getLeadership] publicPath:", publicPath, "exists:", fs.existsSync(publicPath));
      console.error("[getLeadership] distPath:", distPath, "exists:", fs.existsSync(distPath));
      return [];
    } catch (error) {
      console.error("[getLeadership] Error loading leadership:", error);
      if (error instanceof Error) {
        console.error("[getLeadership] Error details:", error.message);
        if (error.stack) {
          console.error("[getLeadership] Error stack:", error.stack);
        }
      }
      return [];
    }
  }
}

export const storage = new MemStorage();
