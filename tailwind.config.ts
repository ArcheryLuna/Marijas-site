import type { Config } from "tailwindcss"

// Acternity UI stuff
const colors = require("tailwindcss/colors");
const svgToDataUri = require("mini-svg-data-uri");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
    darkMode: ["class"],
    content: [
        './page/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        fontFamily: {
            sans: ["owners-wide", "sans-serif"],
            display: ["gigalypse", "sans-serif"],
        },
        extend: {
            boxShadow: {
                input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
            },
            backgroundImage: {
                "collage-background": "url('/collage.webp')",
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                scroll: {
                    to: { 
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
                spotlight: {
                    "0%": {
                        opacity: "0",
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
                "aurora": {
                    "from": {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    "to": {
                        backgroundPosition: "350% 50%, 350% 50%",
                    }
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
                spotlight: "spotlight 2s ease .75s 1 forwards",
                aurora: "aurora 60s linear infinite"
            },
        },
    },
    plugins: [require("tailwindcss-animate"),
        addVariablesForColors,
        function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    "bg-dot-thick": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
                        )}")`,
                    }),
                    "bg-grid-large": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    "bg-grid": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    "bg-grid-small": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    "bg-dot": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`,
                    }),
                    "bg-cloud": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="42" height="42" fill="none" stroke-linejoin="round" style="color: currentcolor;"><path d="M12 6.50879L11.25 6.50798L11.2492 7.20768L11.9472 7.25693L12 6.50879ZM12 6.5L12.75 6.50081V6.5H12ZM4 6.5H3.25L3.25 6.50081L4 6.5ZM4.00001 6.50879L4.05281 7.25693L4.75077 7.20767L4.75001 6.50798L4.00001 6.50879ZM4.25 12.75C2.73122 12.75 1.5 11.5188 1.5 10H0C0 12.3472 1.90279 14.25 4.25 14.25V12.75ZM11.75 12.75H4.25V14.25H11.75V12.75ZM14.5 10C14.5 11.5188 13.2688 12.75 11.75 12.75V14.25C14.0972 14.25 16 12.3472 16 10H14.5ZM11.9472 7.25693C13.3736 7.35759 14.5 8.54758 14.5 10H16C16 7.75454 14.2591 5.91635 12.0528 5.76065L11.9472 7.25693ZM11.25 6.49919L11.25 6.50798L12.75 6.50961L12.75 6.50081L11.25 6.49919ZM8 3.25C9.79493 3.25 11.25 4.70507 11.25 6.5H12.75C12.75 3.87665 10.6234 1.75 8 1.75V3.25ZM4.75 6.5C4.75 4.70507 6.20507 3.25 8 3.25V1.75C5.37665 1.75 3.25 3.87665 3.25 6.5H4.75ZM4.75001 6.50798L4.75 6.49919L3.25 6.50081L3.25001 6.5096L4.75001 6.50798ZM1.5 10C1.5 8.54758 2.62644 7.35759 4.05281 7.25693L3.94721 5.76065C1.74094 5.91635 0 7.75454 0 10H1.5Z" fill="${value}"></path></svg>`
                        )}")`,
                    }),
                },
                { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
            );
        }

    ],
} satisfies Config

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

export default config
