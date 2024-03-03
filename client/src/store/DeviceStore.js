import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 4, name: 'Смартфоны' }

        ]

        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 4, name: 'Xiaomi' }

        ]


        this._devices = [
            { id: 1, name: '15 pro', price: 210000, rating: 0, img: null },
            { id: 2, name: 'A54', price: 32000, rating: 0, img: null },

        ]
        
        makeAutoObservable(this)

    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands

    }

    setDevices(devices) {
        this._devices = devices
    }

    
    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}