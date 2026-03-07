import type { Express } from "express";
import type { Server } from "http";
import { createContact } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.contacts.create.path, async (req, res) => {
    try {
      const input = api.contacts.create.input.parse(req.body);
      await createContact(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error('Internal server error in /api/contacts:', err);
      res.status(500).json({ message: 'Internal server error', error: err instanceof Error ? err.message : String(err) });
    }
  });

  return httpServer;
}
