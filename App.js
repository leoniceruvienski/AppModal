import React, { Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, Modal, Image, ScrollView} from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      modalVisible: false
     };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  entrar(){
    this.setState({modalVisible: true});
    
  }
  sair(visible){
    this.setState({modalVisible: visible});
  }

  render() {
    return(
      <View style={styles.container}>
        <Button title="Entrar" onPress={this.entrar}/>

        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={{backgroundColor: 'red', flex:1}}>
            <Text style={{color: '#FFF', fontSize: 28}}>Seja Bem Vindo!!!</Text>
            <Image 
            source={require('./src/img/DNS-3.png')}
            style={styles.logo}/>
             
            <Image
            source={require('./src/img/App-cronometro.png')}
            style={styles.logo2}
            />

        
            <Button title="Sair" onPress={ () => this.sair (false) }
            />
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 200,
    height: 200,
  },
  logo2:{
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    margin: 50,
  },
  logo3:{
    width: 200,
    height: 300,
  }
});
//teste
