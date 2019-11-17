const parseCookies = (req, res, next) => {
  var cookie = req.headers.cookie;

  var cookieArray = cookie.split(";");

  var cookieObj = {};

  for (var i = 0; i < cookieArray.length; i++) {
    var cookieKey = cookieArray[i].split("=")[0];
    var cookieVal = cookieArray[i].split("=")[1];

    cookieObj[cookieKey] = cookiVal;
  }

  return (req.cookies = cookieObj);
  next();
};

module.exports = parseCookies;
