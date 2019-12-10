import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDph04ay7lzzQqjT_BlNftF5T2rolzNJT0',
    authDomain: 'my-react-site-8e53b.firebaseapp.com',
    databaseURL: 'https://my-react-site-8e53b.firebaseio.com',
    projectId: 'my-react-site-8e53b',
    storageBucket: 'my-react-site-8e53b.appspot.com',
    messagingSenderId: '1046031979483',
    appId: '1:1046031979483:web:7affd39a0cb811fae30dfe',
    measurementId: 'G-HK1BPMJYHE',
};

export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }

    return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
