import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaTimes, FaSearch } from 'react-icons/fa';

const IngredientInput = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState('');

  const addIngredient = (e) => {
    e.preventDefault();
    if (currentIngredient.trim() && !ingredients.includes(currentIngredient.trim())) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient('');
    }
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleSearch = () => {
    if (ingredients.length > 0) {
      onSearch(ingredients);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-display font-bold mb-6 text-center">
        What's in your <span className="gradient-text">kitchen?</span>
      </h2>

      <form onSubmit={addIngredient} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={currentIngredient}
            onChange={(e) => setCurrentIngredient(e.target.value)}
            placeholder="Enter an ingredient (e.g., chicken, rice, tomato)"
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="bg-primary text-white p-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <FaPlus size={20} />
          </button>
        </div>
      </form>

      {/* Ingredient Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {ingredients.map((ingredient, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-orange-100 text-primary px-4 py-2 rounded-full flex items-center gap-2"
          >
            <span className="font-medium">{ingredient}</span>
            <button
              onClick={() => removeIngredient(index)}
              className="hover:text-red-500 transition-colors"
            >
              <FaTimes size={14} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        disabled={ingredients.length === 0}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${
          ingredients.length > 0
            ? 'bg-primary text-white hover:bg-secondary transform hover:scale-105'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <FaSearch />
        Find Recipes ({ingredients.length} ingredients)
      </button>

      {/* Suggestions */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 mb-2">Popular ingredients:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {['Chicken', 'Rice', 'Pasta', 'Eggs', 'Cheese', 'Tomato'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setCurrentIngredient(suggestion)}
              className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientInput;