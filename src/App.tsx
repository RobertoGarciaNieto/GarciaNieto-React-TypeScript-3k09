import { AppProduct } from "./components/AppProduct/AppProduct";

export const App = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'2vh'}}>
      {/* <MiPrimerComponent text={"Texto desde propiedades"} color="red" fontSize={5}/>
      <ComponentCunter/>
      <ComponentUseEffect/> */}
      {/* <FormComponent/> */}
      <AppProduct />
    </div>
  );
};
