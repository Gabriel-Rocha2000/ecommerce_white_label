const createUser = async () => {
  try {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      await getUserData();
      console.log("Usuário já existe, dados carregados.");
      router.push('/');
      return;
    }

    
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: "aluno",
      assinante: false,
      plano: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      playlist: [],
      favoritos: [],
      historico: [],
      produtos: [],
    });

    console.log("Usuário criado com sucesso no Firestore");
    await getUserData();
    router.push('/');
  } catch (error) {
    console.error("Erro ao criar/atualizar usuário no Firestore:", error);
  }
};