import InputField from "./InputField.jsx";
import {useRef} from "react";

export default function NewProject({onAdd}) {
    const title = useRef(null);
    const description = useRef(null);
    const dueDate = useRef(null);

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}>Save
                    </button>
                </li>
            </menu>
            <div>
                <InputField type="text" ref={title} label="Title"/>
                <InputField ref={description} label="Description" textarea/>
                <InputField type="date" ref={dueDate} label="Due Date"/>
            </div>
        </div>
    );
}