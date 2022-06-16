import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import cx from "classnames";

import IconCheck from "./icons/IconCheck";
import IconDelete from "./icons/IconDelete";

const Todo = ({ className }) => {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),
          message: todoItem,
          done: false,
        },
        ...items,
      ]);
      setTodoItem("");
      // saveData(todoItem);
    }
  };
  const handleToggle = (id) => {
    const _items = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });
    setItems(_items);
  };

  const handleDelete = (id) => {
    const updatedTodo = [...items].filter((item) => item.id !== id);
    setItems(updatedTodo);
    // saveData(updatedTodo);
  };

  return (
    <div
      className={`h-[30rem] md:col-span-4 lg:col-span-4 my-5 md:mb-0 md:mt-7 flex justify-center md:justify-start ${className}`}
    >
      <div className=" rounded-3xl p-10 bg-gray-700 bg-opacity-30 shadow-md w-4/5 md:w-3/4 h-full tracking-wide overflow-y-scroll no-scrollbar">
        <form
          onSubmit={handleAdd}
          className="relative z-0 w-full mb-4 group"
          label="Add todo"
        >
          <input
            type="text"
            name="floating_text"
            className="block py-2 px-0 w-full text-gray-300 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-gray-100 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            placeholder=" "
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            required
          />
          <label
            htmlFor="floating_text"
            className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Add a task...
          </label>
        </form>
        <div className="text-sm font-semibold tracking-wide text-white pb-2">
          Not Completed
        </div>
        <ul>
          {items
            .filter(({ done }) => !done)
            .map(({ id, message, done }) => (
              <div className="text-gray-100 py-1.5 text-xs font-medium flex justify-between items-center">
                <li
                  key={id}
                  className={`${cx("item", {
                    done,
                  })}`}
                >
                  {message}
                </li>
                <div className="flex gap-x-2">
                  <button onClick={() => handleToggle(id)}>
                    <IconCheck />
                  </button>
                  <button onClick={() => handleDelete(id)}>
                    <IconDelete />
                  </button>
                </div>
              </div>
            ))}
        </ul>
        <div className="text-sm font-semibold tracking-wide text-white py-2">
          Completed
        </div>
        <ul>
          {items
            .filter(({ done }) => done)
            .map(({ id, message, done }) => (
              <div className="text-gray-200 py-1.5 text-xs font-medium flex justify-between items-center">
                <li key={id} className={cx("item", { done })}>
                  {message}
                </li>
                <div className="flex gap-x-2">
                  <button onClick={() => handleToggle(id)}>
                    <IconCheck />
                  </button>
                  <button onClick={() => handleDelete(id)}>
                    <IconDelete />
                  </button>
                </div>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
