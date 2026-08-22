import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chacapuente - Mi Pueblo",
  description: "Página oficial de Chacapuente, Apurímac",
};

// IMPORTANTE: importamos tu layout personalizado y lo usamos como layout raíz
import Layout from "./layouts/layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}