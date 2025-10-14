"use client";
import React, { useState, useEffect } from "react";
import { Button, Spinner } from "@chakra-ui/react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../fireBaseInit/fireBaseinit"; 
import { useRouter } from "next/navigation";

const BtnLogout = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/home"); 
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  if (loading) return <Spinner size="sm" />;
  if (!user) return null; 
  return (
    <Button
      background="black"
      color="white"
      borderRadius="9px"
      marginLeft="30px"
      onClick={handleLogout}
      _hover={{ background: "gray.800" }}
    >
      Logout
    </Button>
  );
};

export default BtnLogout;
