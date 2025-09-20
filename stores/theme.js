import {defineStore} from 'pinia';

export const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
        mode: false // False for light mode, true for dark mode
    }),
    actions: {
        toggleMode() {
            this.mode = !this.mode;
            if (this.mode) {
                document.documentElement.classList.add('dark-mode');
                window.localStorage.setItem('mode', 'dark');
            } else {
                document.documentElement.classList.remove('dark-mode');
                window.localStorage.setItem('mode', 'light');
            }
        }
    }
});
