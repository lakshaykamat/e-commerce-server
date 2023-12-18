"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/sanity";
import { productType } from "@/types";
import ProductCard, { ProductCardSkeleton } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import ProductForm from "./ProductForm";

const Products = () => {
  const productData = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <div>
      <div className="mt-12 flex justify-between items-center">
        <h1>Products</h1>
        <Sheet>
          <SheetTrigger>
            <Button>
              <Plus className="mr-2" />
              New
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <ProductForm />
          </SheetContent>
        </Sheet>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData.isLoading ? (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        ) : (
          productData.isError ? <h1>Error :(</h1>
          :
          productData.data.map((product: productType) => {
            return (
              <ProductCard
              key={product._id}
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
