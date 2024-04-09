import ItemFrut from "./ItemFrut";
const ListFruts = ({fruts}) => {
  return (
    <ul className="listFruts">
      {fruts.map((frut, index) => (
        <ItemFrut key={index} frut={frut} />
      ))}
    </ul>
  );
};

export default ListFruts;
