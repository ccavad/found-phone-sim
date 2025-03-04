import { createTheme } from "@shopify/restyle";

const sizing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 48,
};

const palette = {
  black: "#0A0A0A",
  darkGray: "#1C1C1E",
  mediumGray: "#2C2C2E",
  lightGray: "#3A3A3C",
  white: "#FFFFFF",
  primary: "#00ADB5", // Teal for accent
  secondary: "#393E46", // Dark blue-gray
  error: "#E94560", // Bright red for alerts
  success: "#6BCB77", // Soft green
};

const theme = createTheme({
  colors: {
    // Background colors
    background: palette.black,
    backgroundSecondary: palette.darkGray,

    // Text colors
    text: palette.white,
    textSecondary: palette.lightGray,

    // Accent and functional colors
    primary: palette.primary,
    secondary: palette.secondary,
    black: palette.black,
    white: palette.white,

    // Functional colors
    error: palette.error,
    success: palette.success,

    transparent: "transparent",
    darkOverlay: "rgba(0, 0, 0, 0.5)",
  },

  spacing: sizing,
  padding: sizing,

  borderRadii: {
    xs: 2,
    s: 6,
    m: 10,
    l: 16,
    xl: 25,
    xxl: 36,
  },

  shadows: {
    primary: {
      shadowColor: palette.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 5,
    },
    secondary: {
      shadowColor: palette.secondary,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
  },

  textVariants: {
    header: {
      fontFamily: "ShopifySans-Bold",
      fontWeight: "bold",
      fontSize: 34,
      lineHeight: 42.5,
      color: "text",
    },
    subheader: {
      fontFamily: "ShopifySans-SemiBold",
      fontWeight: "600",
      fontSize: 28,
      lineHeight: 36,
      color: "text",
    },
    body: {
      fontFamily: "ShopifySans",
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    caption: {
      fontFamily: "ShopifySans",
      fontSize: 12,
      lineHeight: 16,
      color: "textSecondary",
    },
    button: {
      fontFamily: "ShopifySans-Bold",
      fontSize: 16,
      color: "white",
      textAlign: "center",
    },
  },

  cardVariants: {
    defaults: {
      backgroundColor: "backgroundSecondary",
      borderRadius: "m",
      padding: "m",
    },
    elevated: {
      ...this.defaults,
      shadowColor: "primary",
      elevation: 5,
      shadowOpacity: 0.3,
    },
    outlined: {
      ...this.defaults,
      borderWidth: 1,
      borderColor: "lightGray",
    },
  },
});

export default theme;
export { palette };
