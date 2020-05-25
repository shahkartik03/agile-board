import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import classNames from "classnames";
import "./index.scss";
import TextField from "@material-ui/core/TextField";

function ItemCard(props) {
  const [editing, setEditing] = React.useState(false);
  const {
    item, deleteItem, editItem, sectionId, className,
  } = props;
  const { label, id } = item;
  const onEditItem = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      editItem(sectionId, event.target.value, event.target.id);
      setEditing(false);
    }
  };
  if (editing) {
    return (
      <TextField
        id={id}
        label="Item details"
        helperText="Edit item details"
        variant="outlined"
        inputRef={(input) => input && input.focus()}
        onKeyDown={onEditItem}
      />
    );
  }
  return (
    <div key={id} className={classNames("Card", className)}>
      <EditIcon
        classes={{
          root: "Card__icons",
        }}
        onClick={() => setEditing(true)}
      />
      <span className="Card__label">{label}</span>
      <HighlightOffIcon
        classes={{
          root: "Card__icons",
        }}
        onClick={() => deleteItem(sectionId)}
      />
    </div>
  );
}

export default ItemCard;
