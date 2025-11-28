'use client';

import { useEffect } from 'react';
import { useAuth, useUser, initiateAnonymousSignIn } from '@/firebase';
import AppSidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardOverview from "@/components/dashboard/overview";
import { doc, setDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';

export default function Home() {
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  useEffect(() => {
    if (!isUserLoading && !user) {
      initiateAnonymousSignIn(auth);
    }
  }, [user, isUserLoading, auth]);

  useEffect(() => {
    if (user && firestore) {
      const merchantRef = doc(firestore, 'merchants', user.uid);
      // Using setDoc with merge:true to create or update the document
      // without overwriting existing fields if the document already exists.
      setDoc(merchantRef, { id: user.uid, name: "Anonymous Merchant", email: `anon-${user.uid}@chainpay.com` }, { merge: true })
        .catch(console.error); // Basic error handling
    }
  }, [user, firestore]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="p-4 lg:p-8 pt-6 lg:pt-8 bg-background">
          <DashboardOverview />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
