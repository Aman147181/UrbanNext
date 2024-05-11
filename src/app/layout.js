import { Inter } from "next/font/google";
import { Providers } from "./provider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthProvider from "@/config/authProvider";
export const metadata = {
  title: "Urban Dwellings",
  description: " Modern Interior furniture store",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </AuthProvider>
  );
}
