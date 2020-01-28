const router = require("express").Router();
const productsService = require("../services/db services/products");
const productsOperation = require("../operations/products");

router.get("/allproducts", async (req, res) => {
  try {
    let products = await productsService.getAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/gender/:id", async (req, res) => {
  try {
    let products = await productsService.getAllByGender(req.params.id);
    res.status(200).send(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/product", async (req, res) => {
  try {
    let product = await productsService.addProduct(req.body);
    res.status(201).send(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id/rating", async (req, res) => {
  try {
    let product = await productsOperation.updateRating(
      req.params.id,
      req.body.rating
    );
    res.status(204).send(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let product = await productsService.getOneById(req.params.id);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let product = await productsService.deleteProduct(req.params.id);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
