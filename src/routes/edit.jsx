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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    if (l < 8) { 
      const optionsStack = [...options];
      optionsStack.push('' + e.target.className + '');
      setOptions(optionsStack);  
    }  
    else { 
        toast.info('Your Taco is FULL!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          progress: false,
          theme: "dark",
        });
    } 
} 

const handleRemoveOption = (e) => {
  const listItem = e.target.parentElement;
  const listItemIndex = [...listItem.parentElement.children].indexOf(listItem);
  const filterOptions = options.filter((_, index) => index !== listItemIndex);
  setOptions([...filterOptions]); 
}

const resetOptions = () => {setOptions([])}

  return (
    <>
      <ul className="taco-row edit-row">
        <li>
          <TacoContainer name={taco.taconame} selection={options} handleClick={handleRemoveOption} editable={true} />
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
            >&nbsp;</button>
            <button type="submit">Save</button>
            <button className="refresh-button" type="button" onClick={resetOptions}>&nbsp;</button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </>
  );
}