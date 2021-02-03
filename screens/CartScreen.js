import React from 'react';
import { Alert, Text, AsyncStorage, Image } from 'react-native';
import { Container, Content, View, Icon, Button, Left, Right, Body, List, ListItem, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Navbar from '../src/components/Navbar';

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
    const { navigation } = this.props;
    var left = (
      <Left >
        <View style={styles.header}>
          <View>
            <Image style={styles.image} source={require("../assets/logo.jpg")} />
          </View>
        </View>
      </Left>
    );
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        <Navbar left={left} title="MY CART" />
        {this.state.cartItems.length <= 0 ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="ios-cart" size={38} style={{ fontSize: 38, color: '#95a5a6', marginBottom: 7 }} />
            <Text style={{ color: '#95a5a6' }}>Your cart is empty</Text>
          </View>
          :
          <Content style={{ paddingRight: 10 }}>
            <List>
              {this.renderItems()}
            </List>
            <Grid style={{ marginTop: 20, marginBottom: 10 }}>
              <Col style={{ paddingLeft: 10, paddingRight: 5 }}>
                <Button onPress={(item) => this.props.navigation.navigate("CartDetails", { item: this.state.item })} style={{ backgroundColor: "#00bfff" }} block iconLeft>
                  <Icon name='ios-card' />
                  <Text style={{ color: '#fdfdfd' }}>Checkout</Text>
                </Button>
              </Col>
              <Col style={{ paddingLeft: 5, paddingRight: 10 }}>
                <Button onPress={() => this.removeAllPressed()} style={{ borderWidth: 1, borderColor: "#00bfff" }}
                  block iconRight transparent>
                  <Text style={{ color: "#00bfff" }}>Emtpy Cart</Text>
                  <Icon style={{ color: "#00bfff" }} name='ios-trash-outline' />
                </Button>
              </Col>
            </Grid>
          </Content>
        }
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
          onPress={() => this.itemClicked(item)}>
          <Body >
            <Image style={{ width: 80, height: 80, }} source={item.image}></Image>
            <Text style={{ fontSize: 18, paddingTop: 20 }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, paddingTop: 20 }}>{item.price}</Text>
          </Body>
          <Left style={{ paddingTop: 100, paddingLeft: 50 }} >
            <Text >Quantity: {item.quantity >= 1 ? item.quantity : null}</Text>
          </Left>
          <Right>
            <Button style={{ marginLeft: -25 }} transparent onPress={() => this.removeItemPressed(item)}>
              <Icon size={30} style={{ fontSize: 30, color: '#95a5a6' }} name='ios-remove-circle-outline' />
            </Button>
          </Right>
        </ListItem>
      );
    });
    return items;
  }
  removeItemPressed(item) {
    Alert.alert(
      'Remove ' + item.title,
      'Are you sure you want this item from your cart ?',
      [
        { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => this.removeItem(item) },
      ]
    )
  }
  removeItem(itemToRemove) {
    let items = [];
    this.state.cartItems.map((item) => {
      if (JSON.stringify(item) !== JSON.stringify(itemToRemove))
        items.push(item);
    });
    this.setState({ cartItems: items });
    AsyncStorage.setItem("CART", JSON.stringify(items));
  }
  removeAllPressed() {
    Alert.alert(
      'Empty cart',
      'Are you sure you want to empty your cart ?',
      [
        { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => this.removeAll() }
      ]
    )
  }
  removeAll() {
    this.setState({ cartItems: [] })
    AsyncStorage.setItem("CART", JSON.stringify([]));
  }
  itemClicked(item) {
    Actions.product({ product: item });
  }
}
const styles = {
  header: {
    flexDirection: 'row',
    paddingTop: 30,
    backgroundColor: 'white',
    elevation: 5,
    paddingBottom: 20,
    paddingRight: 1000,
    left: -10
  },
  image: {
    width: 120,
    height: 30,
    paddingLeft: 80
  }
};
