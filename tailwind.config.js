module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand'],
    }
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    boxShadow: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
