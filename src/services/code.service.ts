import { ValidationCode } from "../interfaces/validationCode";
import { codeManager, userManager } from "../persistence/DAO";
import {sendCodeToEmail} from './email.service'
import * as userService from "../services/user.service";

const codeLength = 9;
const durationMinutes = 10;

export const sendCode = async (username: string): Promise<{ msg: string }> => {
  try {
    const code = await generateCode(username);
    username.toLowerCase()
    await saveCode(code);
    console.log(code);
    sendCodeToEmail(username,code.code)
    return { msg: "code generated successfully" };
  } catch (error) {
    throw error;
  }
};
export const generateCode = async (
  username: string
): Promise<ValidationCode> => {
  try {
    username.toLowerCase()
    const user = await userService.getUserByUsername(username);

    const userId = user.id;
    const code = generateRandomCode(codeLength);
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + durationMinutes);

    return {
      code,
      userId,
      expirationDate,
    };
  } catch (error) {
    throw error;
  }
};

const generateRandomCode = (length: number): string => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  return code;
};

const saveCode = async (code: ValidationCode): Promise<void> => {
  try {
    const codeSaved = await codeManager.getby('userId', String(code.userId))
    if (!codeSaved[0]) {
      await codeManager.save(code)
    } else {
        //@ts-ignore
        console.log(codeSaved[0])
      codeManager.putById(codeSaved[0].id,code)
    }
  } catch (error) {
    console.log(error)
    throw new Error("error on saveCode");
  }
};
export const validateCode = async (
  username: string,
  code: string
): Promise<boolean> => {
  try {
    username.toLowerCase()
    if (!validateCodeFormat(code, codeLength))
      throw new Error("code format error");
    const savedCoded = await getCode(username);
    console.log(code,savedCoded.code)
    if (!isCodeNotExpired) throw new Error("code expired error");
    if (savedCoded.code != code) throw new Error("code validation error");
    return true;
  } catch (error) {
    throw error;
  }
};

const isCodeNotExpired = (validationCode: ValidationCode): boolean => {
  const currentTimestamp = new Date().getTime();
  const expirationTimestamp = validationCode.expirationDate.getTime();
  return currentTimestamp <= expirationTimestamp;
};
const getCode = async (username: string): Promise<ValidationCode> => {
  username.toLowerCase()
  const user = await  userManager.getbyUsername(username);
  const userId = user.id;

  const validateCode =  await codeManager.getby('userId',userId)
 
    //@ts-ignore
  return validateCode[0];
};

export const validateCodeFormat = (code: string, length: number) => {
  if (code.length !== length) {
    return false;
  }

  // Verificar que el código contenga solo letras minúsculas y números
  const validCharacters = /^[a-z0-9]+$/;
  return validCharacters.test(code);
};
