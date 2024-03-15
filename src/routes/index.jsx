import {
  NavLink,
  useLoaderData,
  Form,
  redirect,
} from "react-router-dom";
import { getTacos, createTaco } from "../tacos";
import TacoContainer from "./../components/tacoContainer";
import Signature from "./../components/signature";

export async function loader({ request }) {
  const url = new URL(request.url);
  const tacos = await getTacos();
  return { tacos };
}

export async function action() {
  const taco = await createTaco();
  return redirect(`/tacos/${taco.id}/edit`);
}

export default function Index() {
  const { tacos } = useLoaderData();
    return (
      <>
            {tacos.length ? (
              <ul className="taco-row">
                <li className="new-taco">
                <div className="taco-top"></div>
                  <Form method="post">
                    <button type="submit">New Taco</button>
                  </Form>
                  <p>Today!</p>
                </li>
                {tacos.map((taco) => {
                if(taco.taconame) { 
                  const optionsArr = taco.postOptions?.length ? taco.postOptions.split(',') : [];
                  return <li key={taco.id}>
                    <NavLink
                      to={`tacos/${taco.id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                          ? "pending"
                          : ""
                      }
                    >
                    <TacoContainer name={taco.taconame} selection={optionsArr}/>
                    </NavLink>
                  </li>
                }}
                )}
              </ul>
            ) : (
              <p>
                <i>No new tacos yet.</i>
              </p>
            )}
            <Signature />
      </>
    );
  }