import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { create } from "zustand";
import { persist } from "zustand/middleware";

let isLoadingUserData = false; 

const getUser = async (set) => {
  const auth = getAuth();

  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      set({ user, loadingLogin: true });
    } else {
      set({ user: null, loadingLogin: false });
    }
  });
};

const getUserData = async (set) => {
  if (isLoadingUserData) return;

  const auth = getAuth();
  const db = getFirestore();

  try {
    isLoadingUserData = true;
    const user = auth.currentUser;

    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        set({ userData: userDocSnap.data() });
      } else {
        set({ userData: null });
      }
    }
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    set({ userData: null });
  } finally {
    isLoadingUserData = false;
  }
};

const useStore = create(
  persist(
    (set, get) => ({
      user: null,
      userData: null,
      loadingLogin: false,
      getUser: () => getUser(set),
      getUserData: () => getUserData(set),
    }),
    {
      name: "user-storage",
      partialize: (state) => ({
        user: state.user,
        userData: state.userData,
      }),
    }
  )
);

export default useStore;
