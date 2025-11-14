type Product = {
    id: number,
    name: string,
    price : string,
    stock : number,
    color?: string              
}

type ProductSummary = Pick<Product, "id" | "name" | "price">

type ProducWithoutStock = Omit<Product, "stock" | "color">;