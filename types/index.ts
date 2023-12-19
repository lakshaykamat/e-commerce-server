export type productType = {
    name:String,
    description:String,
    details:String
    image:String
    price:number,
    slug:String
    sellerDetails:{
        sellerName:String,
        rating:number,
        available:number,
        soldOut:number
    }
}