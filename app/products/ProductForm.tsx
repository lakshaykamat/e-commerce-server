"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { createProduct } from "@/lib/sanity";
import { useState } from "react";

const ProductForm = () => {
  const [productForm,setProductForm] = useState({name:"",slug:"",imageURL:"",details:"",price:0})
  const handleForm = async(e:any)=>{
    e.preventDefault()
      const product = {
        name:productForm.name,
        slug:productForm.slug,
        imageURL:productForm.imageURL,
        details:productForm.details,
        price:productForm.price
      }
      const response = await createProduct(product)
      if(response){
        alert("Product Added to card")
      }
  }
  return (
    <SheetHeader>
      <SheetTitle>Add new Item</SheetTitle>
      <SheetDescription className="max-w-xl mx-auto">
        <form onSubmit={handleForm} className="grid my-4 grid-cols-2 gap-6">
          <Input value={productForm.imageURL} required onChange={(e)=>setProductForm({...productForm,imageURL:e.target.value})} type="text" placeholder="Image URL" />
          <Input value={productForm.name} required onChange={(e)=>setProductForm({...productForm,name:e.target.value})} type="text" placeholder="Enter Title" />
          <Input value={productForm.slug}  onChange={(e)=>setProductForm({...productForm,slug:e.target.value})} type="text" placeholder="Enter Slug" />
          <Input value={productForm.details} required onChange={(e)=>setProductForm({...productForm,details:e.target.value})} type="text" placeholder="Enter description" />
          <Input value={productForm.price} required onChange={(e)=>setProductForm({...productForm,price:parseInt(e.target.value)})} type="number" placeholder="Enter Price" />
        <Button>Publish item</Button>
        </form>
      </SheetDescription>
    </SheetHeader>
  );
};

export default ProductForm;
