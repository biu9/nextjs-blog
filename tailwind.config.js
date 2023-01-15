/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signIn': "url('../static/imgs/signIn.svg')",
        'avatar': "url('../static/imgs/avatar.jpg')",
        'github': "url('../static/imgs/github.png')",
        'email': "url('../static/imgs/email.png')",
        'QQ': "url('../static/imgs/QQ.png')",
        'explore': "url('../static/imgs/explore.png')",
        'code': "url('../static/imgs/code.png')",
        'intro': "url('../static/imgs/intro.jpg')",
        'nextjs': "url('../static/imgs/nextjs.png')",
        "node": "url('../static/imgs/node.png')",
        "materialUi": "url('../static/imgs/materialUi.png')",
        "tailwindcss": "url('../static/imgs/tailwindcss.png')",
       },
       outline: {
        explore: '2px solid #0000ff',
      }
    },
  },
  plugins: [],
}
