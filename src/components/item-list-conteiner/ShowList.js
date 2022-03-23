import ItemListContainer from "./ItemListContainer";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";

const ShowList = ({ children }) => {
  return (
    <div>
      <h3>{children}</h3>
      <Stack
        spacing={2}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <ItemListContainer
          title="Chello"
          typeInstrument="Cuerdas"
          price={100}
          stock={15}
        />
        <ItemListContainer
          title="Saxo"
          typeInstrument="Viento"
          price={100}
          stock={10}
        />
        <ItemListContainer
          title="Timbal"
          typeInstrument="Percucion"
          price={100}
          stock={5}
        />
        <ItemListContainer
          title="Bajo"
          typeInstrument="Electronico"
          price={100}
          stock={30}
        />
      </Stack>
    </div>
  );
};

export default ShowList;
