const cdn77 = require("cdn77");

exports.getApi = async (req, res) => {
  const { url } = req.body;

  const singer = await cdn77(process.env.WEB_URL, process.env.CDN77_API, true);

  var now = Math.floor(new Date() / 1000);

  // response valid for 5 min
  var cdn77res = await singer(url, now + 5 * 60);

  return res.send(cdn77res);
};
