import React from "react";
import { useDispatch } from "react-redux";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Tooltip } from "@material-ui/core";
import ItemCard from "@/components/ItemCard";
import "./index.scss";
import TextField from "@material-ui/core/TextField";
import {
  hideSection, removeItem, saveNewItem, showSection, updateItemDetails,
} from "../../redux/actions";

function Section(props) {
  const dispatch = useDispatch();
  const [addingItem, setAddingItem] = React.useState(false);
  const {
    id, name, items, hidden,
  } = props.sectionDetails;
  const addNewItem = () => {
    setAddingItem(true);
  };
  const onAddItem = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      dispatch(saveNewItem(event.target.value, event.target.id));
      setAddingItem(false);
    }
  };
  if (hidden) {
    return (
      <Tooltip title="Show Section" className="Section__showHideIcon" placement="top">
        <VisibilityIcon classes={{ root: "Section__visibleIcon" }} fontSize="large" onClick={() => dispatch(showSection(id))} />
      </Tooltip>
    );
  }
  return (
    <div className="Section">
      <Tooltip title="Hide Section" className="Section__showHideIcon" placement="top">
        <VisibilityOffIcon onClick={() => dispatch(hideSection(id))} />
      </Tooltip>
      <div className="Section__header">
        <span className="Section__label">{name}</span>
        <AddCircleIcon
          classes={{
            root: "Section__actionButton",
          }}
          onClick={addNewItem}
        />
      </div>
      {
                addingItem && (
                <TextField
                  id={id}
                  label="Item details"
                  helperText="Add new item details"
                  variant="outlined"
                  inputRef={(input) => input && input.focus()}
                  onKeyDown={onAddItem}
                />
                )
            }
      {
                !addingItem && (
                <div className="Section__items">
                  {items.length > 0 && items.map((item, index) => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      sectionId={id}
                      deleteItem={(sectionId) => dispatch(removeItem(index, sectionId))}
                      editItem={(sectionId, newVal, itemId) => dispatch(updateItemDetails(sectionId, newVal, itemId))}
                      {...props}
                    />
                  ))}
                </div>
                )
            }
    </div>
  );
}

export default Section;
