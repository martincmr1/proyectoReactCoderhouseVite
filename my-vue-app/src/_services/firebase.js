import { initializeApp } from "firebase/app";
import { collection, getDocs ,getFirestore , doc, getDoc , query, where, addDoc,writeBatch} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBikYtjKF1FFO2OlRKMvWvzSzOwx9m1dPU",
  authDomain: "react-coder-rugnia.firebaseapp.com",
  projectId: "react-coder-rugnia",
  storageBucket: "react-coder-rugnia.appspot.com",
  messagingSenderId: "970789363043",
  appId: "1:970789363043:web:e60ac12f5463c3dfe00756"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export async function getData() {

const productsCollectionRef = collection(db,"products")
const productsSnapshot = await getDocs(productsCollectionRef)
const arrayDocs = productsSnapshot.docs
const dataDocs = arrayDocs.map ((doc) => {
return  {...doc.data() ,id: doc.id} })
return dataDocs
}

export async function getItemData(idUrl) {

const docRef = doc(db, "products", idUrl);
const docSnap = await getDoc(docRef);
return {id: docSnap.id , ...docSnap.data()}
}

export async function getCategoryData(idCategory) {

const productsCollectionRef = collection(db,"products")
const q = query(productsCollectionRef, where("category", "==", idCategory));
const productsSnapshot = await getDocs(q)
const arrayDocs = productsSnapshot.docs
const dataDocs = arrayDocs.map ((doc) => {
return {...doc.data(),id:doc.id}
})
return dataDocs
}

export async function createOrderWithStockUpdate(data) {
const ordersCollectionRef = collection(db, "orders");
const batch = writeBatch(db);
const { items } = data;
for (let itemInCart of items) {
const refDoc = doc(db, "products", itemInCart.id);
const docSnap = await getDoc(refDoc);
const { stock } = docSnap.data();
const stockToUpdate = stock - itemInCart.count;
if (stockToUpdate < 0) {
throw new Error(`No hay stock suficiente del producto: ${itemInCart.id}`);
} else {
const docRef = doc(db, "products", itemInCart.id);
batch.update(docRef, { stock: stockToUpdate });
}
}

await batch.commit();
const response = await addDoc(ordersCollectionRef, data);
return response.id;
}

