import express, { Request, Response } from "express";
import { requireAuth, validateRequest } from "@thticketsms/common";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/api/orders",
  requireAuth,
  [
    body("ticketId")
      .not()
      .isEmpty()
      .isMongoId()
      .withMessage("Ticket ID is required"),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    res.send({});
  },
);

export { router as newOrderRouter };
