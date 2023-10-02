import { Request, Response, response } from "express";
import * as authService from "../services/auth.service";
import * as codeService from "../services/code.service";
import { User } from "../interfaces/user";
import { company } from "../interfaces/company";
export const loginUser = async (req: Request, res: Response) => {
  try {
    let response = await authService.loginUser(req.body);
    res.send(response);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

export const signUpUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;

    const response = await authService.signUpUser(user);
    res.json(response);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

export const loginCompany = async (req: Request, res: Response) => {
  try {
    const company: company = req.body;
    let response = await authService.loginCompany(company);
    res.send(response);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

export const signUpCompany = async (req: Request, res: Response) => {
  try {
    const company: company = req.body;

    const response = await authService.signUpCompany(company);
    res.json(response);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

export const activateUser = async (req: Request, res: Response) => {
  try {
    const { username, code } = req.query;
    if (!username || !code) throw new Error("username and code are required");
    if (typeof username !== "string") {
      throw new Error("invalid username");
    }
    if (typeof code !== "string") {
      throw new Error("invalid code");
    }

    const isValid = await codeService.validateCode(username, code);
    if (!isValid) throw new Error("code is invalid");
    //update active to true
    const response = await authService.activeUser(username);
    res.json(response);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { username, code, password } = req.query;
    if (!username || !code || !password)
      throw new Error("username and code are required");
    if (typeof username !== "string") {
      throw new Error("invalid username");
    }
    if (typeof code !== "string") {
      throw new Error("invalid code");
    }
    if (typeof password !== "string") {
      throw new Error("invalid password");
    }

    const isValid = await codeService.validateCode(username, code);
    if (!isValid) throw new Error("code is invalid");
    //update active to true

    const response = await authService.changePassword(username, password);
    res.json(response);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

export const generateCode = async (req: Request, res: Response) => {
  try {
    const { username } = req.query;
    if (!username) throw new Error("username is required");
    if (typeof username !== "string") {
      throw new Error("invalid username");
    }
    await codeService.sendCode(username);
    const response = { msg: "code sent successfully" };

    res.json(response);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};

//deprecated
export const varifies = async (req: Request, res: Response) => {
  try {
    const token: string = req.body.token;
    const response = await authService.verifiesToken(token);
    res.json(response);
  } catch (error) {
    res.status(400).json(`${error}`);
  }
};
