// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyA1v52k4dOKucI2_E-oYNz7pI5g7KHh88E',
	authDomain: 'video-2bc6a.firebaseapp.com',
	projectId: 'video-2bc6a',
	storageBucket: 'video-2bc6a.appspot.com',
	messagingSenderId: '635257719786',
	appId: '1:635257719786:web:ae8ad7c17b1eb67d64c093',
	measurementId: 'G-JY8Y5CE2GS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
