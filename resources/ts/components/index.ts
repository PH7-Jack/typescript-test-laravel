import dropdown from './dropdown'

dropdown.open()

declare global {
    interface Window {
        dropdown: any // todo: implement dropdown interface
    }
}

window.dropdown = dropdown
