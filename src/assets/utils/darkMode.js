// On page load or when changing themes, best to add inline in `head` to avoid FOUC
   if (localStorage.theme === 'dark' || 
  (!('theme' in localStorage) && 
       window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark') //Agrega en el html header el elemento dark
        localStorage.theme = 'dark'
      } else {
       document.documentElement.classList.remove('dark') //Remueve en el html header el elemento dark
        localStorage.theme = 'light'
      }
//Esta funcion al INICIO (ANTES DE APP) comprueba si hay guardado en el local storage algun theme(tema guardado), si no lo hay guarda el tema por defecto del sistema operativo

// Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'
  
// Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
  
//   // Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme')