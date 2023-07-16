
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage, ref, getDownloadURL,uploadBytesResumable } from "firebase/storage";

import { firebaseConfig } from "./config/index.js";


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage();

export async function uploadFileToFirebase(file) {
    const storageRef = ref(storage, file.originalname);
//   const fileRef = storageRef.child('files/' + file.originalname);
    const metadata = {
        contentType: file.mimetype
    }
 // Upload the file
//   const snapshot = await fileRef.put(file.buffer);
    const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata)

 // Get the public download URL
    // const downloadURL = await snapshot.ref.getDownloadURL();
    const downloadURL = await getDownloadURL(snapshot.ref)
    
    return downloadURL;
}

export default firebaseApp;