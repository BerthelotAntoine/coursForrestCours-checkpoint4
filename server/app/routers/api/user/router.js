const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  create,
  readAll,
  readOneById,
  update,
  destroy,
} = require("../../../controllers/userActions");
const hashPassword = require("../../../services/hashpassword");
const validateUser = require("../../../services/validation/userValidation");

router.post("/", validateUser, hashPassword, create);

router.get("/", readAll);

router.get("/:id", readOneById);

router.put("/:id", update);

router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
