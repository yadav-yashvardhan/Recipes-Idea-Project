import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaClock, FaUtensils, FaPrint, FaShare } from 'react-icons/fa';

const RecipeModal = ({ recipe, isOpen, onClose }) => {
  if (!recipe) return null;

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  const getInstructions = () => {
    return recipe.strInstructions?.split('\n').filter(instruction => instruction.trim());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-x-4 top-4 bottom-4 md:inset-x-8 md:top-8 md:bottom-8 md:max-w-4xl md:mx-auto bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col box-border"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="relative h-64 md:h-80">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <FaTimes size={20} />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="text-3xl font-display font-bold mb-2">{recipe.strMeal}</h2>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <FaClock /> 30 mins
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUtensils /> {recipe.strCategory}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {recipe.strArea || 'International'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Ingredients */}
                  <div className="md:col-span-1">
                    <h3 className="font-display font-semibold text-xl mb-4 gradient-text">
                      Ingredients
                    </h3>
                    <ul className="space-y-2">
                      {getIngredients().map((ingredient, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-gray-700">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div className="md:col-span-2">
                    <h3 className="font-display font-semibold text-xl mb-4 gradient-text">
                      Instructions
                    </h3>
                    <ol className="space-y-4">
                      {getInstructions()?.map((instruction, index) => (
                        <li key={index} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </span>
                          <p className="text-gray-700 pt-1">{instruction}</p>
                        </li>
                      ))}
                    </ol>

                    {/* Video Link */}
                    {recipe.strYoutube && (
                      <div className="mt-6">
                        <a
                          href={recipe.strYoutube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                        >
                          Watch Video Tutorial →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t p-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                    <FaPrint size={20} />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                    <FaShare size={20} />
                  </button>
                </div>
                <button onClick={onClose} className="btn-secondary">
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RecipeModal;