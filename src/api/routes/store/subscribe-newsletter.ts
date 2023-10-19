import { Request, Response } from "express";

export async function add(req: Request, res: Response) {
  const mailchimpService = req.scope.resolve("mailchimpService");

  try {
    await mailchimpService.subscribeNewsletterAdd(
      req.body.email,
      req.body.data || {}
    );

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function update(req: Request, res: Response) {
  const mailchimpService = req.scope.resolve("mailchimpService");

  try {
    await mailchimpService.subscribeNewsletterUpdate(
      req.body.email,
      req.body.data || {}
    );

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
