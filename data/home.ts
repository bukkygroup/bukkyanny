// Personal excerpts are copied verbatim from content/bukky-anny-original.txt.
export const homeCopy = {
  tagline: "A big heart. A busy imagination. Still figuring life out.",
  introduction:
    "Hello, I’m Adebukola Anifowose, but you probably know me as Bukky Anny.",
  personality:
    "I build businesses, write my thoughts, love people and make little jokes that sometimes deserve a bigger audience. I am ambitious, playful and still navigating this thing called life.",
  business: "I started doing business at the age of 12.",
  writing:
    "I often express myself better through writing. The page gives me time to understand my feelings and find the words I mean.",
  invitation:
    "Explore my businesses, books, creative work and reflections on life.",
  youtube:
    "Find me on YouTube through Loud Thoughts with Bukky and Pose Like a Pro with Bukky.",
} as const;

// Original cover mappings and purchase destinations from Bukky Group's catalogue.
export const books = [
  {
    id: "slave-boss",
    mockup: { src: "/books/mockups/slave-boss.png", width: 1254, height: 1254 },
    title: "Slave Boss",
    cover: "/books/slave-boss.jpeg",
    width: 1320,
    height: 1595,
    href: "https://www.amazon.com/gp/product/B0DCGCFGNT",
  },
  {
    id: "the-flags",
    mockup: { src: "/books/mockups/the-flags.png", width: 1254, height: 1254 },
    title: "The Flags",
    cover: "/books/the-flags.jpeg",
    width: 1046,
    height: 1600,
    href: "https://www.amazon.com/Flags-Bukky-Anny-ebook/dp/B0GZ6YTQCF",
  },
  {
    id: "a-safe-place",
    mockup: {
      src: "/books/mockups/a-safe-place.png",
      width: 1254,
      height: 1254,
    },
    title: "A Safe Place",
    cover: "/books/a-safe-place.jpeg",
    width: 1154,
    height: 1600,
    href: "https://www.amazon.com/gp/product/B0GZ6GSY5X",
  },
  {
    id: "bond-not-blood",
    mockup: {
      src: "/books/mockups/bond-not-blood.png",
      width: 1254,
      height: 1254,
    },
    title: "Bond Not Blood",
    cover: "/books/bond-not-blood.jpeg",
    width: 1164,
    height: 1600,
    href: "https://www.amazon.com/gp/product/B0GZ68MG1L",
  },
] as const;

export const businesses = [
  {
    name: "Bukky Beauty World",
    category: "Beauty",
    href: "https://www.bukkygroup.com/salon",
    logo: "/brands/bukky-beauty-world.jpeg",
  },
  {
    name: "Bukky Beauty Academy",
    category: "Education",
    href: "https://www.bukkygroup.com/bukkybeautyacademy",
    logo: "/brands/bukky-beauty-academy.jpeg",
  },
  {
    name: "3S THE LABEL",
    category: "Fashion",
    href: "https://www.bukkygroup.com/fashion",
    logo: "/brands/3s-the-label.png",
  },
  {
    name: "July 18 Cosmetics",
    category: "Cosmetics",
    href: "https://www.bukkygroup.com/cosmetics",
    logo: "/brands/july-18-cosmetics.jpeg",
  },
  {
    name: "Bukky Anny Books",
    category: "Books",
    href: "https://www.bukkygroup.com/bukkyannybooks",
    logo: "/brands/bukky-anny-books.png",
  },
  {
    name: "Naijayum",
    category: "Food",
    href: "https://www.bukkygroup.com/naijayum",
    logo: "/brands/naijayum.jpeg",
  },
  {
    name: "Get Busy Foundation Africa",
    category: "Community",
    href: "https://www.bukkygroup.com/foundation",
    logo: "/brands/get-busy-foundation.png",
  },
] as const;
