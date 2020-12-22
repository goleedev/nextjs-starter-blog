const defaultSans = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const defaultSerif = [
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "Times",
  "serif",
];

module.exports = {
  purge: {
    mode: "all",
    content: [
      "./components/**/*.{js,ts,jsx,tsx,css}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: { deep: [/blur$/] },
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "new-red": "#739CA6",
        "new-light-red": "#99B8BF",
        "new-gray": "#2A2F33",
        "new-black": "#252525",
        "new-white": "#f7f7f7",
      },
      fontSize: {
        "7xl": "4.5rem",
      },
      spacing: {
        14: "3.375rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
            },
            "ol > li::before": {
              color: theme("colors.gray.700"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.700"),
            },
            a: {
              color: theme("colors.new-red"),
            },
            th: {
              color: theme("colors.new-black"),
            }
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.100"),
            blockquote: {
              borderLeftColor: theme("colors.gray.300"),
            },
            "ol > li::before": {
              color: theme("colors.gray.300"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.300"),
            },
            a: {
              color: theme("colors.new-light-red"),
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            h4: {
              color: theme("colors.gray.100"),
            },
            h5: {
              color: theme("colors.gray.100"),
            },
            h6: {
              color: theme("colors.gray.100"),
            },
            strong: {
              color: theme("colors.gray.100"),
            },
            code: {
              color: theme("colors.gray.100"),
            },
            figcaption: {
              color: theme("colors.gray.100"),
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.200"),
            },
            th: {
              color: theme("colors.new-white"),
            }
          },
        },
      }),
    },
    fontFamily: {
      display: ["Noto Sans", ...defaultSans],
      body: ["Merriweather", ...defaultSerif],
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
};
