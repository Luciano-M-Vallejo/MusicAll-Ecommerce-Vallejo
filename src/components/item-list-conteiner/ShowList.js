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
          typeInstrument="cuerdas"
          price={100}
        />
        <ItemListContainer title="Saxo" typeInstrument="viento" price={100} />
        <ItemListContainer
          title="Timbal"
          typeInstrument="percucion"
          price={100}
        />
        <ItemListContainer
          title="Bajo"
          typeInstrument="electronico"
          price={100}
        />
      </Stack>
    </div>
  );
};

export default ShowList;
