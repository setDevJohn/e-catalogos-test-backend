import { PrismaClient } from "@prisma/client";

class ProductsModel {
    private prisma

    constructor() {
        this.prisma = new PrismaClient();
    }

    public async getProducts() {
        const products = await this.prisma.products.findMany({
            select:{
                id: true,
                name: true,
                reference: true,
                price: true,
                category: true,
                description: true,
                brand: true,
                gender: true,
                images: {
                    select: {
                        id: true,
                        path: true
                    }
                },
                skus: {
                    select: {
                        id: true,
                        size: true,
                        stock: true,
                    }
                },
                colors: {
                    select: {
                        id: true,
                        name: true,
                        rgb: true,
                        hex_code: true,
                    }
                }
            }
        })
        
        return products;
    }

}

export { ProductsModel }