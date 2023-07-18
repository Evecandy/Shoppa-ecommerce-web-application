import path, {dirname} from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config({path:path.resolve(dirname(fileURLToPath(import.meta.url)), "env/.env")})

const { PORT, HOST, SQL_SERVER, SQL_USER, SQL_PWD, SQL_DB, SQL_ENCRYPT, JWT_SECRET } = process.env;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

export const databaseConfig = {
      server: SQL_SERVER,
      user: SQL_USER,
      password: SQL_PWD,
      database: SQL_DB,
      options: {
        encrypt: SQL_ENCRYPT === undefined || SQL_ENCRYPT === "true", 
        
        enableArithAbort: true,
      },
  };

export const expressConfig = {
  port: PORT || 3000,
  host: HOST || "",
  url: (HOST || "localhost") + ":" + (PORT || 3000),
  jwt_secret: JWT_SECRET
}