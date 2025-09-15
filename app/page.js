import Link from 'next/link'

function page() {
  return (
    <div className='space-y-8'>
      <div className='hero bg-gradient-to-r from-primary to-secondary text-primary-content rounded-box p-8'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>Welcome!</h1>
            <p className='py-6 text-lg'>Build awesome stuff with Next.js and daisyUI</p>
            <button className='btn btn-accent btn-lg'>Get Started</button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='card bg-base-100 shadow-xl border border-base-300'>
          <div className='card-body'>
            <h2 className='card-title text-primary'>About</h2>
            <p>Learn more about this project</p>
            <div className='card-actions justify-end'>
              <Link href="/about" className='btn btn-primary'>Visit</Link>
            </div>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl border border-base-300'>
          <div className='card-body'>
            <h2 className='card-title text-secondary'>Client</h2>
            <p>Client-side components and features</p>
            <div className='card-actions justify-end'>
              <Link href="/client" className='btn btn-secondary'>Explore</Link>
            </div>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl border border-base-300'>
          <div className='card-body'>
            <h2 className='card-title text-accent'>Query</h2>
            <p>React Query examples and demos</p>
            <div className='card-actions justify-end'>
              <Link href="/query" className='btn btn-accent'>Try it</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='alert alert-info'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>This is a demo of daisyUI components with custom colors!</span>
      </div>
    </div>
  )
}

export default page