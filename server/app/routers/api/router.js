const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const userRouter = require("./user/router");

router.use("/user", userRouter);

const roleRouter = require("./role/router");

router.use("/role", roleRouter);

const courseRouter = require("./course/router");

router.use("/course", courseRouter);

const cityRouter = require("./city/router");

router.use("/city", cityRouter);

const categoryRouter = require("./category/router");

router.use("/category", categoryRouter);

/* ************************************************************************* */

module.exports = router;
