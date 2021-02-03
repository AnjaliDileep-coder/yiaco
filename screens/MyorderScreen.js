import React from 'react';
import { Text, AsyncStorage, Image } from 'react-native';
import { Container, Content, Button, Left, Body, List, ListItem, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      item: '',
      cartItems: []
    };
  }
  componentWillMount() {
    console.log("this.props.route")
    console.log(this.props.route)
    if (this.props.route.params) {
      this.setState({ item: this.props.route.params.item })
      console.log("item")
    }
    AsyncStorage.getItem("CART", (err, res) => {
      if (!res) {
        this.setState({ cartItems: [] });
      }
      else {
        this.setState({ cartItems: JSON.parse(res) });
        this.setState({ item: JSON.parse(res) })
      }
    });
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        <Content style={{ paddingRight: 10, paddingTop: 20 }}>
          <List>
            {this.renderItems()}
          </List>
          <Grid style={{ marginTop: 20, marginBottom: 10 }}>
            <Col style={{ paddingLeft: 10, paddingRight: 5 }}>
              <Button onPress={(item) => this.props.navigation.navigate("MainScreen", { item: this.state.item })} style={{ backgroundColor: "#00bfff" }} block iconLeft>
                <Text style={{ color: '#fdfdfd' }}>Continue Shopping..</Text>
              </Button>
            </Col>
          </Grid>
        </Content>

      </Container>
    );
  }
  renderItems() {
    let items = [];
    this.state.cartItems.map((item, i) => {
      items.push(
        <ListItem
          key={i}
          last={this.state.cartItems.length === i + 1}
          onPress={() => this.itemClicked(item)} >
          <Body >
            <Image style={{ width: 80, height: 80, }} source={item.image}></Image>
            <Text style={{ fontSize: 18, paddingTop: 20 }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 16, paddingLeft: 5, fontWeight: 'bold', marginBottom: 10, paddingTop: 10 }}>{item.price}</Text>
          </Body>
          <Left style={{ paddingTop: 100, paddingLeft: 20 }} >
            <Text >Quantity: {item.quantity >= 1 ? item.quantity : null}</Text>
          </Left>
        </ListItem>
      );
    });
    return items;
  }
  itemClicked(item) {
    Actions.product({ product: item });
  }
}
