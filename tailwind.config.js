/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter',
      },
      backgroundColor: {
        'Grey': 'hsl(0, 0%, 20%)',
        'Dark-Grey': 'hsl(0, 0%, 12%)',
        'Off-Black': 'hsl(0, 0%, 8%)',
      },
      backgroundImage: {
        'avatar-jessica': "url('../src/assets/images/avatar-jessica.jpeg')",
      },
      textColor: {
        'Green': 'hsl(75, 94%, 57%)',
        'White': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

