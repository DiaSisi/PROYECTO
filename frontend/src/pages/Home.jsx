import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to <span style={{ fontFamily: "Ribeye Marrow" }}>Serendipity</span></h2>
        <p className="text-lg">
          Discover a world of books at your fingertips. Explore our vast collection and find your next favorite read.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
