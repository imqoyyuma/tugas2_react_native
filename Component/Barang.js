import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

class Barang extends Component {
    constructor(props){
        super(props);
        this.state={
            belanja: this.props.namabelanja,
            inputan:"",
            inputan2:""
        };
    }

    handleInput = (event) => {
        this.setState( {inputan: event} );
    }

    handleInput2 = (event) => {
        this.setState( {inputan2: event} );
    }


    render() {
        return(
            <View>
            <TextInput onChangeText={this.handleInput} placeholder="Masukkan Nama Barang" value={this.state.inputan} />
            <TextInput onChangeText={this.handleInput2} placeholder="Masukkan Jumlah" keyboardType="numeric" value={this.state.inputan2}/>
            <Text>{this.state.belanja}</Text>
            <Text>Nama Barang: {this.state.inputan}</Text>
            <Text>Jumlah Barang: {this.state.inputan2}</Text>
            </View>
        );
    }
}




export default Barang;