import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning is required for next-themes */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >    
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
