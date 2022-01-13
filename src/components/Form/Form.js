import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormStyled, Label, Input, AddButton } from "./Form.styled";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputNameId = uuidv4();
  const inputNumberId = uuidv4();

  const handleChange = (evt) => {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;
      case "number":
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = (e) => {
    e.preventDefault();

    const addedContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    onSubmit(addedContact);
    resetForm();
  };
  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <FormStyled onSubmit={handleAddContact}>
      <Label htmlFor={inputNameId}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          id={inputNameId}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor={inputNumberId}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          id={inputNumberId}
          onChange={handleChange}
        />
      </Label>

      <AddButton type="submit">Add to contacts</AddButton>
    </FormStyled>
  );
}
