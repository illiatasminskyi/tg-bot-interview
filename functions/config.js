import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAWy7SieiX8VN29692JaM6ZD_r8VcG9PLc',
	authDomain: 'junior-club-862ab.firebaseapp.com',
	databaseURL:
		'https://junior-club-862ab-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'junior-club-862ab',
	storageBucket: 'junior-club-862ab.appspot.com',
	messagingSenderId: '627637735521',
	appId: '1:627637735521:web:f50bba2fed40e665c99a20',
	measurementId: 'G-9FFVZ5402T',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

// firebase login
// firebase init
// firebase deploy
