export const metadata = {
  title: 'Drinks · Next.js Tutorial',
};

export default function DrinksLayout({ children }) {
  return (
    <section className='max-w-6xl mx-auto px-8'>
      <div className='hero bg-base-100 rounded-box border border-base-300'>
        <div className='hero-content w-full flex-col items-stretch'>
          <div className='w-full card bg-base-200 border border-base-300'>
            <div className='card-body'>
              <h1 className='card-title text-2xl'>Drinks</h1>
              <p className='text-base-content/70'>Browse tasty beverages and details.</p>
            </div>
          </div>
          <div className='w-full mt-6'>{children}</div>
        </div>
      </div>
    </section>
  );
}


