import { RequestHandler, Response } from "express";

exports.requireLogin = (req: Request, res: Response, next: () => any) => {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.redirect("/login");
  }
};
