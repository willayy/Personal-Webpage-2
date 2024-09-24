import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "William Norland",
  description: "A personal webpage",
};

export default function RootLayout(
  {

    children,

  }: Readonly<{
  
    children: React.ReactNode;

  }>
) {
  return (
    <html lang="en">

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
