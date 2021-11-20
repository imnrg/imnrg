const actions = (state = 'home', action) => {
    switch (action.type) {
        case 'MENU_CLICKED':
        return action.current
        default:
        return state
    }
}
export default actions