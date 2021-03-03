import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

interface IContextProps {
  currentUser: firebase.User | null | undefined;
  signUp: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
}

const AuthContext = React.createContext<Partial<IContextProps>>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<
    firebase.User | null | undefined
  >(undefined);

  const signUp = (
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> => {
    const unsubscribe = auth.createUserWithEmailAndPassword(email, password);

    return unsubscribe;
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value: IContextProps = {
    currentUser,
    signUp,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
