'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function HomePage() {
  const router = useRouter();
   // Automatically redirect to the dashboard
   useEffect(() => {
    router.push("/dashboard");
  }, [router]);
  return (
    <div className="flex flex-col min-h-screen">
    </div>
  );
}
