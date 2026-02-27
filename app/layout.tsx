
import "./globals.css";
import Providers from "./provider";
import Navbar from "@/components/ui/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  >
        <Navbar/>
        <Providers>
           {children}
        </Providers>
       
      </body>
    </html>
  );
}
