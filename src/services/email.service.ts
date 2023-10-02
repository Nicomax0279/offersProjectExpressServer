import nodemailer from "nodemailer";
import { options } from "../configs/envConfigs";

export const sendCodeToEmail = (email: string, code: string) => {
  try {
    const mailOptions = getMailOptions(email,code)
    transporter.sendMail(mailOptions)
  } catch (error) {

  }
};

const generateTemplate  = (username: string, code: string)=>{
    try {
        return `<div><h1>Bienvenido!! ${username}</h1> <p>tu código de activación es ${code} dirígete a validación de códigos para activar su cuenta o cambiar la contraseña</p></div>`
    } catch (error) {
        return ''
    }

}

const getMailOptions = (username: string, code: string)=>{
    try {
        let email:string 
        if(Mailer.EMAIL_MODE.toLowerCase() == 'prod'){
            email = username
        }else{
            email = Mailer.EMAIL_TEST
        }
        const mailOptions={
            from:"Servidor de NodeJs",
            to:email,
            subject:"Correo de prueba desde un servidor de node",
            html:generateTemplate(username,code)
        }
        return mailOptions
    } catch (error) {
        throw error
    }
}

let { Mailer } = options;
const transporter = nodemailer.createTransport({
  //@ts-ignore
  host: Mailer.EMAIL_HOST,
  port: 587,
  auth: {
    user: Mailer.EMAIL_USER,
    pass: Mailer.EMAIL_PASS,
  },
  secure: false,
  tls: {
    rejecUnauthorized: false,
  },
});

//const emailTemplate = `<div><h1>Bienvenido!!</h1><img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/><p>Ya puedes empezar a usar nuestros servicios</p><a href="https://www.google.com/">Explorar</a></div>`;
