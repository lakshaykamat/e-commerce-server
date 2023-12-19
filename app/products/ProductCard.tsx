import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { productType } from "@/types";

const ProductCard = (props: any) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <img className="rounded-lg w-full" src={props.image.toString()}></img>
      </CardHeader>
      <CardContent className="flex-1">
        <h3>{props.name}</h3>
        <p className="mt-2 text-sm">{props.description}</p>
        <div className="flex justify-between mt-3">
        <span className={`${props.sellerDetails.available < 150 && 'text-red-500'}`}><b>Stock: </b>{props.sellerDetails.available}</span>
        <span className={`${props.sellerDetails.soldOut > 150 && 'text-green-500'}`}><b>Available: </b>{props.sellerDetails.soldOut}</span>
        </div>
        <span><b>Seller: </b>{props.sellerDetails.sellerName}</span>
      </CardContent>
      <CardFooter className="flex justify-between gap-3">
        <h4>${props.price.toString()}</h4>
        {/* <Link href={`/products/${props.slug}`}>
        <Button>Edit</Button>
        </Link> */}
      </CardFooter>
    </Card>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-32 w-[250px]" />
      </CardHeader>
      <CardContent className="flex gap-6 flex-col">
        <Skeleton className="h-20" />
      </CardContent>
      <CardFooter className="flex gap-3">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
