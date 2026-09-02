import React, { useState } from 'react';
import { Search, Sparkles, ExternalLink } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  category: 'Topwear' | 'Bottomwear' | 'Outerwear' | 'Kids' | 'Dresses';
  gender: 'Men' | 'Women' | 'Kids' | 'Unisex';
  platform: 'Amazon' | 'Flipkart' | 'Myntra' | 'Ajio';
  price: string;
  imageUrl: string;
  storeUrl: string;
}

interface ProductsProps {
  onSelectTryOn?: (product: Product) => void;
}

const PRODUCTS: Product[] = [
  // --- MENSWEAR (GENTS) ---
  {
    id: '1',
    title: 'Minimalist Cotton Oversized Tee',
    category: 'Topwear',
    gender: 'Men',
    platform: 'Myntra',
    price: '₹1,299',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.myntra.com/tshirts/hrx-by-hrithik-roshan/hrx-by-hrithik-roshan-men-black-printed-cotton-pure-cotton-t-shirt/1700944/buy',
  },
  {
    id: '2',
    title: 'Classic Denim Trucker Jacket',
    category: 'Outerwear',
    gender: 'Men',
    platform: 'Amazon',
    price: '₹2,799',
    imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.amazon.in/Levi-Mens-Regular-Jacket-03613-0012_Blue_L/dp/B073X2S47Q/',
  },
  {
    id: '3',
    title: 'Relaxed Fit Cargo Trousers',
    category: 'Bottomwear',
    gender: 'Men',
    platform: 'Flipkart',
    price: '₹1,899',
    imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.flipkart.com/highlander-men-cargo-grey-pants/p/itmf3e353ba5db9a',
  },
  {
    id: '4',
    title: 'Linen Casual Short-Sleeve Shirt',
    category: 'Topwear',
    gender: 'Men',
    platform: 'Ajio',
    price: '₹1,599',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.ajio.com/marks--spencer-pure-cotton-printed-resort-collar-shirt/p/466336054_navy',
  },
  {
    id: '5',
    title: 'Slim Fit Chino Trousers',
    category: 'Bottomwear',
    gender: 'Men',
    platform: 'Myntra',
    price: '₹1,999',
    imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.myntra.com/chinos',
  },
  {
    id: '6',
    title: 'Monochrome Hooded Sweatshirt',
    category: 'Outerwear',
    gender: 'Men',
    platform: 'Amazon',
    price: '₹1,499',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.amazon.in/dp/B08X123456',
  },
  {
    id: '7',
    title: 'Tailored Single-Breasted Blazer',
    category: 'Outerwear',
    gender: 'Men',
    platform: 'Ajio',
    price: '₹4,999',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.ajio.com',
  },

  // --- LADIESWEAR ---
  {
    id: '8',
    title: 'Floral Summer Wrap Dress',
    category: 'Dresses',
    gender: 'Women',
    platform: 'Myntra',
    price: '₹2,199',
    imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.myntra.com/dresses',
  },
  {
    id: '9',
    title: 'High-Waist Wide Leg Jeans',
    category: 'Bottomwear',
    gender: 'Women',
    platform: 'Ajio',
    price: '₹2,499',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.ajio.com',
  },
  {
    id: '10',
    title: 'Silk Satin Button-Down Blouse',
    category: 'Topwear',
    gender: 'Women',
    platform: 'Amazon',
    price: '₹1,799',
    imageUrl: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.amazon.in',
  },
  {
    id: '11',
    title: 'Pleated A-Line Midi Skirt',
    category: 'Bottomwear',
    gender: 'Women',
    platform: 'Flipkart',
    price: '₹1,399',
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.flipkart.com',
  },
  {
    id: '12',
    title: 'Knitted Crop Cardigan',
    category: 'Outerwear',
    gender: 'Women',
    platform: 'Myntra',
    price: '₹1,699',
    imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.myntra.com',
  },
  {
    id: '13',
    title: 'Bohemian Printed Maxi Dress',
    category: 'Dresses',
    gender: 'Women',
    platform: 'Ajio',
    price: '₹3,299',
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.ajio.com',
  },
  {
    id: '14',
    title: 'Oversized Pastel Blazer',
    category: 'Outerwear',
    gender: 'Women',
    platform: 'Amazon',
    price: '₹3,599',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.amazon.in',
  },

  // --- KIDSWEAR ---
  {
    id: '15',
    title: 'Kids Colorblock Cotton Hoodie',
    category: 'Kids',
    gender: 'Kids',
    platform: 'Myntra',
    price: '₹999',
    imageUrl: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.myntra.com/kids',
  },
  {
    id: '16',
    title: 'Girls Denim Overall Dress',
    category: 'Kids',
    gender: 'Kids',
    platform: 'Flipkart',
    price: '₹1,199',
    imageUrl: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.flipkart.com',
  },
  {
    id: '17',
    title: 'Boys Graphic Print T-Shirt',
    category: 'Kids',
    gender: 'Kids',
    platform: 'Amazon',
    price: '₹699',
    imageUrl: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.amazon.in',
  },
  {
    id: '18',
    title: 'Toddler Floral Party Frock',
    category: 'Kids',
    gender: 'Kids',
    platform: 'Ajio',
    price: '₹1,499',
    imageUrl: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.ajio.com',
  },
  {
    id: '19',
    title: 'Kids Comfy Jogger Set',
    category: 'Kids',
    gender: 'Kids',
    platform: 'Myntra',
    price: '₹1,299',
    imageUrl: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.myntra.com',
  },
  {
    id: '20',
    title: 'Junior Waterproof Puffer Jacket',
    category: 'Kids',
    gender: 'Kids',
    platform: 'Amazon',
    price: '₹2,199',
    imageUrl: 'https://images.unsplash.com/photo-1543854535-7481acb7e813?w=500&auto=format&fit=crop',
    storeUrl: 'https://www.amazon.in',
  },
];

const GENDERS = ['All', 'Men', 'Women', 'Kids'];

export default function Products({ onSelectTryOn }: ProductsProps) {
  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesGender = selectedGender === 'All' || product.gender === selectedGender;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGender && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F9F8F3] px-6 sm:px-8 py-10 text-[#111111]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Explore Fashion</h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          Discover products for men, women, and kids from top fashion platforms.
        </p>
      </div>

      {/* Control Bar */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search clothes, platforms..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black transition text-sm"
          />
        </div>

        {/* Gender Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {GENDERS.map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                selectedGender === gender
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full"
          >
            <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm z-10">
                {product.platform}
              </span>

              <button
                onClick={() => onSelectTryOn && onSelectTryOn(product)}
                className="absolute inset-x-4 bottom-4 bg-black/90 hover:bg-black text-white py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg z-10"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Try On with AI
              </button>
            </div>

            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="font-semibold text-base line-clamp-1">{product.title}</h3>
                <p className="text-gray-500 text-xs mt-0.5">
                  {product.gender} • {product.category}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-lg">{product.price}</span>
                <a
                  href={product.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-black hover:bg-gray-100 transition"
                  title={`View on ${product.platform}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No fashion items found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}