"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/sanity";
import { productType } from "@/types";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

const Products = () => {
  const productData = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div>
      <h1 className="mt-12">Products</h1>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData.isLoading ? (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        ) : (
          productData.data.map((product: productType) => {
            return (
              <ProductCard
                title={product.name}
                image={product.imageURL}
                description={product.details}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
export default Products;
