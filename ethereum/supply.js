import web3 from "./web3";
import Supply from "./build/Supply.json";

const supply = (address) => {
  return new web3.eth.Contract(JSON.parse(Supply.interface), address);
};
export default supply;
