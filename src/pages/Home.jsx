import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-sv-dark">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-sv-gold mb-4 text-center">
          Welcome to SoccerVerse
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 text-center max-w-2xl">
          Your ultimate destination for soccer stats, news, and community
        </p>
        <button className="bg-sv-neon text-sv-dark px-8 py-3 rounded-lg font-semibold hover:bg-sv-gold transition-colors">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-sv-green p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-sv-gold mb-3">Live Scores</h3>
            <p className="text-white">
              Stay updated with real-time match scores from leagues around the world
            </p>
          </div>
          
          <div className="bg-sv-green p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-sv-gold mb-3">Player Stats</h3>
            <p className="text-white">
              Dive deep into comprehensive player statistics and performance data
            </p>
          </div>
          
          <div className="bg-sv-green p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-sv-gold mb-3">Team Analysis</h3>
            <p className="text-white">
              Explore detailed team analytics and historical match data
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join the SoccerVerse Community
        </h2>
        <p className="text-sv-gold text-lg mb-8">
          Connect with fans, track your favorite teams, and never miss a moment
        </p>
        <button className="bg-sv-gold text-sv-dark px-8 py-3 rounded-lg font-semibold hover:bg-sv-neon transition-colors">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default Home;