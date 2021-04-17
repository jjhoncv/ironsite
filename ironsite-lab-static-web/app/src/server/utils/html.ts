import site from "./../constants/site";

const bundle = (view) => {
  let bundle = `${process.env.CLIENT_STATICS}/${view}.js`;
  if (process.env.NODE_ENV) {
    bundle = `${process.env.SERVER_STATICS}/js/${view}.min.js`;
  }
  return bundle;
};

const Html = ({ body, script, styles, view }) => {
  return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta charset="utf-8">
      <meta name="keywords" content="${site.keywords}">
      <meta name="description" content="${site.description}">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      <title>${site.title}</title>
      ${styles}      
    </head>
    <body>
      <div id="app">${body}</div>
      <div id="bg"></div>
      <script>var data = ${script}</script>
      <script src="${bundle(view)}"></script>
    </body>
  </html>
`;
};

export default Html;
