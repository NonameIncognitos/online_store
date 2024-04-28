import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 4, name: 'Смартфоны' },
            { id: 5, name: 'Удлинитель' },
            { id: 6, name: 'Ноутбуки' }

        ]

        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 4, name: 'Xiaomi' },
            { id: 5, name: 'Nokia' },
            { id: 6, name: 'Motorola' }

        ]


        this._devices = [
            { id: 1, name: '15 pro', price: 210000, rating: 0, img: null },
            { id: 2, name: 'A54', price: 32000, rating: 0, img: null },
            { id: 3, name: 'A55', price: 35000, rating: 0, img: null },
            { id: 4, name: 'A15', price: 16000, rating: 0, img: null },
            { id: 5, name: 'J5', price: 8500, rating: 0, img: null },
            { id: 6, name: 'J6', price: 9300, rating: 0, img: null }


        ]
        this._selectedType = {}
        this._selectedBrand = {}

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

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
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

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}