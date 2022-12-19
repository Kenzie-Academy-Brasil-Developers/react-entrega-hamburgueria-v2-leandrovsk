import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledInputSearch } from "./styles";

const InputSearch = () => {
  const { handleSearch}  = useContext(CartContext)

  return <StyledInputSearch placeholder="Digitar Pesquisa" type="text" onChange={(event) => handleSearch(event.target.value)} />;
};

export default InputSearch;