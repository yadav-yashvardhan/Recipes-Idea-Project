import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import IngredientInput from '../components/IngredientInput';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from '../components/RecipeModal';
import CategoryFilter from '../components/CategoryFilter';
import { FaSpinner } from 'react-icons/fa';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchedIngredients, setSearchedIngredients] = useState([]);

  const searchRecipes = async (ingredients) => {
    setLoading(true);
    setSearchedIngredients(ingredients);
    
    try {
      // Search for each ingredient and combine results
      const allRecipes = [];
      const recipeIds = new Set();

      for (const ingredient of ingredients) {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        
        if (response.data.meals) {
          response.data.meals.forEach(meal => {
            if (!recipeIds.has(meal.idMeal)) {
              recipeIds.add(meal.idMeal);
              allRecipes.push(meal);
            }
          });
        }
      }

      // Get detailed information for each recipe
      const detailedRecipes = await Promise.all(
        allRecipes.slice(0, 12).map(async (recipe) => {
          const detailResponse = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
          );
          return detailResponse.data.meals[0];
        })
      );

      setRecipes(detailedRecipes);
      setFilteredRecipes(detailedRecipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    
    if (category === 'all') {
      setFilteredRecipes(recipes);
    } else {
      const categoryMap = {
        breakfast: ['Breakfast'],
        lunch: ['Beef', 'Chicken', 'Lamb', 'Pork', 'Seafood', 'Vegetarian'],
        dinner: ['Beef', 'Chicken', 'Lamb', 'Pork', 'Seafood', 'Pasta'],
        dessert: ['Dessert'],
        snack: ['Side', 'Starter']
      };

      const filtered = recipes.filter(recipe => 
        categoryMap[category]?.includes(recipe.strCategory)
      );
      setFilteredRecipes(filtered);
    }
  };

  const openRecipeModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-display font-bold mb-4">
            Find Your Perfect <span className="gradient-text">Recipe</span>
          </h1>
          <p className="text-xl text-gray-600">
            Enter your ingredients and discover delicious possibilities
          </p>
        </motion.div>

        {/* Ingredient Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <IngredientInput onSearch={searchRecipes} />
        </motion.div>

        {/* Results Section */}
        {(recipes.length > 0 || loading) && (
          <>
            {/* Category Filter */}
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />

            {/* Recipe Grid */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <FaSpinner className="animate-spin text-4xl text-primary" />
              </div>
            ) : (
              <>
                <div className="mb-6 text-center">
                  <p className="text-gray-600">
                    Found <span className="font-semibold text-primary">{filteredRecipes.length}</span> recipes 
                    {searchedIngredients.length > 0 && (
                      <span> with: {searchedIngredients.join(', ')}</span>
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredRecipes.map((recipe, index) => (
                    <RecipeCard
                      key={recipe.idMeal}
                      recipe={recipe}
                      onClick={openRecipeModal}
                      index={index}
                    />
                  ))}
                </div>

                {filteredRecipes.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No recipes found in this category. Try selecting a different category.</p>
                                      </div>
                )}
              </>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && recipes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <img
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400"
              alt="Cooking ingredients"
              className="w-64 h-64 object-cover rounded-full mx-auto mb-8 shadow-xl"
            />
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Start by adding your ingredients
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Tell us what's in your kitchen, and we'll show you amazing recipes you can make right now!
            </p>
          </motion.div>
        )}

        {/* Recipe Modal */}
        <RecipeModal
          recipe={selectedRecipe}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Recipes;