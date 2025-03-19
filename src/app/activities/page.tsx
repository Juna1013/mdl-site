import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Activities() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Our Activities</h1>
        <p className="text-lg text-center">
          Discover what we do and how we shape the future.
        </p>
      </main>
      <Footer />
    </div>
  );
}