import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface NewsArticle {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content?: string; // Full article content for read more functionality
  imageUrl: string;
  link: string;
  featured?: boolean;
  publishedDate?: string;
  author?: string;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  quote: string;
  imageUrl: string;
  link: string;
}

export interface Event {
  id: string;
  type: string;
  title: string;
  date: string;
  time?: string;
  imageUrl: string;
  link: string;
}

export interface Career {
  id: string;
  type: string; // Faculty, Research, Administration, Staff
  title: string;
  date: string; // Application deadline
  time?: string; // Full-time, Contract, Part-time, Temporary
  imageUrl: string;
  link: string;
  department?: string;
  location?: string;
  description?: string;
}

export interface School {
  id: string;
  name: string;
  url: string;
}

export interface EducationPath {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface ResearchStat {
  id: string;
  value: string;
  label: string;
}

export interface ContentSection {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  website: string;
}

export interface PartnerCategory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  partners: Partner[];
}

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  role: string; // "vc" | "deputy-vc" | "dean" | "director" | "registrar" | "finance" | "academic" | etc.
  bio?: string;
  email?: string;
  phone?: string;
  office?: string;
  imageUrl: string;
  department?: string; // For deans, which school
  order: number; // For sorting/display order
  link?: string; // Optional link to full profile page
}
