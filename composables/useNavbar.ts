export const useNavbar = () => {
  const isScrolled = ref(false)
  const isMenuOpen = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Set initial state
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScrolled: readonly(isScrolled),
    isMenuOpen: readonly(isMenuOpen),
    toggleMenu,
    closeMenu
  }
}