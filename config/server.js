module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3006),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "c0ae1be2d11c78f0a27550483a469d65"),
    },
  },
});
