import { useState } from "react";
import { data } from "../../../data.js";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  const clearAll = () => {
    setPeople([]);
  };
  return (
    <section>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removePerson(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={clearAll}>
        clear all
      </button>
    </section>
  );
};

export default UseStateArray;
