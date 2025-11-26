/**
 * Memory-based Repository Implementations
 * These can be easily replaced with database implementations
 */

import type {
  NewsArticle,
  Event,
  EducationPath,
  School,
  ResearchStat,
  Profile,
  ContentSection,
  PartnerCategory,
} from "@shared/schema";
import type {
  INewsRepository,
  IEventsRepository,
  IEducationRepository,
  ISchoolsRepository,
  IProfilesRepository,
  IContentSectionsRepository,
  IResearchStatsRepository,
} from "./ContentRepository";
import { transformImageUrls } from "./ContentRepository";

import { randomUUID } from "crypto";

/**
 * Base Memory Repository Implementation
 */
abstract class MemoryRepository<T extends { id: string }> {
  protected items: Map<string, T> = new Map();

  async findAll(): Promise<T[]> {
    return Array.from(this.items.values());
  }

  async findById(id: string): Promise<T | undefined> {
    return this.items.get(id);
  }

  async create(item: Omit<T, "id">): Promise<T> {
    const id = randomUUID();
    const newItem = { ...item, id } as T;
    this.items.set(id, newItem);
    return newItem;
  }

  async update(id: string, item: Partial<T>): Promise<T | undefined> {
    const existing = this.items.get(id);
    if (!existing) return undefined;
    const updated = { ...existing, ...item } as T;
    this.items.set(id, updated);
    return updated;
  }

  async delete(id: string): Promise<boolean> {
    return this.items.delete(id);
  }

  protected searchItems(items: T[], query: string, searchFields: (keyof T)[]): T[] {
    const lowerQuery = query.toLowerCase();
    return items.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        return value && String(value).toLowerCase().includes(lowerQuery);
      })
    );
  }
}

/**
 * News Articles Repository - Memory Implementation
 */
export class MemoryNewsRepository extends MemoryRepository<NewsArticle> implements INewsRepository {
  constructor(initialData: NewsArticle[] = []) {
    super();
    initialData.forEach((article) => this.items.set(article.id, article));
  }

  async findFeatured(): Promise<NewsArticle[]> {
    return Array.from(this.items.values()).filter((article) => article.featured);
  }

  async findByCategory(category: string): Promise<NewsArticle[]> {
    return Array.from(this.items.values()).filter(
      (article) => article.category.toLowerCase() === category.toLowerCase()
    );
  }

  async search(query: string, limit = 20): Promise<NewsArticle[]> {
    const results = this.searchItems(Array.from(this.items.values()), query, [
      "title",
      "excerpt",
      "category",
    ]);
    return results.slice(0, limit);
  }
}

/**
 * Events Repository - Memory Implementation
 */
export class MemoryEventsRepository extends MemoryRepository<Event> implements IEventsRepository {
  constructor(initialData: Event[] = []) {
    super();
    initialData.forEach((event) => this.items.set(event.id, event));
  }

  async findUpcoming(limit = 10): Promise<Event[]> {
    // Simple implementation - in DB would sort by date
    return Array.from(this.items.values()).slice(0, limit);
  }

  async findByType(type: string): Promise<Event[]> {
    return Array.from(this.items.values()).filter(
      (event) => event.type.toLowerCase() === type.toLowerCase()
    );
  }

  async findByDateRange(startDate: string, endDate: string): Promise<Event[]> {
    // Simple implementation - in DB would use proper date comparison
    return Array.from(this.items.values()).filter((event) => {
      // This is a simplified check - real implementation would parse dates
      return event.date >= startDate && event.date <= endDate;
    });
  }

  async search(query: string, limit = 20): Promise<Event[]> {
    const results = this.searchItems(Array.from(this.items.values()), query, [
      "title",
      "type",
      "date",
    ]);
    return results.slice(0, limit);
  }
}

/**
 * Education Paths Repository - Memory Implementation
 */
export class MemoryEducationRepository
  extends MemoryRepository<EducationPath>
  implements IEducationRepository
{
  constructor(initialData: EducationPath[] = []) {
    super();
    initialData.forEach((path) => this.items.set(path.id, path));
  }

  async findByType(type: string): Promise<EducationPath[]> {
    // Type could be "undergraduate", "graduate", "lifelong", etc.
    return Array.from(this.items.values()).filter((path) =>
      path.id.toLowerCase().includes(type.toLowerCase())
    );
  }
}

/**
 * Schools Repository - Memory Implementation
 */
export class MemorySchoolsRepository extends MemoryRepository<School> implements ISchoolsRepository {
  constructor(initialData: School[] = []) {
    super();
    initialData.forEach((school) => this.items.set(school.id, school));
  }

  async findByName(name: string): Promise<School | undefined> {
    return Array.from(this.items.values()).find(
      (school) => school.name.toLowerCase() === name.toLowerCase()
    );
  }
}

/**
 * Profiles Repository - Memory Implementation
 */
export class MemoryProfilesRepository extends MemoryRepository<Profile> implements IProfilesRepository {
  constructor(initialData: Profile[] = []) {
    super();
    initialData.forEach((profile) => this.items.set(profile.id, profile));
  }

  async findByType(type: string): Promise<Profile | undefined> {
    // Type maps to profile id (e.g., "research" -> "research-profile")
    return Array.from(this.items.values()).find((profile) =>
      profile.id.toLowerCase().includes(type.toLowerCase())
    );
  }
}

/**
 * Content Sections Repository - Memory Implementation
 */
export class MemoryContentSectionsRepository
  extends MemoryRepository<ContentSection>
  implements IContentSectionsRepository
{
  constructor(initialData: ContentSection[] = []) {
    super();
    initialData.forEach((section) => this.items.set(section.id, section));
  }

  async findByCategory(category: string): Promise<ContentSection[]> {
    // Category could be "campus-life", "arts", "healthcare", "athletics"
    return Array.from(this.items.values()).filter((section) =>
      section.id.toLowerCase().includes(category.toLowerCase())
    );
  }

  async search(query: string, limit = 20): Promise<ContentSection[]> {
    const results = this.searchItems(Array.from(this.items.values()), query, [
      "title",
      "description",
    ]);
    return results.slice(0, limit);
  }
}

/**
 * Research Stats Repository - Memory Implementation
 */
export class MemoryResearchStatsRepository
  extends MemoryRepository<ResearchStat>
  implements IResearchStatsRepository
{
  constructor(initialData: ResearchStat[] = []) {
    super();
    initialData.forEach((stat) => this.items.set(stat.id, stat));
  }
}

/**
 * Partners Repository - Memory Implementation
 */
export class MemoryPartnersRepository extends MemoryRepository<PartnerCategory> {
  constructor(initialData: PartnerCategory[] = []) {
    super();
    initialData.forEach((category) => this.items.set(category.id, category));
  }

  async findAll(): Promise<PartnerCategory[]> {
    const categories = await super.findAll();
    // Transform image URLs for categories and their partners
    return categories.map((category) => ({
      ...category,
      imageUrl: category.imageUrl || "",
      partners: category.partners.map((partner) => ({
        ...partner,
        logoUrl: partner.logoUrl || "",
      })),
    }));
  }

  async findByCategory(categoryId: string): Promise<PartnerCategory | undefined> {
    return this.items.get(categoryId);
  }
}

