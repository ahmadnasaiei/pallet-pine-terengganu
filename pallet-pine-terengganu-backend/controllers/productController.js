import { sql } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;

    console.log("fetched products: ", products);
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error getProducts function", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const createProduct = async (req, res) => {
  const {
    code,
    customer,
    item,
    category,
    material,
    size,
    finishing,
    ability,
    accessories,
    image,
    price,
  } = req.body;

  if (
    !code ||
    !customer ||
    !item ||
    !category ||
    !material ||
    !size ||
    !finishing ||
    !ability ||
    !accessories ||
    !image ||
    !price
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const newProduct = await sql`
      INSERT INTO products(code, customer, item, category, material, size, finishing, ability, accessories, image, price)
      VALUES (${code}, ${customer}, ${item}, ${category}, ${material}, ${size}, ${finishing}, ${ability}, ${accessories}, ${image}, ${price})
      RETURNING *
    `;
    console.log("new product added: ", newProduct);

    res.status(200).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.log("Error createProduct function", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await sql`
      SELECT * FROM products WHERE id=${id}
    `;
    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.log("Error in getProduct function", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    code,
    customer,
    item,
    category,
    material,
    size,
    finishing,
    ability,
    accessories,
    image,
    price,
  } = req.body;

  try {
    const updateProduct = await sql`
      UPDATE products
      SET code=${code}, customer=${customer}, item=${item}, category=${category}, material=${material}, size=${size}, finishing=${finishing}, ability=${ability}, accessories=${accessories}, image=${image}, price=${price} 
      WHERE id=${id}
      RETURNING *
    `;
    if (updateProduct.length === 0) {
      res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: updateProduct[0] });
  } catch (error) {
    console.log("Error in updateProduct function", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await sql`
      DELETE FROM products
      WHERE id=${id}
      RETURNING *
    `;
    if (deletedProduct.length === 0) {
      res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: deletedProduct[0] });
  } catch (error) {
    console.log("Error in deleteProduct function", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
