import type { InsertContact } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function createContact(contact: InsertContact): Promise<{ success: boolean }> {
  try {
    await sendContactEmail(contact);
    return { success: true };
  } catch (err) {
    console.error('Error in createContact:', err);
    throw err;
  }
}
