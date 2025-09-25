import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { create } from "zustand";
import { persist } from "zustand/middleware";




const getUser = async (set) => {
  const auth = getAuth();   
  onAuthStateChanged(auth, (user) => {
    if (user) {
      set(state => ({ user: user }))
      set(state => ({ loadingLogin: true }))


      

    } else {
      set(state => ({ loadingLogin: false }))
    }
  });
}

const getUserData = async (set) => {
  // Evita múltiplas chamadas simultâneas
  if (isLoadingUserData) {
    console.log('getUserData já está em execução, pulando...');
    return;
  }

  const auth = getAuth();
  const db = getFirestore();

  try {
    isLoadingUserData = true;
    const user = auth.currentUser;
    if (user) {
      // Busca os dados do usuári
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const firestoreData = userDocSnap.data();
        set(state => ({ userData: firestoreData }));
      } else {
        console.log("Nenhum dado encontrado no Firestore para este usuário");
        set(state => ({ userData: null }));
      }
    }
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    set(state => ({ userData: null }));
  } finally {
    isLoadingUserData = false;
  }
};
  

const useStore = create(
  persist(
    (set, get) => ({
     user: null,
      userData: null,
      getUser: () => getUser(set),
      getUserData: () => getUserData(set),
     
    }),
    {
      name: 'user-storage', // unique name for localStorage key
      partialize: (state) => ({ userData: state.userData }), // persist userData and pagamentoSubscription
    }
  )
);


export default useStore;