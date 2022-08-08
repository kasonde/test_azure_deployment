module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5a1089370043ba919a416f67165d3ef6'),
  },
});
