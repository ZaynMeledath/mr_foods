export interface ProductItem {
  id: 'unniyappam' | 'ariyunda';
  name: string;
  malayalamName: string;
  tagline: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  details: {
    highlight: string;
    keyIngredients: string[];
    profile: string;
    servingNote: string;
  };
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'scroll' | 'users' | 'sparkles' | 'heart';
}

export interface CraftStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'delicacies' | 'ingredients' | 'heritage';
  image: string;
  caption: string;
}

export const BRAND_INFO = {
  name: 'MR Group Foods',
  logo: '/mr_group_logo.png',
  tagline: 'Tradition, Crafted with Love.',
  subtitle: 'A Little Taste of Kerala, Made with Love.',
  footerTagline: 'MR Group Foods – A Tradition Worth Sharing.',
  whatsappNumber: '919400902017', // Owner-configurable placeholder
  displayPhone: '+91 9400 90 2017',
  displayEmail: 'mrgroupkannur@gmail.com',
  displayAddress: 'Payyavoor, Kerala, India',
  instagramHandle: '@mr_group_foods',
  instagramUrl: 'https://instagram.com/mr_group_foods',
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'unniyappam',
    name: 'Unniyappam',
    malayalamName: 'ഉണ്ണിയപ്പം',
    tagline: 'Signature Traditional Delicacy',
    headline: 'The Little Sweetness of Kerala.',
    description:
      'A beloved Kerala delicacy made with rice, ripe bananas and jaggery, gently infused with cardamom and prepared to achieve its signature golden exterior and soft, flavourful centre.',
    image: '/images/unniyappam-signature.webp',
    imageAlt: 'Golden-brown Unniyappam on traditional Kerala brass plate',
    details: {
      highlight: 'Caramelised crust with a tender, aromatic core',
      keyIngredients: ['Rice', 'Ripe Bananas', 'Jaggery', 'Cardamom', 'Subtle Coconut Accents'],
      profile: 'Gentle sweetness, warm spice notes, and comforting melt-in-the-mouth texture.',
      servingNote: 'Best enjoyed warm alongside Kerala evening chai with family.',
    },
  },
  {
    id: 'ariyunda',
    name: 'Ariyunda',
    malayalamName: 'അരിയുണ്ട',
    tagline: 'Timeless Homemade Classic',
    headline: 'A Taste of Timeless Tradition.',
    description:
      'A traditional Kerala sweet made with roasted rice, jaggery and coconut, carefully shaped into delightful little bites filled with authentic homemade flavour.',
    image: '/images/ariyunda-signature.webp',
    imageAlt: 'Authentic roasted rice and coconut Ariyunda sweet bites in rustic presentation',
    details: {
      highlight: 'Wholesome roasted aroma and delicate coconut sweetness',
      keyIngredients: ['Roasted Rice', 'Dark Jaggery', 'Grated Coconut'],
      profile: 'Rustic texture, nutty roasted warmth, and rich jaggery sweetness.',
      servingNote: 'A nostalgic Kerala tea-time companion cherished across generations.',
    },
  },
];

export const DIFFERENCE_ITEMS: FeatureItem[] = [
  {
    id: 'authentic-recipes',
    title: 'Authentic Kerala Recipes',
    description: 'Inspired by traditional Kerala culinary heritage.',
    iconName: 'scroll',
  },
  {
    id: 'family-owned',
    title: 'Family-Owned Business',
    description: 'Built around family values and a love for traditional food.',
    iconName: 'users',
  },
  {
    id: 'selected-ingredients',
    title: 'Carefully Selected Ingredients',
    description: 'A commitment to quality ingredients and authentic flavours.',
    iconName: 'sparkles',
  },
  {
    id: 'made-with-love',
    title: 'Made with Love',
    description: 'Every product reflects our passion for traditional homemade delicacies.',
    iconName: 'heart',
  },
];

export const CRAFT_STEPS: CraftStep[] = [
  {
    step: '01',
    title: 'Carefully Selected Ingredients',
    subtitle: 'The Foundation of Authentic Taste',
    description:
      'Everything begins with the staples of Kerala’s soil: wholesome rice, sweet ripe native bananas, rich dark jaggery, fresh grated coconut, and fragrant pods of green cardamom.',
    image: '/images/ingredients.webp',
    alt: 'Traditional spices, cardamom and wholesome raw culinary ingredients',
  },
  {
    step: '02',
    title: 'Preparing the Rice & Jaggery Mixture',
    subtitle: 'Slow Infusion & Harmony',
    description:
      'The jaggery is gently melted into a fragrant syrup, then seamlessly combined with rice flour and naturally sweet bananas to form the distinct, flavour-rich batter.',
    image: '/images/ariyunda_preparation.webp',
    alt: 'Traditional slow preparation and blending of warm ingredients',
  },
  {
    step: '03',
    title: 'Traditional Unniyappam Preparation',
    subtitle: 'Golden Frying to Perfection',
    description:
      'Gently fried until the exterior forms its celebrated caramelised golden-brown crust, protecting a moist, fragrant and sponge-soft centre.',
    image: '/images/unniyappam-signature.webp',
    alt: 'Traditional Unniyappam golden frying preparation',
  },
  {
    step: '04',
    title: 'Shaping Ariyunda',
    subtitle: 'Roasted Rice & Handcrafted Care',
    description:
      'Wholesome rice is roasted to an aromatic toasted fragrance, blended while warm with jaggery and coconut, and shaped into delightful, nostalgic bite-sized spheres.',
    image: '/images/ariyunda-signature.webp',
    alt: 'Carefully shaping Ariyunda roasted rice and coconut balls',
  },
  {
    step: '05',
    title: 'Finished Products Ready to be Enjoyed',
    subtitle: 'Served with Pride and Warmth',
    description:
      'Plated on fresh banana leaves or arranged for family gatherings, every bite carries the timeless warmth of home and genuine Kerala hospitality.',
    image: '/images/hero-kerala-sweets.webp',
    alt: 'Finished Unniyappam and Ariyunda arranged on banana leaf and brass vessel',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Unniyappam Platter',
    category: 'delicacies',
    image: '/images/unniyappam-signature.webp',
    caption: 'Golden-brown Unniyappam with caramelised crust and cardamom aroma.',
  },
  {
    id: 'g2',
    title: 'Ariyunda Platter',
    category: 'delicacies',
    image: '/images/ariyunda-platter.webp',
    caption: 'Hand-rolled roasted rice and coconut Ariyunda arranged on an authentic platter.',
  },
  {
    id: 'g3',
    title: 'Heritage Uruli Presentation',
    category: 'heritage',
    image: '/images/hero-kerala-sweets.webp',
    caption: 'Traditional brass vessel presentation lined with fresh banana leaf.',
  },
  {
    id: 'g4',
    title: 'Pure Dark Jaggery & Rice',
    category: 'ingredients',
    image: '/images/jaggery_cubes.webp',
    caption: 'Unrefined natural jaggery providing authentic caramel depth.',
  },
  {
    id: 'g5',
    title: 'Crushed Cardamom & Coconut',
    category: 'ingredients',
    image: '/images/ingredients.webp',
    caption: 'Green cardamom pods and freshly grated coconut for signature fragrance.',
  },
  {
    id: 'g6',
    title: 'Our Signature Packaging',
    category: 'delicacies',
    image: '/images/packaging.webp',
    caption: 'Carefully sealed to preserve homemade freshness, texture, and authentic aroma.',
  },
  {
    id: 'g7',
    title: 'Kerala Kitchen Heritage',
    category: 'heritage',
    image: '/images/kerala-kitchen-hearth.webp',
    caption: 'Timeless warmth, traditional hearth, and warm family culinary memories.',
  },
  {
    id: 'g8',
    title: 'Traditional Evening Chai Moment',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    caption: 'The quintessential Kerala 4 PM tea-time sweet accompaniment.',
  },
];
