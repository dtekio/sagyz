import web3 from './web3';
import SupplyFactory from './build/SupplyFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(SupplyFactory.interface),
 "0xcd65FC3E6CB920c1394686eE997Af71D8CeF4aea"
);

export default instance;
