import { request } from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title,
            this.desc = itemInfo.desc,
            this.newPrice = itemInfo.price,
            this.oldPrice = itemInfo.oldPrice,
            this.discount = itemInfo.discountDesc,
            this.discountBgColor = itemInfo.discountBgColor,
            this.columns = columns,
            this.services = services,
            this.realPrice = itemInfo.lowNowPrice
    }
}
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo,
            this.name = shopInfo.name,
            this.allGoods = shopInfo.cGoods,
            this.sells = shopInfo.cSells,
            this.fans = shopInfo.cFans,
            this.score = shopInfo.score
    }
}