import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const NotFound = () => {

    useEffect(() => {
        console.log('use effect ran')
        setTimeout(() => {
            useRouter.push('/')
        }, 3000)
    }, [])
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}
 
export default NotFound;