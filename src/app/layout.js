import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Raleway } from "next/font/google";
// import About from "../app/about/page";
// import Service from "@/components/service/Service";
// import OurProcess from "@/components/ourprocess/Ourprocess";
import Footer from "@/components/footer/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
