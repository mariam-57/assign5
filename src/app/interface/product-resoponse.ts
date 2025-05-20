import { Product } from "./product";

export interface ProductResoponse {
  limit: number;
  recipes: Product[];
  skip: number;
  total: number;
}
