import { IProduct } from "./product"

export class IPagination{
    pageIndex: number
    pageSize: number
    count: number
    data: IProduct[]
}

// export class Daum{
//     id: number
//     name: string
//     description: string
//     price: number
//     pictureUrl: string
//     productType: string
//     productBrand: string
// }