export function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  export function scrollToSection(offset: number) {
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
  