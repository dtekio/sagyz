import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class SupplyIndex extends Component {
  static async getInitialProps() {
    const supplies = await factory.methods.getDeployedSupplies().call();

    return { supplies };
  }
  renderSupplies() {
    const items = this.props.supplies.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/supplies/${address}`}>
            <a>Просмотреть данные поставки</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <h3>Открытые поставки</h3>
          <Link route="/supplies/new">
            <a>
              <Button
                floated="right"
                content="Создать поставку"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderSupplies()}
        </div>
      </Layout>
    );
  }
}

export default SupplyIndex;
