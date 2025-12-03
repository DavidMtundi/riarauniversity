import { type User, type InsertUser, type NewsArticle, type EducationPath, type School, type ResearchStat, type Profile, type Event, type ContentSection, type PartnerCategory, type LeadershipMember } from "@shared/schema";
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
  getCareers(): Promise<Event[]>;
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
  private careers: Event[] = [];
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
        category: "Research Spotlight",
        title: "Why research matters",
        subtitle: "Groundbreaking discoveries shaping the future",
        excerpt: "Discover the groundbreaking research happening at Riara and its impact on society, from medicine to technology.",
        content: "Discover the groundbreaking research happening at Riara and its impact on society, from medicine to technology. Our researchers are at the forefront of innovation, tackling some of the world's most pressing challenges. Through interdisciplinary collaboration and cutting-edge facilities, Riara continues to push the boundaries of knowledge and create solutions that benefit communities locally and globally. From developing sustainable technologies to advancing medical treatments, our research ecosystem fosters creativity and drives meaningful change.",
        imageUrl: "",
        link: "#",
        featured: true,
        publishedDate: "Nov 15, 2024",
        author: "Research Communications"
      },
      {
        id: "2",
        category: "Health & Medicine",
        title: "Essential questions for patients in the age of AI doctor visits",
        subtitle: "Navigating healthcare in the digital era",
        excerpt: "As artificial intelligence becomes more prevalent in healthcare, researchers explore critical considerations for patients.",
        content: "As artificial intelligence becomes more prevalent in healthcare, researchers explore critical considerations for patients. The integration of AI in medical consultations raises important questions about patient privacy, informed consent, and the human element in healthcare. Our medical school faculty are leading discussions on how to balance technological advancement with compassionate care. This research examines patient perspectives, ethical implications, and best practices for implementing AI tools in clinical settings while maintaining trust and quality of care.",
        imageUrl: "",
        link: "#",
        publishedDate: "Nov 12, 2024",
        author: "Medical School"
      },
      {
        id: "3",
        category: "Science & Engineering",
        title: "New observation method improves outlook for lithium metal battery",
        subtitle: "Breakthrough in battery technology research",
        excerpt: "Riara engineers develop innovative technique for analyzing battery performance at the molecular level.",
        content: "Riara engineers develop innovative technique for analyzing battery performance at the molecular level. This breakthrough allows researchers to observe battery degradation in real-time, leading to more efficient and longer-lasting energy storage solutions. The new method uses advanced imaging techniques combined with machine learning algorithms to predict battery lifespan and optimize performance. This research has significant implications for electric vehicles, renewable energy storage, and portable electronics, potentially revolutionizing how we store and use energy.",
        imageUrl: "",
        link: "#",
        publishedDate: "Nov 10, 2024",
        author: "Engineering Department"
      },
      {
        id: "4",
        category: "Health & Medicine",
        title: "Eye prosthesis restores sight to patients with incurable vision loss",
        subtitle: "Revolutionary medical device brings hope",
        excerpt: "Revolutionary device offers hope to patients with macular degeneration and other vision disorders.",
        content: "Revolutionary device offers hope to patients with macular degeneration and other vision disorders. Developed through collaboration between our medical school and engineering department, this innovative prosthesis uses advanced neural interfaces to restore partial vision. Clinical trials have shown promising results, with patients reporting improved quality of life and increased independence. The device represents a significant advancement in neuroprosthetics and opens new possibilities for treating previously incurable conditions.",
        imageUrl: "",
        link: "#",
        publishedDate: "Nov 8, 2024",
        author: "Medical Research Team"
      },
      {
        id: "5",
        category: "Science & Engineering",
        title: "Common crystal proves ideal for low-temperature light technology",
        subtitle: "Quantum computing applications expand",
        excerpt: "Research on strontium titanate opens new possibilities for quantum computing and cryogenic photonics.",
        content: "Research on strontium titanate opens new possibilities for quantum computing and cryogenic photonics. Our physics department has discovered unique properties in this common crystal that make it ideal for low-temperature applications. The findings could lead to more efficient quantum computers and advanced photonic devices. This research demonstrates how fundamental materials science can unlock practical applications in cutting-edge technology fields.",
        imageUrl: "",
        link: "#",
        publishedDate: "Nov 5, 2024",
        author: "Physics Department"
      },
      {
        id: "6",
        category: "Awards",
        title: "Riara Professor David Kamau receives MacArthur Fellowship",
        subtitle: "Prestigious recognition for environmental innovation",
        excerpt: "Recognition for innovative work in environmental engineering and sustainable water treatment.",
        content: "Recognition for innovative work in environmental engineering and sustainable water treatment. Professor Kamau's research has developed cost-effective solutions for providing clean water to underserved communities. His work combines traditional knowledge with modern engineering principles, creating sustainable systems that can be implemented in resource-limited settings. The MacArthur Fellowship recognizes his commitment to solving real-world problems and his innovative approach to environmental challenges.",
        imageUrl: "",
        link: "#",
        publishedDate: "Nov 1, 2024",
        author: "University Communications"
      }
    ];

    this.educationPaths = [
      {
        id: "undergraduate",
        title: "Undergraduate Education",
        description: "Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise",
        imageUrl: "",
        link: "#"
      },
      {
        id: "graduate",
        title: "Graduate Education",
        description: "Unsurpassed opportunities to participate in the advancement of entire fields of knowledge",
        imageUrl: "",
        link: "#"
      },
      {
        id: "lifelong",
        title: "Lifelong Learning",
        description: "Continuing adult education, executive and professional programs, and programs for K-12 students",
        imageUrl: "",
        link: "#"
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
      { id: "5", value: "$94B", label: "Private investment in start-ups from Riara research" },
      { id: "6", value: "$11T+", label: "Market value of top 30 companies founded by Riara alumni" }
    ];

    this.profiles = new Map([
      ["research", {
        id: "research-profile",
        name: "Dr. James Kariuki",
        title: "Assistant Professor of Mechanical Engineering",
        quote: "The truly impactful technologies are always based on the condition that you can freely explore.",
        imageUrl: "",
        link: "#"
      }],
      ["campus", {
        id: "campus-profile",
        name: "Amani Wanjiru, '25",
        title: "Design major and three-time Innovations champion",
        quote: "There's a lot to question – that's one of the most important things I'll take with me from my Riara experience.",
        imageUrl: "",
        link: "#"
      }],
      ["arts", {
        id: "arts-profile",
        name: "Grace Muthoni, '22",
        title: "Graduated with a bachelor's degree in human biology and a minor in art history",
        quote: "Art is an outlet and a starting point for me, for what I have to say.",
        imageUrl: "",
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
        imageUrl: "",
        link: "#"
      },
      {
        id: "dialogue",
        title: "Constructive Dialogue",
        description: "Uplifting academic freedom and free speech; curiosity and critical inquiry; open, inclusive exchange of ideas",
        imageUrl: "",
        link: "#"
      },
      {
        id: "wellness",
        title: "Recreation & Wellness",
        description: "State-of-the-art facilities and fitness programs to encourage movement and play",
        imageUrl: "",
        link: "#"
      }
    ];

    this.artsSections = [
      {
        id: "interdisciplinary",
        title: "Interdisciplinary Scholarship",
        description: "Innovative programs center the arts in research and education and expand the role of art across academic disciplines",
        imageUrl: "",
        link: "#"
      },
      {
        id: "museums",
        title: "Museums and Public Art",
        description: "Two world-class art museums and more than 80 outdoor installations, accessible to the public 365 days a year",
        imageUrl: "",
        link: "#"
      },
      {
        id: "performance",
        title: "Live Performance",
        description: "Riara Live presents a wide range of performances by artists from around the world",
        imageUrl: "",
        link: "#"
      }
    ];

    this.events = [
      {
        id: "1",
        type: "Exhibition",
        title: "Branner Library Monthly Book & Map Exhibit - Oceans: Indian Ocean",
        date: "Oct 24",
        imageUrl: "",
        link: "#"
      },
      {
        id: "2",
        type: "Exhibition",
        title: "Spotlight on Special Collections",
        date: "Oct 24",
        time: "09:00 am EAT",
        imageUrl: "",
        link: "#"
      },
      {
        id: "3",
        type: "Conference",
        title: "Teaching and Mentoring Academy's 8th Annual Education Day",
        date: "Oct 25",
        time: "08:30 am EAT",
        imageUrl: "",
        link: "#"
      },
      {
        id: "4",
        type: "Performance",
        title: "Ensemble OH? x Riara Climate Week",
        date: "Oct 25",
        time: "07:30 pm EAT",
        imageUrl: "",
        link: "#"
      },
      {
        id: "5",
        type: "Conference",
        title: "Riara, A hub of Innovations",
        date: "Jun 26",
        imageUrl: "https://riarauniversity.ac.ke/wp-content/uploads/2025/06/zxcxzczxc.jpg",
        link: "https://riarauniversity.ac.ke/riara-a-hub-of-innovations/"
      }
    ];

    this.careers = [
      {
        id: "c1",
        type: "Faculty",
        title: "Assistant Professor of Computer Science",
        date: "Apply by Nov 30",
        time: "Full-time",
        imageUrl: "",
        link: "#"
      },
      {
        id: "c2",
        type: "Research",
        title: "Senior Research Scientist, Precision Health",
        date: "Apply by Dec 5",
        time: "Full-time",
        imageUrl: "",
        link: "#"
      },
      {
        id: "c3",
        type: "Administration",
        title: "Director of Student Success Programs",
        date: "Apply by Dec 12",
        time: "Full-time",
        imageUrl: "",
        link: "#"
      },
      {
        id: "c4",
        type: "Staff",
        title: "Campus Sustainability Project Manager",
        date: "Apply by Dec 18",
        time: "Contract",
        imageUrl: "",
        link: "#"
      }
    ];

    this.healthcareSections = [
      {
        id: "medicine",
        title: "Riara Medicine",
        description: "Leading a worldwide revolution in precision health through biomedical research, education, and clinical enterprises",
        imageUrl: "",
        link: "#"
      },
      {
        id: "health-care",
        title: "Riara Health Care",
        description: "Leveraging expertise and advanced technology to deliver unparalleled care for each patient's unique needs",
        imageUrl: "",
        link: "#"
      },
      {
        id: "childrens",
        title: "Riara Children's Health",
        description: "The only health care network in Nairobi exclusively dedicated to pediatric and obstetric care",
        imageUrl: "",
        link: "#"
      }
    ];

    this.athleticsSections = [
      {
        id: "championships",
        title: "Home of Champions",
        description: "Riara's 137 NCAA championships are the most for any university, a product of an unrivaled culture of excellence",
        imageUrl: "",
        link: "#"
      },
      {
        id: "olympic",
        title: "Olympic Excellence",
        description: "The Cardinal has produced at least one medalist in every Olympics in which Kenya has competed since 1912",
        imageUrl: "",
        link: "#"
      },
      {
        id: "impact",
        title: "Multidimensional Impact",
        description: "Riara student-athletes have achieved local, national, and global impact through community involvement and advocacy",
        imageUrl: "",
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

  async getCareers(): Promise<Event[]> {
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
