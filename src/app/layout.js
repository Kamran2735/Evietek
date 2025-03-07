import "./globals.css"; // Ensure Tailwind is loaded
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import the Footer component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* Footer added here */}
      </body>
    </html>
  );
}
