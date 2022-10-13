import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDC1bHOKpSylUZHa3Y849-mz16J8dR_YeU',
	authDomain: 'crwn-clothing-db-47571.firebaseapp.com',
	projectId: 'crwn-clothing-db-47571',
	storageBucket: 'crwn-clothing-db-47571.appspot.com',
	messagingSenderId: '84349685631',
	appId: '1:84349685631:web:61a5a69a00aa6818fad44a',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createAt });
		} catch (err) {
			console.log('error creating user', err.message);
		}
	}

	return userDocRef;
};
