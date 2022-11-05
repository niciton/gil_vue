
export const menuClass = {
  state: () => ({
    menuClass: {},
  }),
  mutations: {
    setMenuClass(state, newClass) {
      state.menuClass = newClass;
    },
    addMenuClass(state, newClass) {
      state.menuClass[newClass] = false;
    },
    closeMenu(state, className) {
      for (const menu in state.menuClass) {
        if (!(className == menu)) state.menuClass[menu] = false;
      }
    },
    toggleMenuClass(state, toggleClass) {
      state.menuClass[toggleClass] = !state.menuClass[toggleClass];
    },
  },
  namespaced: true,
};