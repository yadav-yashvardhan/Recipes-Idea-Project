import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Passion for Food',
      description: 'We believe cooking should be enjoyable and accessible to everyone.'
    },
    {
      icon: <FaUsers />,
      title: 'Community First',
      description: 'Building a community of home cooks who share and inspire each other.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Using technology to make meal planning easier and more efficient.'
    },
    {
      icon: <FaRocket />,
      title: 'Simplicity',
      description: 'Making complex recipes simple and approachable for all skill levels.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300'
    },
    {
      name: 'Michael Chen',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'
    },
    {
      name: 'Emily Davis',
      role: 'Product Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300'
    },
    {
      name: 'David Wilson',
      role: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              About <span className="gradient-text">RecipeFinder</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make cooking accessible, enjoyable, and waste-free 
              by helping you discover amazing recipes with ingredients you already have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-600 mb-4">
                RecipeFinder was born out of a simple frustration - standing in front of 
                an open fridge, wondering what to cook with the ingredients available. 
                We realized that millions of people face this same challenge every day.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2023, our platform has grown from a simple ingredient matcher 
                to a comprehensive cooking companion that helps reduce food waste while 
                inspiring culinary creativity.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve over 50,000 home cooks worldwide, helping 
                them discover new recipes and make the most of their ingredients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600"
                alt="Cooking together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <p className="font-bold text-3xl">2M+</p>
                <p className="text-sm">Recipes Discovered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-primary text-3xl mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind RecipeFinder
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Join Our Cooking Community
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start discovering amazing recipes with ingredients you already have
            </p>
            <a href="/recipes" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;