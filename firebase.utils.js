import admin from 'firebase-admin';

import './env.js';

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN_SDK_PRIVATE_KEY))
});

export const db = admin.firestore();
const catalogue = db.collection('product-catalogue');

export const getCatalogue = async () => {
    const snapshot = await catalogue.get();

    if (!snapshot) return;

    const collectionsArray = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });

    return collectionsArray;
};

export const getItems = async (sectionId) => {
    const snapshot = await catalogue.doc(sectionId).collection('items').get();

    if (!snapshot) return;

    const itemsArray = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });

    return itemsArray;
}

export const getSection = async (id) => {
    const doc = await catalogue.doc(id).get();

    return {
        id: doc.id,
        ...doc.data()
    }
}

export default admin;