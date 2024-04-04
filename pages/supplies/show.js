import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Supply from "../../ethereum/supply";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

BigInt.prototype.toJSON = function() {       
  return this.toString()
}

class SupplyShow extends Component {
  static async getInitialProps(props) {
    const supply = Supply(props.query.address);

    const summary = await supply.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0].toString(),
      balance: summary[1].toString(),
      requestsCount: summary[2].toString(),
      approversCount: summary[3].toString(),
      manager: summary[4].toString(),
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Адрес создателя",
        description:
          "Кто создал эту поставку и может создавать запросы на вывод денег.",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        meta: "Минимальное пожертвование (wei)",
        description:
          "Вы должны внести хотя бы столько же wei, чтобы стать одобрителем.",
      },
      {
        header: requestsCount,
        meta: "Количество запросов",
        description:
          "Запрос пытается вывести деньги из контракта. Запросы должны быть одобрены одобрителями.",
      },
      {
        header: approversCount,
        meta: "Количество одобрителей",
        description:
          "Количество людей, которые уже сделали пожертвования на эту поставку",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Баланс кампании (ether)",
        description:
          "Баланс – это то, сколько денег осталось потратить на эту поставку.",
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Поставка</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/supplies/${this.props.address}/requests`}>
                <a>
                  <Button primary>Посмотреть запросы</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default SupplyShow;
