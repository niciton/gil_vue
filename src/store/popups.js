
export const popups = {
    state: () => ({
        popups: {},
    }),
    mutations: {
        openPopup(state, popup) {
            state.popups[popup].classList.add('open');
        },
        closePopup(state, popup) {
            console.log(popup)
            state.popups[popup].classList.remove('open');
        },
        addPopup(state, newPopup) {
            state.popups[newPopup.name] = newPopup.body;
        },
        closePopups(state, className) {
            for (const popup in state.popups) {
                if (!(className == popup)) state.popups[popup].classList.remove('open');
            }
        },
    },
    namespaced: true,
};