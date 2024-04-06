import web3 from './web3';
import SupplyFactory from './build/SupplyFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(SupplyFactory.interface),
 "0x0baA86cAfd3fC634412A56107924bAa72dB6Eb49"
);

export default instance;
