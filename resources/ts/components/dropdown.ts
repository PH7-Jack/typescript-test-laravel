export interface Dropdown {
    state: Boolean
    toggle: Function
    close: Function
    open: Function
    set: (state: Boolean) => Dropdown
}

export const dropdown: Dropdown = {
    state: false,
    toggle() { this.state = !this.state },
    close() { this.state = false },
    open() { this.state = true },
    set(state) {
        this.state = state

        return this
    }
}

export default dropdown
