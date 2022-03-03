const NotesHeader = (props) => {
    if(props.notes.length === 0) {
        return "";
    };
    return (
        <h2>Latest notes</h2>
    );
};

export default NotesHeader;