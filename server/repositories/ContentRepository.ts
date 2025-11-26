/**
 * Content Repository
 * Handles all content-related data operations
 * Can be easily swapped between memory and database implementations
 */

import type { NewsArticle, Event, EducationPath, School, ResearchStat, Profile, ContentSection } from "@shared/schema";
import type { BaseRepository, SearchableRepository } from "./BaseRepository";
import { getImageUrl } from "../config";

/**
 * Transform image URLs in content items
 */
export function transformImageUrls<T extends { imageUrl?: string }>(
  items: T[],
  baseUrl?: string
): T[] {
  return items.map(item => ({
    ...item,
    imageUrl: item.imageUrl ? getImageUrl(item.imageUrl, baseUrl) : item.imageUrl,
  }));
}

/**
 * News Articles Repository Interface
 */
export interface INewsRepository extends SearchableRepository<NewsArticle> {
  findFeatured(): Promise<NewsArticle[]>;
  findByCategory(category: string): Promise<NewsArticle[]>;
}

/**
 * Events Repository Interface
 */
export interface IEventsRepository extends SearchableRepository<Event> {
  findUpcoming(limit?: number): Promise<Event[]>;
  findByType(type: string): Promise<Event[]>;
  findByDateRange(startDate: string, endDate: string): Promise<Event[]>;
}

/**
 * Education Paths Repository Interface
 */
export interface IEducationRepository extends BaseRepository<EducationPath> {
  findByType(type: string): Promise<EducationPath[]>;
}

/**
 * Schools Repository Interface
 */
export interface ISchoolsRepository extends BaseRepository<School> {
  findByName(name: string): Promise<School | undefined>;
}

/**
 * Profiles Repository Interface
 */
export interface IProfilesRepository extends BaseRepository<Profile> {
  findByType(type: string): Promise<Profile | undefined>;
}

/**
 * Content Sections Repository Interface
 */
export interface IContentSectionsRepository extends SearchableRepository<ContentSection> {
  findByCategory(category: string): Promise<ContentSection[]>;
}

/**
 * Research Stats Repository Interface
 */
export interface IResearchStatsRepository extends BaseRepository<ResearchStat> {
  // No additional methods needed for now
}

