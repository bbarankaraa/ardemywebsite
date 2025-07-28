import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Topbar from "@/components/topbar/topbar";
import Footer from "@/components/footer/Footer";
import { siteMetadata } from "@/lib/siteMetaData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
    locale: siteMetadata.locale,
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview" : "large",
      "max-snippet": -1
    }
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${poppins.variable} antialiased`}
      >
        
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
