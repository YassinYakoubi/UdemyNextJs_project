// Correct API endpoint
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch drinks...');
  }
  const data = await response.json();
  return data;
};

export default async function DrinksPage() {
  const data = await fetchDrinks();
  const drinks = data?.drinks ?? [];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {drinks.map((drink) => {
        return (
          <div key={drink.idDrink} className='card bg-base-100 bg-green-300 shadow-xl border border-base-300'>
            <figure>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className='w-full h-56 object-cover'
                loading='lazy'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                {drink.strDrink}
                <div className='badge badge-secondary'>#{drink.idDrink}</div>
              </h2>
              <p className='text-base-content/70'>{drink.strCategory} • {drink.strAlcoholic}</p>
              <div className='card-actions justify-end'>
                <a
                  href={`https://www.thecocktaildb.com/drink/${drink.idDrink}`}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-primary'
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}