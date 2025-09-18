import Link from 'next/link';
import Image from 'next/image';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import Drinkimg from './de.png';

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch drink...');
  }
  return res.json();
};

const SingleDrink = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        back to drinks
      </Link>
      <h1 className='text-2xl text-red-500'>below img tag example  </h1>
      <img src={imgSrc}></img>
      <h1 className='pt-10 text-2xl text-red-500'>below img <span className='text-green-500 font-bold'  >Component </span> example  </h1>
 
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded shadow-lg mb-4'
        priority
        alt=''
      />
<h1 className='text-2xl text-red-500'>key diff ?  </h1>
<h1 className='text-xl w-y-6 text-blue-500'>Automatic optimization: serves modern formats (WebP/AVIF) when possible.

Responsive: can generate multiple sizes for different devices.

Lazy loading by default (images load only when visible).

Prevents layout shift (requires width & height or fill).

Can optimize remote images (via next.config.js images.domains).

Works best for performance, SEO, and Core Web Vitals.</h1>
 
    </div>
  );
};
export default SingleDrink;