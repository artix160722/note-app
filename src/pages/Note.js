import { useNavigate, Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

const Note = (props) => {
    const navigate = useNavigate();
    const noteTimestamp = parseFloat(window.location.pathname.slice(1));
    const selectedNote = props.notes.find(note => note.additionTimestamp === noteTimestamp);
    
    const handleDelete = () => {
        props.notepad.delete(noteTimestamp);
        navigate("/");
    };

    return (
        <div>
            <div className="noteActions">
                <Link to={"/"}>
                    <button className="button">Go back</button>
                </Link>
                <button className="deleteButton" onClick={handleDelete}>Delete note</button>
            </div>
            <div className="notes">
                <div className="noteBox"> 
                    <div className="note">
                        <div className="selectedNoteText">
                            <ReactMarkdown>{selectedNote.noteText}</ReactMarkdown>
                        </div>
                        <p className="noteDate">{selectedNote.additionDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Note;