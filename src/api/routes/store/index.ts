import { Router } from "express";
import { wrapHandler } from "@medusajs/medusa";
import {add,update} from "./subscribe-newsletter";
const pageRouter = Router();
export function attachStoreRoutes(storeRouter: Router) {
  storeRouter.use("/mailchimp", pageRouter);
  pageRouter.post("/subscribe", wrapHandler(add));
  pageRouter.put("/subscribe", wrapHandler(update));
}
