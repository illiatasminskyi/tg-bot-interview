import { getDatabase, ref, set } from 'firebase/database'
import { db } from './config.js'

function create(userId, name, first_name) {
	const db = getDatabase()
	set(ref(db, 'users/' + userId), {
		username: name,
		first_name: first_name,
	})
}

export { create }
