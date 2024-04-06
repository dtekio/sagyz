import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Supply from "../../../ethereum/supply";
import RequestRow from "../../../components/RequestRow";

BigInt.prototype.toJSON = function() {       
  return this.toString()
}

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const supply = Supply(address);
    const requestsCount = await supply.methods.getRequestsCount().call();
    const approversCount = await supply.methods.approversCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestsCount))
        .fill()
        .map((element, index) => {
          return supply.methods.requests(index).call();
        })
    );

    return { address, requests, requestsCount, approversCount };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approversCount={this.props.approversCount}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h3>Запросы</h3>
        <Link route={`/supplies/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{marginBottom: 10}}>Создать запрос</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Описание (Название компаний, местоположение, количество перевозок, категория продукта, изменения состояния товара)</HeaderCell>
              <HeaderCell>Кол-во</HeaderCell>
              <HeaderCell>Получатель</HeaderCell>
              <HeaderCell>Кол-во одобрений</HeaderCell>
              <HeaderCell>Одобрить</HeaderCell>
              <HeaderCell>Завершить</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <div>Кол-во запросов - {this.props.requestsCount.toString()}.</div>
      </Layout>
    );
  }
}

export default RequestIndex;
