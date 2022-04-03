import 'dotenv/config'

export default{
  "name": "ProyectoSigueAPP",
  "displayName": "ProyectoSigueAPP",
  extra: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMIAN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  }
}