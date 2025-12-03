import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/news", async (_req, res) => {
    const articles = await storage.getNewsArticles();
    res.json(articles);
  });

  app.get("/api/education-paths", async (_req, res) => {
    const paths = await storage.getEducationPaths();
    res.json(paths);
  });

  app.get("/api/schools", async (_req, res) => {
    const schools = await storage.getSchools();
    res.json(schools);
  });

  app.get("/api/research-stats", async (_req, res) => {
    const stats = await storage.getResearchStats();
    res.json(stats);
  });

  app.get("/api/profiles/:type", async (req, res) => {
    const profile = await storage.getProfile(req.params.type);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json(profile);
  });

  app.get("/api/campus-life", async (_req, res) => {
    const sections = await storage.getCampusLifeSections();
    res.json(sections);
  });

  app.get("/api/arts", async (_req, res) => {
    const sections = await storage.getArtsSections();
    res.json(sections);
  });

  app.get("/api/events", async (_req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.get("/api/careers", async (_req, res) => {
    const careers = await storage.getCareers();
    res.json(careers);
  });

  app.get("/api/healthcare", async (_req, res) => {
    const sections = await storage.getHealthcareSections();
    res.json(sections);
  });

  app.get("/api/search", async (req, res) => {
    const query = (req.query.q as string) || "";
    if (!query.trim()) {
      return res.json([]);
    }

    const searchTerm = query.toLowerCase().trim();
    const results: any[] = [];

    try {
      // Search through all content types
      const [news, events, careers, educationPaths, schools, campusLife, arts, healthcare, athletics] = await Promise.all([
        storage.getNewsArticles(),
        storage.getEvents(),
        storage.getCareers(),
        storage.getEducationPaths(),
        storage.getSchools(),
        storage.getCampusLifeSections(),
        storage.getArtsSections(),
        storage.getHealthcareSections(),
        storage.getAthleticsSections(),
      ]);

      // Search news articles
      news.forEach((article) => {
        const content = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            id: `news-${article.id}`,
            title: article.title,
            description: article.excerpt,
            type: "news",
            url: article.link,
            category: article.category,
            content: article.excerpt,
            pageUrl: "/news",
            pageTitle: "News",
          });
        }
      });

      // Search events
      events.forEach((event) => {
        const content = `${event.title} ${event.type} ${event.date} ${event.time || ""}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            id: `event-${event.id}`,
            title: event.title,
            description: `${event.type} - ${event.date}`,
            type: "event",
            url: event.link,
            category: event.type,
            date: event.date,
            time: event.time,
            content: `${event.type} event on ${event.date}`,
            pageUrl: "/events",
            pageTitle: "Events",
          });
        }
      });

      // Search careers
      careers.forEach((career) => {
        const content = `${career.title} ${career.type} ${career.date} ${career.time || ""}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            id: `career-${career.id}`,
            title: career.title,
            description: `${career.type} - ${career.date}`,
            type: "career",
            url: career.link,
            category: career.type,
            date: career.date,
            time: career.time,
            content: `${career.type} position: ${career.title}`,
            pageUrl: "/careers",
            pageTitle: "Careers",
          });
        }
      });

      // Search education paths
      educationPaths.forEach((path) => {
        const content = `${path.title} ${path.description}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            id: `academic-${path.id}`,
            title: path.title,
            description: path.description,
            type: "academic",
            url: path.link,
            content: path.description,
            pageUrl: "/academics",
            pageTitle: "Academics",
          });
        }
      });

      // Search schools
      schools.forEach((school) => {
        const content = school.name.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            id: `school-${school.id}`,
            title: school.name,
            description: "School",
            type: "school",
            url: school.url,
            content: `School: ${school.name}`,
            pageUrl: "/academics",
            pageTitle: "Academics",
          });
        }
      });

      // Search campus life
      campusLife.forEach((section) => {
        const content = `${section.title} ${section.description}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            id: `campus-${section.id}`,
            title: section.title,
            description: section.description,
            type: "campus-life",
            url: section.link,
            content: section.description,
            pageUrl: "/campus-life",
            pageTitle: "Student Life",
          });
        }
      });

      // Search arts
      arts.forEach((section) => {
        const content = `${section.title} ${section.description}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            id: `arts-${section.id}`,
            title: section.title,
            description: section.description,
            type: "arts",
            url: section.link,
            content: section.description,
            pageUrl: "/arts",
            pageTitle: "Arts",
          });
        }
      });

      // Search healthcare
      healthcare.forEach((section) => {
        const content = `${section.title} ${section.description}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            id: `healthcare-${section.id}`,
            title: section.title,
            description: section.description,
            type: "healthcare",
            url: section.link,
            content: section.description,
            pageUrl: "/healthcare",
            pageTitle: "Health Care",
          });
        }
      });

      // Search athletics
      athletics.forEach((section) => {
        const content = `${section.title} ${section.description}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            id: `athletics-${section.id}`,
            title: section.title,
            description: section.description,
            type: "athletics",
            url: section.link,
            content: section.description,
            pageUrl: "/athletics",
            pageTitle: "Athletics",
          });
        }
      });

      // Add static pages
      const staticPages = [
        { id: "academics", title: "Academics", description: "Undergraduate and graduate programs", url: "/academics", content: "Academics programs undergraduate graduate education" },
        { id: "research", title: "Research", description: "Research centers and initiatives", url: "/research", content: "Research centers initiatives innovation" },
        { id: "admission", title: "Admission", description: "Apply to Riara University", url: "/admission", content: "Admission apply application enrollment" },
        { id: "campus-life", title: "Student Life", description: "Campus activities and student resources", url: "/campus-life", content: "Student life campus activities resources" },
        { id: "healthcare", title: "Health Care", description: "Health services and resources", url: "/healthcare", content: "Health care services medical" },
        { id: "athletics", title: "Athletics", description: "Sports and athletic programs", url: "/athletics", content: "Athletics sports programs" },
        { id: "careers", title: "Careers", description: "Job opportunities and career services", url: "/careers", content: "Careers jobs employment opportunities" },
        { id: "news", title: "News", description: "Latest university news and updates", url: "/news", content: "News updates announcements" },
        { id: "events", title: "Events", description: "Upcoming events and activities", url: "/events", content: "Events activities upcoming" },
        { id: "about", title: "About", description: "About Riara University", url: "/about", content: "About Riara University information" },
        { id: "partners", title: "Partners", description: "University partners and collaborations", url: "/partners", content: "Partners collaborations" },
      ];

      staticPages.forEach((page) => {
        const content = `${page.title} ${page.description} ${page.content}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            id: `page-${page.id}`,
            title: page.title,
            description: page.description,
            type: "page",
            url: page.url,
            content: page.content,
            pageUrl: page.url,
            pageTitle: page.title,
          });
        }
      });

      // Sort by relevance (simple scoring)
      const scoredResults = results.map((result) => {
        const titleLower = result.title.toLowerCase();
        const descLower = result.description.toLowerCase();
        const contentLower = result.content?.toLowerCase() || "";
        let score = 0;

        if (titleLower === searchTerm) score += 100;
        else if (titleLower.startsWith(searchTerm)) score += 50;
        else if (titleLower.includes(searchTerm)) score += 30;

        if (descLower.includes(searchTerm)) score += 10;
        if (contentLower.includes(searchTerm)) score += 5;

        return { ...result, relevance: score };
      });

      const sortedResults = scoredResults
        .sort((a, b) => (b.relevance || 0) - (a.relevance || 0))
        .slice(0, 50);

      res.json(sortedResults);
    } catch (error) {
      console.error("Search error:", error);
      res.status(500).json({ error: "Search failed" });
    }
  });

  app.get("/api/athletics", async (_req, res) => {
    const sections = await storage.getAthleticsSections();
    res.json(sections);
  });

  app.get("/api/partners", async (_req, res) => {
    try {
      const partners = await storage.getPartners();
      res.json(partners);
    } catch (error) {
      console.error("Error loading partners:", error);
      res.status(500).json({ error: "Failed to load partners data" });
    }
  });

  app.get("/api/leadership", async (_req, res) => {
    try {
      const leadership = await storage.getLeadership();
      if (leadership.length === 0) {
        console.warn("Warning: No leadership data loaded. Check if leadership.json exists.");
      }
      res.json(leadership);
    } catch (error) {
      console.error("Error in /api/leadership endpoint:", error);
      if (error instanceof Error) {
        console.error("Error details:", error.message, error.stack);
      }
      res.status(500).json({ error: "Failed to load leadership data", details: error instanceof Error ? error.message : String(error) });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
