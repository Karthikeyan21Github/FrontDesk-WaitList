import "./globals.css";
import Sidebar from "../Components/Sidebar";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "600"], // Add weights as needed
});

export const metadata = {
  title: "Front Desk",
  description: "-by Omnify Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex">
          <Sidebar />
          <div className="w-full scroll-smooth overflow-x-auto bg-accent">
            <div className="w-full flex justify-center mx-auto scroll-smooth overflow-auto h-[calc(100vh)]">
              <div className="w-full "> {children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
