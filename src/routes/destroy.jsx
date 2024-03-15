import { redirect } from "react-router-dom";
import { deleteTaco } from "../tacos";

export async function action({ params }) {
  await deleteTaco(params.tacoId);
  return redirect("/");
}