// Add SEO metadata for the portfolio
export const metadata = {
  title: 'Mosbeh Barhoumi | MLOps Engineer & AI Specialist',
  description: 'Portfolio of Mosbeh Barhoumi, an experienced MLOps Engineer with expertise in Machine Learning, Deep Learning, and DevOps practices.',
  keywords: 'MLOps, Machine Learning, Deep Learning, DevOps, AI, Engineer, Portfolio, Mosbeh Barhoumi',
  openGraph: {
    title: 'Mosbeh Barhoumi | MLOps Engineer & AI Specialist',
    description: 'Portfolio of Mosbeh Barhoumi, an experienced MLOps Engineer with expertise in Machine Learning, Deep Learning, and DevOps practices.',
    type: 'website',
    locale: 'en_US',
  },
};

// Create a loading component for better user experience
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-xl text-gray-300">Loading...</p>
      </div>
    </div>
  );
}
