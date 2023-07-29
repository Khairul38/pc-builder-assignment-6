import { DBConnect, client } from "@/utils/DBConnect";

const products = async (req, res) => {
  await DBConnect();

  const productsCollection = client.db("pcbbd").collection("products");

  if (req.method === "GET") {
    const products = await productsCollection.find({}).toArray();
    res.send(products);
  }
};

export default products;
