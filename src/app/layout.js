import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/services/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Easy Meal app",
    template: "%s | EZ Meal"
  },
  description: "Wicked sick next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar></Navbar>
          <div className="">
            {children}
          </div>
          <footer className="bg-blue-300">
            this is my footer
          </footer>
        </AuthProvider>
      </body>

    </html>
  );
}
