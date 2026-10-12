export type Category = 'Semua' | 'Pria' | 'Wanita' | 'Kebaya' | 'Gamis';

export interface Product {
  id: string;
  name: string;
  category: Category[];
  price: number;
  image: string;
  gallery: string[];
  description: string;
  sizes: string[];
  badge?: string;
}

const defaultSizes = ['S', 'M', 'L', 'XL', '2XL'];
const defaultDesc = "Karya seni eksklusif dari BatiQyunik. Dibuat dengan material premium yang sejuk dan nyaman dipakai seharian. Menampilkan potongan presisi dan motif elegan yang memancarkan pesona kebudayaan dalam balutan gaya hidup modern.";

export const products: Product[] = [
  {
    id: '1',
    name: 'Kemeja Batik Pria Slimfit Sogan',
    category: ['Pria'],
    price: 1200000,
    image: 'image/seragamc1.jpg',
    gallery: ['image/seragamc1.jpg', 'image/seragamc1.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Dress Batik Wanita Modern Kutubaru',
    category: ['Wanita'],
    price: 1200000,
    image: 'image/kebaya1.jpg',
    gallery: ['image/kebaya1.jpg', 'image/kebaya1.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
    badge: 'Batik Tulis'
  },
  {
    id: '3',
    name: 'Kebaya Panjang 95',
    category: ['Kebaya', 'Wanita'],
    price: 475000,
    image: 'image/kebaya-panjnag-952.jpg',
    gallery: ['image/kebaya-panjnag-952.jpg', 'image/kebaya-panjnag-952.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '4',
    name: 'Kebaya Panjang 95',
    category: ['Kebaya', 'Wanita'],
    price: 475000,
    image: 'image/kebaya-panjang-951.jpg',
    gallery: ['image/kebaya-panjang-951.jpg', 'image/kebaya-panjang-951.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
    badge: 'Pre-Order'
  },
  {
    id: '5',
    name: 'Kebaya Baru',
    category: ['Kebaya', 'Wanita'],
    price: 1100000,
    image: 'image/kebaya-baru.jpg',
    gallery: ['image/kebaya-baru.jpg', 'image/kebaya-baru.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
    badge: 'Limited Edition'
  },
  {
    id: '6',
    name: 'Outer Batik Casual Motif Mega Mendung',
    category: ['Wanita'],
    price: 1200000,
    image: 'image/gamis1.jpg',
    gallery: ['image/gamis1.jpg', 'image/gamis1.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
    badge: 'Batik Cap'
  },
  {
    id: '7',
    name: 'Gamis Bordir Elegan Modern',
    category: ['Gamis', 'Wanita'],
    price: 1200000,
    image: 'image/gamis2.jpg',
    gallery: ['image/gamis2.jpg', 'image/gamis2.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '8',
    name: 'Kebaya Panjang 95',
    category: ['Kebaya', 'Wanita'],
    price: 475000,
    image: 'image/kebaya-panjang-95.jpg',
    gallery: ['image/kebaya-panjang-95.jpg', 'image/kebaya-panjang-95.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '9',
    name: 'Kebaya Panjang 130',
    category: ['Kebaya', 'Wanita'],
    price: 600000,
    image: 'image/kebaya-panjang-1302.jpg',
    gallery: ['image/kebaya-panjang-1302.jpg', 'image/kebaya-panjang-1302.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '10',
    name: 'Kebaya Panjang 130',
    category: ['Kebaya', 'Wanita'],
    price: 600000,
    image: 'image/kebaya-panjang-1301.jpg',
    gallery: ['image/kebaya-panjang-1301.jpg', 'image/kebaya-panjang-1301.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '11',
    name: 'Gamis Premium',
    category: ['Gamis', 'Wanita'],
    price: 1350000,
    image: 'image/gamis-premium.jpg',
    gallery: ['image/gamis-premium.jpg', 'image/gamis-premium.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '12',
    name: 'Kebaya Baru',
    category: ['Kebaya', 'Wanita'],
    price: 1100000,
    image: 'image/kebaya-baru1.jpg',
    gallery: ['image/kebaya-baru1.jpg', 'image/kebaya-baru1.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '13',
    name: 'Kebaya Magenta Premium Full Bordir',
    category: ['Kebaya', 'Wanita'],
    price: 1100000,
    image: 'image/kebaya-baru3.jpg',
    gallery: ['image/kebaya-baru3.jpg', 'image/kebaya-baru3.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '14',
    name: 'Kebaya Pair Set Biru Elektrik',
    category: ['Kebaya', 'Wanita'],
    price: 1200000,
    image: 'image/kebaya7.jpg',
    gallery: ['image/kebaya7.jpg', 'image/kebaya7.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '15',
    name: 'Kebaya Panjang 130',
    category: ['Kebaya', 'Wanita'],
    price: 600000,
    image: 'image/kebaya-panjang-130.jpg',
    gallery: ['image/kebaya-panjang-130.jpg', 'image/kebaya-panjang-130.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '16',
    name: 'Kebaya Cyan Bright Accent',
    category: ['Kebaya', 'Wanita'],
    price: 1200000,
    image: 'image/kebaya9.jpg',
    gallery: ['image/kebaya9.jpg', 'image/kebaya9.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '17',
    name: 'Gamis Premium',
    category: ['Gamis', 'Wanita'],
    price: 1350000,
    image: 'image/gamis-premium1.jpg',
    gallery: ['image/gamis-premium1.jpg', 'image/gamis-premium1.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '18',
    name: 'Kebaya Baru',
    category: ['Kebaya', 'Wanita'],
    price: 1100000,
    image: 'image/kebaya-baru2.jpg',
    gallery: ['image/kebaya-baru2.jpg', 'image/kebaya-baru2.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '19',
    name: 'Kebaya Panjang 95',
    category: ['Kebaya', 'Wanita'],
    price: 475000,
    image: 'image/kebaya-panjang-953.jpg',
    gallery: ['image/kebaya-panjang-953.jpg', 'image/kebaya-panjang-953.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
  {
    id: '20',
    name: 'Kebaya Kancing',
    category: ['Kebaya', 'Wanita'],
    price: 390000,
    image: 'image/kebaya-kancing.jpg',
    gallery: ['image/kebaya-kancing.jpg', 'image/kebaya-kancing.jpg'],
    description: defaultDesc,
    sizes: defaultSizes,
  },
];