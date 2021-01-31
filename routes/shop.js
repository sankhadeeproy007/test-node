const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<html>Hello</html>');
});

module.exports = router;
