import { auth, db } from "./firebase/firebaseConfig.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Login
export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "../pages/dashboard.html";
  } catch (error) {
    alert(error.message);
  }
}

// Register
export async function register(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful!");
    window.location.href = "login.html";
  } catch (error) {
    alert(error.message);
  }
}

// Logout
export async function logout() {
  await signOut(auth);
  window.location.href = "../index.html";
}

// Contact form submission
export async function submitMessage(name, email, message) {
  try {
    await addDoc(collection(db, "messages"), { name, email, message, createdAt: new Date() });
    alert("Message sent successfully!");
  } catch (error) {
    alert("Failed to send message. Try again.");
  }
}
