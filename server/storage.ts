import { db } from "./db";
import { contacts, type InsertContact, type ContactResponse } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<ContactResponse>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<ContactResponse> {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }
}

export const storage = new DatabaseStorage();
