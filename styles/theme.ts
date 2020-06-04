export default {
  fonts: {
    sans:
      'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
    mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    body:
      'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading: "inherit",
    monospace:
      'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.25,
    heading: 1.25,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: "#182026",
    background: "#F5F8FA",
    primary: "#347F99",
    secondary: "#6AB5CA",
    accent: "#C0707F",
    muted: "#5C7080",
    modes: {
      dark: {
        text: "#F5F8FA",
        background: "#202B33",
        primary: "#499BB8",
        secondary: "#73BFD9",
        muted: "#CED9E0",
      },
    },
  },
  buttons: {
    icon: {
      color: "text",
      "&:hover": {
        cursor: "pointer",
        color: "secondary",
        transition: "color 100ms ease",
      },
      "&:focus": {
        cursor: "pointer",
        color: "secondary",
        transition: "color 150ms ease",
      },
    },
  },
  text: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    detail: {
      color: "muted",
      fontSize: 1,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    h2: {
      color: "accent",
      py: 3,
    },
    a: {
      color: "primary",
      textDecoration: "underline",
      "&:hover": {
        cursor: "pointer",
        color: "secondary",
        transition: "color 150ms ease",
      },
      "&:focus": {
        cursor: "pointer",
        color: "secondary",
        transition: "color 150ms ease",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    hr: {
      borderColor: "muted",
    },
  },
};
