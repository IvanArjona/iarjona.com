export function applyTheme(theme: string) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

if (localStorage.theme) {
  applyTheme(localStorage.theme);
} else {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }
}
