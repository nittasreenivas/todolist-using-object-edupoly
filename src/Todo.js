export default function Todo(props) {
  console.log("props:::", props);
  return (
    <div>
      <span className={props.t.status === true ? "a" : "b"}>
        {props.t.title}{" "}
      </span>
      {props.status === true ? (
        <button className="btn" onClick={() => props.handleUndo(props.i)}>
          {" "}
          Undo
        </button>
      ) : (
        <button className="btn" onClick={() => props.handleDone(props.i)}>
          {" "}
          Done
        </button>
      )}
      <button onClick={() => props.handleDelete(props.i)}>delete</button>
    </div>
  );
}
