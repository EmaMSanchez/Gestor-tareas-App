/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",], //(Se debe agregar MANUALMENTE) Aca se le dice a tailWind a que archivos le debe hacer seguimiento al compilar para limpiarse al compilarse el proyecto(crear el archivo final, con el BUILD)
  theme: {
    extend: {},
  },
  darkMode: 'class',  //Se agrega esto para sacar la configuracion por defecto del sistema operativo
  plugins: [],
  
}

