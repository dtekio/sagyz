import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Supply from "../ethereum/supply";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

class RequestRow extends Component {
  onApprove = async () => {
    const supply = Supply(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await supply.methods.approveRequest(this.props.id).send({
      from: accounts[0],
    });
  };

  onFinalize = async () => {
    const supply = Supply(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await supply.methods.finalizeRequest(this.props.id).send({
      from: accounts[0],
    });
  };
  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;

    const readyToFinalize =
      parseInt(request.approvalCount.toString()) >
      parseInt(approversCount.toString()) / 2;

    return (
      <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount.toString()}/{approversCount.toString()}
        </Cell>

        <Cell>
          {request.complete ? null : (
            <Button color="green" basic onClick={this.onApprove}>
              Одобрить
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>
              Завершить
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}
export default RequestRow;
