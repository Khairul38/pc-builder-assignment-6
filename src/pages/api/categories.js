import { DBConnect, client } from "@/utils/DBConnect";

const categories = async (req, res) => {
  await DBConnect();

  const categoriesCollection = client.db("pcbbd").collection("categories");

  if (req.method === "GET") {
    const categories = await categoriesCollection.find({}).toArray();
    res.send(categories);
  }
};

export default categories;

// export default async function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
