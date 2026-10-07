import { adminAuth } from "./firebase-admin";
import { cookies } from "next/headers";

/**
 * Verifies the Firebase session cookie.
 * @returns The decoded ID token if valid, otherwise null.
 */
export async function verifySessionCookie() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;

  if (!sessionCookie) {
    return null;
  }

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
    
    const adminEmails = process.env.ADMIN_EMAILS ? process.env.ADMIN_EMAILS.split(',') : [];
    if (!adminEmails.includes(decodedClaims.email || '') && decodedClaims.admin !== true) {
      console.warn(`Unauthorized access attempt by email: ${decodedClaims.email}`);
      return null;
    }

    return decodedClaims;
  } catch (error) {
    console.error("Error verifying session cookie:", error);
    return null;
  }
}

/**
 * Creates a session cookie from an ID token.
 */
export async function createSessionCookie(idToken: string) {
  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  try {
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn,
    });
    
    const cookieStore = await cookies();
    cookieStore.set("session", sessionCookie, {
      maxAge: expiresIn / 1000, // maxAge in seconds
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
    });

    return true;
  } catch (error) {
    console.error("Error creating session cookie:", error);
    return false;
  }
}

/**
 * Deletes the session cookie.
 */
export async function deleteSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
