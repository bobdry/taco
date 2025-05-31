import {
  useLoaderData,
  Form,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import { getTaco, updateTaco } from "../tacos";
import TacoContainer from "./../components/tacoContainer";
import ConfirmationModal from "./../components/confirmationModal"
import { useState } from 'react';

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
  const [isModalOpen, setModalOpen] = useState(false);
  const submit = useSubmit();

  const handleConfirmDelete = () => {
    setModalOpen(false);
    const formData = new FormData();
    formData.append('tacoId', taco.Id);

    submit(formData, {
      method: 'post',
      action: `destroy`,
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
          &nbsp;
          </button>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            className="delete-form"
            method="post"
            action="destroy"
            onSubmit={(event) => {
              setModalOpen(true);
              event.preventDefault();
            }}
          >
            <button 
              className="delete-button"
              type="submit"
            >
            &nbsp;
            </button>
          </Form>
        </div>
      </div>
      <ConfirmationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirmDelete} 
      />
    </div>
  );
}
