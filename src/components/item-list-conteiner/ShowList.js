import ItemListContainer from "./ItemListContainer";
import Items from "./Items.js";
import { useState, useEffect } from "react";




const ShowList = ({ children }) => {

  const getInstruments = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Items);
      }, 2000);
    });
  };

  const [products, setProducts] = useState([])

  //   async function getCuerdas2() {
  //     const cuerdas = await getCuerdas();
  //     console.log("Async: ", cuerdas);
  //   }

  useEffect(() => {
    getInstruments().then((data) => {
      setProducts(data.promos)
    }).finally(() => {
      console.log("Termino la llamada")
    })
  })
  // console.log(
  //   getInstruments().then((data) => {
  //     console.log(data);
  //   })
  // );
  //   console.log(getCuerdas2());

  return (
    <div className="showItems">
      <h3>{children}</h3>
      {products.map((product) => {
        const { id } = product
        return (
          <ItemListContainer data={product} key={id}/>
        )
      })}
    </div>
  );
};

export default ShowList;


// <Stack
//         spacing={2}
//         direction="row"
//         divider={<Divider orientation="vertical" flexItem />}
//       >
//         <ItemListContainer
//           title="Chello"
//           typeInstrument="Cuerdas"
//           price={100}
//           stock={15}
//         />
//         <ItemListContainer
//           title="Saxo"
//           typeInstrument="Viento"
//           price={100}
//           stock={10}
//         />
//         <ItemListContainer
//           title="Timbal"
//           typeInstrument="Percucion"
//           price={100}
//           stock={5}
//         />
//         <ItemListContainer
//           title="Bajo"
//           typeInstrument="Electronico"
//           price={100}
//           stock={30}
//         />
//       </Stack>