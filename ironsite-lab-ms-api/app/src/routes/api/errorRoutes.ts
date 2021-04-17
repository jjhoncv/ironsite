export const errorRoutes = (req, res) => {
  res.json({
    status: false,
    message: "Endpoint not exists in API",
  });
};
