import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";
import NotesHeader from "../components/NotesHeader"

const NotepadFrontPage = (props) => {
    const [note, setNote] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.notepad.add(note);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='formBox'>
                    <p>Note</p>
                    <textarea 
                        rows="4" 
                        placeholder="Note text" 
                        className="formInput" 
                        required={true} 
                        value={note} 
                        onChange={(event) => setNote(event.target.value)} 
                    />
                    <div className='buttonBox'>
                        <button className="button">Add note</button>
                    </div>
                </div>
            </form>
            <div className="notes">
                <NotesHeader notes={props.notes} />
                {props.notes.map((mappedNote)=>(
                    <div className="noteBox" key={mappedNote.additionTimestamp}> 
                        <div className="note">
                            <div className="noteTop">
                                <div className="noteText">
                                    <ReactMarkdown>{mappedNote.noteText}</ReactMarkdown>
                                </div>
                                <div className="deleteButtonBox">
                                    <button className="deleteButton" onClick={() => props.notepad.delete(mappedNote.additionTimestamp)}>
                                        Delete note
                                    </button>
                                </div>
                            </div>
                            <div className="dateBox">
                                <Link className="date" to={`/${mappedNote.additionTimestamp}`}>{mappedNote.additionDate}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotepadFrontPage;