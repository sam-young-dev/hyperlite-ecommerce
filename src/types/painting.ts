export interface Painting {
  _id: string;
  _type: "painting";
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  gallery?: Array<{
    asset: {
      _ref: string;
      _type: "reference";
    };
  }>;
  description?: string;
  price: number;
  medium?: string;
  dimensions?: {
    width: number;
    height: number;
  };
  year?: number;
  sold: boolean;
  featured: boolean;
  stripePaymentLink?: string;
}
