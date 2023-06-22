import products from '../components/data/mobiles'
import {initializeApp} from "firebase/app"
import {getFirestore, collection, addDoc} from "firebase/firestore"




    const firebaseConfig = {
        apiKey: "AIzaSyBikYtjKF1FFO2OlRKMvWvzSzOwx9m1dPU",
        authDomain: "react-coder-rugnia.firebaseapp.com",
        projectId: "react-coder-rugnia",
        storageBucket: "react-coder-rugnia.appspot.com",
        messagingSenderId: "970789363043",
        appId: "1:970789363043:web:e60ac12f5463c3dfe00756"
      }
      
     
      const firebaseApp = initializeApp(firebaseConfig);
      const db = getFirestore(firebaseApp);
      
      export async function exportData() {
        const productsCollectionRef = collection(db, "products");
        
       
      for (let item of products) {
        item.index= item.id
          delete item.id 
         
      await addDoc(productsCollectionRef, item);
        }
      }