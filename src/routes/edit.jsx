import { useState } from "react";
import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
  } from "react-router-dom";
import { updateTaco } from "../tacos";
import TacoContainer from "./../components/tacoContainer";
import TacoOptions from "./../components/tacoOptions";

let formOptions = [];

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateTaco(params.tacoId, updates);
    return redirect(`/tacos/${params.tacoId}`);
}

export default function EditTaco() {
  const { taco } = useLoaderData();
  const navigate = useNavigate();
  const optionsArr = taco.postOptions?.length ? taco.postOptions.split(',') : [];
  const [options, setOptions] = useState(optionsArr);

const addOption = (e) => {
    let l = options.length; 
    if (l < 10) { 
      const optionsStack = [...options];
      optionsStack.unshift('' + e.target.className +'');
      setOptions(optionsStack);  
    } 
    else { 
        alert('Your Taco is FULL!'); 
    } 
} 

const resetOptions = () => {setOptions([])}

  return (
    <>
      <ul className="taco-row edit-row">
        <li>
          <TacoContainer name={taco.taconame} selection={options}/>
        </li>
      </ul>
      <div className="edit-form">
        <Form method="post" id="taco-form">
          <div>
            <span className="field-label">Name</span>
            <input
              placeholder="Name that taco."
              aria-label="taconame"
              type="text"
              name="taconame"
              defaultValue={taco.taconame}
              required
            />
            <button className="refresh-button" type="button" onClick={resetOptions}>&nbsp;</button>
          </div>
          <div>
            <TacoOptions addOption={addOption}/>
            <input type="hidden" id="postOptions" name="postOptions" value={options} />
          </div>
          <div>
            <button
              className="back-button"
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >Back</button>
            <button type="submit">Save</button>
          </div>
        </Form>
      </div>
    </>
  );
}