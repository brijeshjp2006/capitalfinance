import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: "199.79.63.39",
    database: "theproje_reactapi",
    user: "theproje_react",
    password: "react@9#",
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}