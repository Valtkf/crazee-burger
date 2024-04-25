import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config.jsx"
import { fakeMenu } from "../fakeData/fakeMenu.jsx"

export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
        return userReceived
    }
}

export const createUser = (userId) => {
    const docRef = doc(db, "users", userId)
    const newDoc = {
        username: userId,
        menu: fakeMenu.LARGE,
    }
    setDoc(docRef, newDoc)
}

export const authentificateUser = async (userId) => {
    const existingUser = await getUser(userId)

    if (!existingUser) {
        createUser(userId)
    }
    return existingUser
}