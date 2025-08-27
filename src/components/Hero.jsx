import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Turn Your <span className="gradient-text">Ingredients</span> Into
              Delicious Meals
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Don't know what to cook? Enter your available ingredients and discover 
              amazing recipes for breakfast, lunch, dinner, and desserts!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/recipes" className="btn-primary inline-block text-center">
                Start Cooking
              </Link>
              <Link to="/about" className="btn-secondary inline-block text-center">
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600"
                alt="Cooking"
                className="rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <p className="font-bold text-3xl">1000+</p>
                <p className="text-sm">Recipes Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;