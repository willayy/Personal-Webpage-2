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
    
    // Setting lang to en so that browser can interpret the natural language used on the website easier.
    <html lang="en">
      
      {/* The head is just meta data for the website */}
      <head>

        {/* Tell the browser what charset is being used, utf-8 is basically universal. */}
        <meta charSet="utf-8" />

        {/* Set the website shape to the width of the device being used*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* The title of the website, this is just custom flavor applied by the owner of the site. */}
        <title>{metadata.title}</title>

        {/* The description of the website, this is just custom flavor applied by the owner of the site. */}
        <meta name="description" content={metadata.description} />

        {/* A copied in link from the google fonts website. Using this we can acces their fonts without downloading them. */}
        <link rel="preconnect" href="https://fonts.googleapis.com">

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

      </head>

      {/* The body is where the real stuff begins, here is where you can put text, textfields, buttons etc*/}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {/* This is a layout page that wraps around all child routes */}
        {

          children
          
        }

      </body>

    </html>

  );

}
