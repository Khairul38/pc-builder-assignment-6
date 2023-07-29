import { DBConnect, client } from "@/utils/DBConnect";
import { ObjectId } from "mongodb";

const singleProduct = async (req, res) => {
  await DBConnect();

  const productsCollection = client.db("pcbbd").collection("products");

  const { id } = req.query;
  
  const category = [
    "Processor",
    "Motherboard",
    "Graphics Card",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
    "Others",
  ];

  if (req.method === "GET") {
    if (category.includes(id)) {
      const products = await productsCollection
        .find({
          category: id,
        })
        .toArray();
      res.send(products);
    } else {
      const product = await productsCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(product);
    }
  }
};

export default singleProduct;
