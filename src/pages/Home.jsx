import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { FaSearch, FaBookOpen, FaClock, FaLeaf } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: 'Smart Search',
      description: 'Enter your available ingredients and find matching recipes instantly'
    },
    {
      icon: <FaBookOpen className="text-3xl" />,
      title: '1000+ Recipes',
      description: 'Access a vast collection of recipes from around the world'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Save Time',
      description: 'No more wondering what to cook - get instant meal suggestions'
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'Reduce Waste',
      description: 'Use what you have and minimize food waste'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Recipes' },
    { number: '50K+', label: 'Happy Users' },
    { number: '100+', label: 'Cuisines' },
    { number: '24/7', label: 'Available' }
  ];

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Why Choose <span className="gradient-text">RecipeFinder</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your cooking experience with our intelligent recipe discovery platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to your next delicious meal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Add Ingredients',
                description: 'Enter the ingredients you have available in your kitchen',
                image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400'
              },
              {
                step: '2',
                title: 'Browse Recipes',
                description: 'Get personalized recipe suggestions based on your ingredients',
                image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400'
              },
              {
                step: '3',
                title: 'Start Cooking',
                description: 'Follow step-by-step instructions to create delicious meals',
                image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="absolute -top-4 left-6 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 mt-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/recipes" className="btn-primary inline-block">
              Try It Now
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Ready to Cook Something <span className="gradient-text">Amazing</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of home cooks who are discovering new recipes every day
            </p>
            <Link to="/recipes" className="btn-primary inline-block">
              Get Started Free
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;