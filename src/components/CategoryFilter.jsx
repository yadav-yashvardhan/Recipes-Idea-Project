import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'breakfast', name: 'Breakfast', icon: '🥞' },
    { id: 'lunch', name: 'Lunch', icon: '🥗' },
    { id: 'dinner', name: 'Dinner', icon: '🍖' },
    { id: 'dessert', name: 'Dessert', icon: '🍰' },
        { id: 'snack', name: 'Snacks', icon: '🍿' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
            selectedCategory === category.id
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-orange-50 shadow-md'
          }`}
        >
          <span className="text-xl">{category.icon}</span>
          <span>{category.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;