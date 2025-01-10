export enum ProductCategory {
  Shirts = "shirts",
  Pants = "pants",
  Shoes = "shoes",
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  cover: string;
  coverCredits: string;
  category: ProductCategory;
}

export const products: Product[] = [
  {
    id: 32,
    name: "呆呆獸",
    slug: "0079-呆呆獸",
    price: 129,
    description:
      "水屬性／超能力屬性寶可夢，伽勒爾的樣子則是超能力屬性寶可夢。",
    cover: "https://i.ibb.co/Pc7jKQw/AppIcon.png",
    coverCredits:
      "https://ibb.co/0Cg2Tth",
    category: ProductCategory.Shirts,
  },
  {
    id: 18,
    name: "拿鐵-熊熊拉花",
    slug: "拿鐵",
    price: 199,
    description:
      "濃郁的義式濃縮咖啡、絲滑的牛奶和柔順的奶泡，完美用牛奶呈現和諧平衡口感。",
    cover: "https://i.ibb.co/j8Z1KJs/IMG-9115.jpg",
    coverCredits:
      "https://ibb.co/BfKSDnF",
    category: ProductCategory.Shirts,
  },
  {
    id: 21,
    name: "快龍－嚕嚕咪",
    slug: "快龍",
    price: 59,
    description:
      "龍屬性／飛行屬性寶可夢。",
    cover: "https://i.ibb.co/y4XRYCk/IMG-6143.jpg",
    coverCredits:
      "https://ibb.co/9ZNvV04",
    category: ProductCategory.Shirts,
  },

  {
    id: 49,
    name: "T-Shirt 705",
    slug: "t-shirt-32",
    price: 99,
    description:
      "Stay Cool and Dry with the T-Shirt 705 from Ryan Hoffman Collection. Relax, run, dream.",
    cover: "/products/ryan-hoffman-6Nub980bI3I-unsplash.webp",
    coverCredits:
      "https://unsplash.com/photos/6Nub980bI3I?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
];
