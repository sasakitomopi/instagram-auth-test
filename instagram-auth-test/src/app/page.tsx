import Image from "next/image";
import InstaAuth from "./(main)/insta-auth/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-400">
      <InstaAuth />
    </main>
  );
}
