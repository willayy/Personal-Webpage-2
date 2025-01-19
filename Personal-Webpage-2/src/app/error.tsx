'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ // NOSONAR - This is the way its defined in the Next.js documentation
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string }
  reset: () => void
}>) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (

    <div className ="error-div roboto-regular">

      <h2>Something went wrong!</h2>

      <button
        onClick={

          // Attempt to recover by trying to re-render the segment
          () => reset()

        }
      >

        Try again

      </button>

    </div>

  )

}