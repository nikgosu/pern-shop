import {makeAutoObservable} from "mobx"

export default class DeviceStore {
	constructor (){
		this._types = [
			{id: 1, name: 'Fridges'},
			{id: 2, name: 'Smartphones'},
			{id: 3, name: 'Notebooks'},
			{id: 4, name: 'TV'},
		]
		this._brands = [
			{id: 1, name: 'Sumsung'},
			{id: 2, name: 'Apple'},
			{id: 3, name: 'Lenovo'},
			{id: 4, name: 'Asus'}
		]
		this._devices = [
			{id: 1, name: 'Fold', rating: 5, img: 'https://storage.googleapis.com/twg-content/images/how-people-use-their-devices-lg.width-1200.jpg'},
			{id: 2, name: '11 pro', rating: 4, img: 'https://storage.googleapis.com/twg-content/images/how-people-use-their-devices-lg.width-1200.jpg'},
			{id: 3, name: 'Top 1', rating: 4, img: 'https://storage.googleapis.com/twg-content/images/how-people-use-their-devices-lg.width-1200.jpg'},
			{id: 4, name: 'M2', rating: 4, img: 'https://storage.googleapis.com/twg-content/images/how-people-use-their-devices-lg.width-1200.jpg'},
		]
		this._selectedType = {}
		this._selectedBrand = {}
		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}
	setBrands(brands) {
		this._types = brands
	}
	setDevices(devices) {
		this._types = devices
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