import { ArrowUpIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'

export default function BackToTopButton() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      //Get the button:
      const mybutton = document.getElementById('myBtn')

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction()
      }

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = 'block'
        } else {
          mybutton.style.display = 'none'
        }
      }
    }
  })

  // When the user clicks on the button, scroll to the top of the document
  function scrollToTop() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <button
      type='button'
      onClick={scrollToTop}
      id='myBtn'
      title='Go to top'
      className='inline-flex items-center p-2 rounded-full shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
      <ArrowUpIcon className='h-6 w-6' aria-hidden='true' />
    </button>
  )
}
