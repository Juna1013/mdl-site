import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Future</h1>
        <p className="text-lg text-center">
          Explore the latest in technology and innovation.
        </p>
      </main>
      <Footer />
    </div>
  );
}