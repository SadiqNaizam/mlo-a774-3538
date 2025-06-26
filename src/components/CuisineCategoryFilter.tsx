import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Wheat, Fish, Soup, Bean, Beef } from 'lucide-react';

const cuisineCategories = [
  { name: 'Pizza', slug: 'pizza', Icon: Pizza },
  { name: 'Italian', slug: 'italian', Icon: Wheat },
  { name: 'Sushi', slug: 'sushi', Icon: Fish },
  { name: 'Indian', slug: 'indian', Icon: Soup },
  { name: 'Mexican', slug: 'mexican', Icon: Bean },
  { name: 'Burgers', slug: 'burgers', Icon: Beef },
];

const CuisineCategoryFilter: React.FC = () => {
  console.log('CuisineCategoryFilter loaded');

  return (
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Or browse by category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {cuisineCategories.map((category) => (
            <Link
              key={category.slug}
              to={`/restaurant-listing?cuisine=${category.slug}`}
              className="group"
              aria-label={`Browse ${category.name} restaurants`}
            >
              <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900 aspect-square">
                <category.Icon className="h-10 w-10 md:h-12 md:w-12 text-gray-700 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                <span className="mt-3 text-sm md:text-base font-medium text-center text-gray-800 dark:text-gray-200">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuisineCategoryFilter;