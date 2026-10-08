import { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Services = lazy(() => import('@/components/Services'));
const About = lazy(() => import('@/components/About'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Newsletter = lazy(() => import('@/components/Newsletter'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}