import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCard = ({
  description,
  title,
  image,
}: {
  title: String;
  description: String;
  image: String;
}) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <img className="rounded-lg h-40 w-full" src={image.toString()}></img>
      </CardHeader>
      <CardContent className="flex-1">
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant={"outline"}>View Details</Button>
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
