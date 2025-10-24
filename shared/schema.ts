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
  excerpt: string;
  imageUrl: string;
  link: string;
  featured?: boolean;
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
