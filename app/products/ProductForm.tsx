"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { createProduct } from "@/lib/sanity";
import { Check } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductForm = () => {
  const [productForm, setProductForm] = useState({
    name: "",
    slug: "",
    imageURL: "",
    details: "",
    price: 0,
    description: "",
    sellerName: "",
    available: 0,
    soldOut: 0,
    rating: 0,
  });

  const handleForm = async (e: any) => {
    e.preventDefault();
    const product = {
      name: productForm.name,
      slug:{
        current:productForm.slug,
        _type:'slug'
      },
      imageURL: productForm.imageURL,
      details: productForm.details,
      price: productForm.price,
      description: productForm.description,
      available: productForm.available,
      soldOut: productForm.soldOut,
      rating: productForm.rating,
    };
    console.log(product)
    const response = await createProduct(product);
    console.log(response)

    if (response) {
      toast.success(`${product.name} is Added to Card ✅`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <SheetHeader>
        <SheetTitle>Add new Item</SheetTitle>
        <SheetDescription className="max-w-xl mx-auto">
          <form onSubmit={handleForm} className="grid my-4 grid-cols-2 gap-6">
            <Input
              value={productForm.imageURL}
              required
              onChange={(e) =>
                setProductForm({ ...productForm, imageURL: e.target.value })
              }
              type="text"
              placeholder="Image URL"
            />
            <Input
              value={productForm.name}
              required
              onChange={(e) =>
                setProductForm({ ...productForm, name: e.target.value })
              }
              type="text"
              placeholder="Enter Title"
            />
            <Input
              value={productForm.slug}
              onChange={(e) =>
                setProductForm({ ...productForm, slug: e.target.value })
              }
              type="text"
              placeholder="Enter Slug"
            />
            <Input
              value={productForm.details}
              required
              onChange={(e) =>
                setProductForm({ ...productForm, details: e.target.value })
              }
              type="text"
              placeholder="Enter description"
            />
            <Input
              value={productForm.price}
              required
              onChange={(e) =>
                setProductForm({
                  ...productForm,
                  price: parseInt(e.target.value),
                })
              }
              type="number"
              placeholder="Enter Price"
            />
            <Input
              value={productForm.available}
              required
              onChange={(e) =>
                setProductForm({
                  ...productForm,
                  available: parseInt(e.target.value),
                })
              }
              type="number"
              placeholder="Enter Availiablity"
            />
            <Input
              value={productForm.soldOut}
              required
              onChange={(e) =>
                setProductForm({
                  ...productForm,
                  soldOut: parseInt(e.target.value),
                })
              }
              type="number"
              placeholder="Sold Out"
            />
            <Input
              value={productForm.sellerName}
              required
              onChange={(e) =>
                setProductForm({ ...productForm, sellerName: e.target.value })
              }
              type="text"
              placeholder="Enter seller name"
            />
            <Input
              value={productForm.rating}
              required
              onChange={(e) =>
                setProductForm({
                  ...productForm,
                  rating: parseInt(e.target.value),
                })
              }
              type="number"
              placeholder="Enter user rating"
            />
            <Button>
              <Check className="mr-2" /> Publish item
            </Button>
          </form>
        </SheetDescription>
      </SheetHeader>
    </>
  );
};

export default ProductForm;
