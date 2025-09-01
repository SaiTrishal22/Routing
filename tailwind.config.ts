import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
      },

      screens: {
        "2xl": "1400px",
        smd: "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        primaryblack: "#181616",
        primary: "rgba(var(--primary))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(95.1deg, #3357AA 0.6%, #BF1B39 101.33%)",
        login: "url('/src/assets/login-img.webp')",
      },
      boxShadow: {
        all: "0px 0px 64px 0px rgba(0, 0, 0, 0.15)",
        allSm: "0px 2px 6px 0px rgba(0, 0, 0, 0.16)",
      },
      height: {
        comments: "calc(100vh - 520px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out-to-top": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out-to-bottom": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out-to-left": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-to-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "progress-bar": "progress-bar 1.5s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "slide-in-from-top": "slide-in-from-top 0.5s ease-out",
        "slide-out-to-top": "slide-out-to-top 0.5s ease-in",
        "slide-in-from-bottom": "slide-in-from-bottom 0.5s ease-out",
        "slide-out-to-bottom": "slide-out-to-bottom 0.5s ease-in",
        "slide-in-from-left": "slide-in-from-left 0.5s ease-out",
        "slide-out-to-left": "slide-out-to-left 0.5s ease-in",
        "slide-in-from-right": "slide-in-from-right 0.5s ease-out",
        "slide-out-to-right": "slide-out-to-right 0.5s ease-in",
        "fade-in-0": "fade-in 0.5s ease-out",
        "fade-out-0": "fade-out 0.5s ease-in",
      },
      fontSize: {
        "responsive-text": "clamp(16px, 1.77vw, 40px)",
        smd: "13px",
        md: "15px",
      },
    },
  },
  plugins: [],
};

export default config;
