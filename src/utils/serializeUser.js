export const serializeUser = (user) => ({
  name: user.name,
  email: user.email,
  avatarUrl: user.avatarUrl,
});
