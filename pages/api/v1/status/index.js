import database from "../../../../infra/database";

async function status(_, res) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  res.status(200).json({ status: "ok" });
}

export default status;
