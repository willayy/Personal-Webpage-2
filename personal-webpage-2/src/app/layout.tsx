import type { Metadata } from "next";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {

  title: "William Norland",

  description: "Personal webpage for William Norland"

};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

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
        <title> William Norland </title>

        {/* The description of the website, this is just custom flavor applied by the owner of the site. */}
        <meta name="description" content="Personal webpage for William Norland" />

        {/* A copied in link from the google fonts website. Using this we can acces their fonts without downloading them. */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>

        <link rel="preconnect" href="https://fonts.gstatic.com"></link>

        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

      </head>

      {/* The body is where the real stuff begins, here is where you can put text, textfields, buttons etc. */}
      <body>

        {/* not-found, loading boundaries handeld implicitly by next behind the scenes, no need to do anything more. */}


        {/* This is a header component i made that wraps around all child routes. */}
        <Header/>

          {/* This is an errorBoundary implemented by Next that uses the error component i created, it wraps around all child routes. */}
          <ErrorBoundary errorComponent={Error}>

            {/* This is a layout page that wraps around all child routes */}
            {children}

          </ErrorBoundary>

        {/* This is a footer component i made that wraps around all child routes. */}
        <Footer/>

      </body>

    </html>

  );

}
