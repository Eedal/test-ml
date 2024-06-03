import { FormEvent, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./SearcBar.scss";
import "../shared/form/Input/Input.scss";
import "../shared/form/IconButton/IconButton.scss";

function SearchBar() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/items?search=${inputRef.current?.value}`);
  };

  return (
    <form className={"search-bar"} onSubmit={handleSubmit}>
      <input
        className="input-search"
        type="text"
        name="search"
        placeholder="Nunca dejes de buscar"
        ref={inputRef}
        required
      />
      <button
        className="btn-icon btn-icon-search"
        type="submit"
        style={{
          height: "100%",
        }}
      >
        <AiOutlineSearch
          style={{
            width: 18,
            height: 18,
          }}
        />
      </button>
    </form>
  );
}

export default SearchBar;
