const { z } = require("zod");

const authSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(3),
  email: z.string().email(),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/),
});

const validateAuth = (req, res, next) => {
  const { email, password } = req.body;

  try {
    authSchema.safeParse(email, password);
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = validateAuth;
