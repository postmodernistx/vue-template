export default {
  methods: {
    isDevMode() {
      return process.env.NODE_ENV === 'development';
    },
    hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      } : null;
    },
    hexToRgbStringAlpha(hex, alpha) {
      const c = this.hexToRgb(hex);
      return `rgba(${c.r}, ${c.g}, ${c.g}, ${alpha})`;
    },
    stripTags(string) {
      return string.replace(/(<([^>]+)>)/gi, '');
    },
  },
};
