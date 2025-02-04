function checkApiKey(req, res, next) {
  const { apiKey } = req.query;

  //   if (!apiKey) return next();

  if (apiKey !== '12345') {
    return res.status(403).json({
      status: 888,
      message: 'You are not allowed to make this request',
    });
  }
  res.json({
    status: 777,
    message: 'Your key is accepted',
  });
}
export default checkApiKey;
