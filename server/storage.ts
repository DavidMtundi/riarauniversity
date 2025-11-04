import { type User, type InsertUser, type NewsArticle, type EducationPath, type School, type ResearchStat, type Profile, type Event, type ContentSection } from "@shared/schema";
import { randomUUID } from "crypto";

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
  getHealthcareSections(): Promise<ContentSection[]>;
  getAthleticsSections(): Promise<ContentSection[]>;
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
        excerpt: "Discover the groundbreaking research happening at Riara and its impact on society, from medicine to technology.",
        imageUrl: "",
        link: "#",
        featured: true
      },
      {
        id: "2",
        category: "Health & Medicine",
        title: "Essential questions for patients in the age of AI doctor visits",
        excerpt: "As artificial intelligence becomes more prevalent in healthcare, researchers explore critical considerations for patients.",
        imageUrl: "",
        link: "#"
      },
      {
        id: "3",
        category: "Science & Engineering",
        title: "New observation method improves outlook for lithium metal battery",
        excerpt: "Riara engineers develop innovative technique for analyzing battery performance at the molecular level.",
        imageUrl: "",
        link: "#"
      },
      {
        id: "4",
        category: "Health & Medicine",
        title: "Eye prosthesis restores sight to patients with incurable vision loss",
        excerpt: "Revolutionary device offers hope to patients with macular degeneration and other vision disorders.",
        imageUrl: "",
        link: "#"
      },
      {
        id: "5",
        category: "Science & Engineering",
        title: "Common crystal proves ideal for low-temperature light technology",
        excerpt: "Research on strontium titanate opens new possibilities for quantum computing and cryogenic photonics.",
        imageUrl: "",
        link: "#"
      },
      {
        id: "6",
        category: "Awards",
        title: "Riara Professor William Tarpeh receives MacArthur Fellowship",
        excerpt: "Recognition for innovative work in environmental engineering and sustainable water treatment.",
        imageUrl: "",
        link: "#"
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
      { id: "business", name: "Business", url: "#" },
      { id: "education", name: "Education", url: "#" },
      { id: "engineering", name: "Engineering", url: "#" },
      { id: "humanities", name: "Humanities & Sciences", url: "#" },
      { id: "law", name: "Law", url: "#" },
      { id: "medicine", name: "Medicine", url: "#" },
      { id: "sustainability", name: "Sustainability", url: "#" }
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
        name: "Renee Zhao",
        title: "Assistant Professor of Mechanical Engineering",
        quote: "The truly impactful technologies are always based on the condition that you can freely explore.",
        imageUrl: "",
        link: "#"
      }],
      ["campus", {
        id: "campus-profile",
        name: "Khoi Young, '25",
        title: "Design major and three-time NCAA gymnastics champion",
        quote: "There's a lot to question – that's one of the most important things I'll take with me from my Riara experience.",
        imageUrl: "",
        link: "#"
      }],
      ["arts", {
        id: "arts-profile",
        name: "Helena Zhang, '22",
        title: "Graduated with a bachelor's degree in human biology and a minor in art history",
        quote: "Art is an outlet and a starting point for me, for what I have to say.",
        imageUrl: "",
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
    return this.newsArticles;
  }

  async getEducationPaths(): Promise<EducationPath[]> {
    return this.educationPaths;
  }

  async getSchools(): Promise<School[]> {
    return this.schools;
  }

  async getResearchStats(): Promise<ResearchStat[]> {
    return this.researchStats;
  }

  async getProfile(type: string): Promise<Profile | undefined> {
    return this.profiles.get(type);
  }

  async getCampusLifeSections(): Promise<ContentSection[]> {
    return this.campusLifeSections;
  }

  async getArtsSections(): Promise<ContentSection[]> {
    return this.artsSections;
  }

  async getEvents(): Promise<Event[]> {
    return this.events;
  }

  async getHealthcareSections(): Promise<ContentSection[]> {
    return this.healthcareSections;
  }

  async getAthleticsSections(): Promise<ContentSection[]> {
    return this.athleticsSections;
  }
}

export const storage = new MemStorage();
