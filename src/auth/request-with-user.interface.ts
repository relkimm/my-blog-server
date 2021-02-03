import { Request } from "express";
import { User } from "src/user/entity/user.entity";

export interface RequestWithUser extends Request {
  user: User;
}