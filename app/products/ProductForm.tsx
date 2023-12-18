import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";


const ProductForm = () => {
    return (
        <SheetHeader>
          <SheetTitle>Add new Item</SheetTitle>
          <SheetDescription className="max-w-xl mx-auto">
              <div className="grid my-4 grid-cols-2 gap-6">
              <Input type="file" placeholder="Enter quantity"/>
              <Input type="text" placeholder="Enter Title"/>
              <Input type="number" placeholder="Enter Quantity"/>
              <Input type="number" placeholder="Enter Price"/>
              </div>
              <Button>Publish item</Button>
          </SheetDescription>
        </SheetHeader>
    );
  };

  export default ProductForm