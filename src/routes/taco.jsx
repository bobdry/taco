import {
  useLoaderData,
  Form,
  useNavigate,
} from "react-router-dom";
import { getTaco, updateTaco } from "../tacos";
import TacoContainer from "./../components/tacoContainer";

export async function action({ params }) {
  return updateTaco(params.tacoId);
}

export async function loader({ params }) {
  const taco = await getTaco(params.tacoId);
  if (!taco) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { taco };
}

export default function Taco() {
  const { taco } = useLoaderData();
  const navigate = useNavigate();
  const optionsArr = taco.postOptions.length ? taco.postOptions.split(',') : [];
  return (
    <div id="taco">
      <ul className="taco-row">
        <li>
          <TacoContainer name={taco.taconame} selection={optionsArr}/>
        </li>
      </ul>
      <div>
        <div className="taco-form">
          <button
            className="back-button"
            type="button"
            onClick={() => {
              navigate('/');
            }}
          >
          Back
          </button>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
