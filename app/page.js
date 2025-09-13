import Link from 'next/link'

function page() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Link href="/about">About</Link>
    </div>
  )
}

export default page