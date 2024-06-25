import admin from 'firebase-admin';
import serviceAccount from '../ebuddy-technical-test-e323f-firebase-adminsdk-ohq6v-2e9936466d.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://ebuddy-technical-test-e323f.firebaseio.com',
});

const db = admin.firestore();
export default db;
