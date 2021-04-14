import site from "./../constants/site";

const bundle = (view) => {
  let bundle = `${process.env.CLIENT_STATICS}/${view}.js`;
  if (process.env.NODE_ENV) {
    bundle = `${process.env.SERVER_STATICS}/${view}.min.js`;
  }
  return bundle;
};

const Html = ({ body, script, styles, view }) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${site.title}</title>
      ${styles}      
    </head>
    <body>
      <div id="app">${body}</div>
      <script>var data = ${script}</script>
      <script src="${bundle(view)}"></script>
    </body>
  </html>
`;
};

export default Html;
