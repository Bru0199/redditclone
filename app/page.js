import Navbar from "@/components/Navbar/Navbar";
import React  from "react";


export default function Home({children}) {
  return (
    <div>
    <main>
      <Navbar/>
      {children}
      </main>
    </div>
  );
}
