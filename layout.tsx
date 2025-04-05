import OptimizationProvider from '@/components/OptimizationProvider';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mosbeh Barhoumi | MLOps Engineer",
  description: "Portfolio website of Mosbeh Barhoumi, MLOps Engineer with expertise in Machine Learning, Deep Learning, and DevOps practices.",
  keywords: "MLOps, Machine Learning, Deep Learning, DevOps, AI, Engineer, Portfolio, Mosbeh Barhoumi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <OptimizationProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </OptimizationProvider>
      </body>
    </html>
  );
}
