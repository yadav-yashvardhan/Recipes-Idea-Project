import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaUtensils, FaHeart, FaRegHeart } from 'react-icons/fa';

const RecipeCard = ({ recipe, onClick, index }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const getCategoryColor = (category) => {
    const colors = {
      Breakfast: 'bg-yellow-100 text-yellow-800',
      Lunch: 'bg-green-100 text-green-800',
      Dinner: 'bg-blue-100 text-blue-800',
      Dessert: 'bg-pink-100 text-pink-800',
      Snack: 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
      onClick={() => onClick(recipe)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            {isFavorite ? (
              <FaHeart className="text-red-500" size={18} />
            ) : (
              <FaRegHeart className="text-gray-600" size={18} />
            )}
          </button>
        </div>
        <div className="absolute top-2 left-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(recipe.strCategory)}`}>
            {recipe.strCategory}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {recipe.strMeal}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FaClock size={14} />
            <span>30 mins</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUtensils size={14} />
            <span>{recipe.strArea || 'International'}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            {recipe.ingredients && recipe.ingredients.slice(0, 3).map((ing, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-xs font-medium text-primary border-2 border-white"
              >
                {ing.charAt(0)}
              </div>
            ))}
            {recipe.ingredients && recipe.ingredients.length > 3 && (
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 border-2 border-white">
                +{recipe.ingredients.length - 3}
              </div>
            )}
          </div>
          <span className="text-primary font-semibold text-sm">
            View Recipe →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;