import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { paidApp } from "./index";

// Initialize Firebase

export const uploadToFirebase = async (
  audioData: Uint8Array | ArrayBuffer | Blob,
  filePath: string
) => {
  // init firebase storage
  const storage = getStorage(paidApp);

  // make a reference for file to upload
  const storageRef = ref(storage, filePath);

  // upload file
  const uploadedFile = await uploadBytes(storageRef, audioData);
  // console.log("🫰🏼 File uploaded!");

  return uploadedFile;
}; // will return big object

export const createFirebaseUrl = async (
  fullPathOfFile: string
): Promise<string> => {
  // init firebase storage
  const storage = getStorage(paidApp);

  // Return download URL
  const url = await getDownloadURL(ref(storage, fullPathOfFile));
  return url;
}; // will return url

export const doesFileExist = async (
  filePath: string
): Promise<{ existingURL: string; exists: boolean }> => {
  try {
    // init firebase storage
    const storage = getStorage(paidApp);

    // Try getting download URL
    const existingURL = await getDownloadURL(ref(storage, filePath));

    return { existingURL, exists: true };
  } catch {
    // Return false if not found
    return { exists: false, existingURL: "" };
  }
}; // return url if present, or else false

export const deleteFile = async (fullPathOfFile: string): Promise<void> => {
  try {
    // init firebase storage
    const storage = getStorage(paidApp);

    const fileToDeleteRef = ref(storage, fullPathOfFile);

    // Delete file
    await deleteObject(fileToDeleteRef);

    return;
  } catch (err) {
    console.error(err);
    throw err;
  }
}; // will not return anything
