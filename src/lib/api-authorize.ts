const username = "fka_14ESHTn27sUXTKaM5j931eKedZancWgjz2"; // Replace with your actual username
const password = ""; // Replace with your actual password (store securely)

  // Consider using environment variables for username and password for better security
 export const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');