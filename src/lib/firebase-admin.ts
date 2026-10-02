import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getStorage } from 'firebase-admin/storage';

if (!getApps().length) {
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;
  if (privateKey) {
    // Handle literal "\n" strings from Vercel env, and strip accidental quotes
    privateKey = privateKey.replace(/\\n/g, '\n').replace(/^"|"$/g, '');
  }

  try {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID?.replace(/^"|'|"|'$/g, '')?.trim(),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL?.replace(/^"|'|"|'$/g, '')?.trim(),
        privateKey: privateKey?.trim(),
      }),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
    console.log('Firebase Admin initialized successfully.');
  } catch (error) {
    console.error('Firebase Admin initialization error:', error);
  }
}

let adminDb = getFirestore();
let adminAuth = getAuth();
let adminStorage = getStorage();

export { adminDb, adminAuth, adminStorage };
