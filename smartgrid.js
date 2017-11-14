var smartgrid = require('smart-grid');

var settings = {
  outputStyle: 'scss',  
  columns: 24,
  offset: '1%',
  mobileFirst: true,
  container: {
    minWidth: '320px',
    maxWidth: '1300px',
    fields: '10px'
  },
  breakPoints: {
    desktop: {
      width: "1020px",
      fields: "30px"
    },
    tablet: {
      width: "660px",
      fields: "20px"
    }
  },
  tab: "  "
};

smartgrid('./src/sass/helpers', settings);