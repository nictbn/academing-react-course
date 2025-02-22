import Input from "./Input.jsx";

export default function NewProject() {
    return (
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <div>
                <Input name="title" label="Title" isTextarea={false}/>
                <Input name="description" label="Description" isTextarea={true}/>
                <Input name="due-date" label="Due Date" isTextarea={false}/>
            </div>
        </div>
    )
}