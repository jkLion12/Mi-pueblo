import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 pt-20"> {/* ← pt-20 para compensar el navbar fijo */}
        {children}
      </main>
    </>
  );
}