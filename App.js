import React, {Component} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {RNPaymentSDKLibrary, PaymentSDKConfiguration, PaymentSDKBillingDetails, PaymentSDKTheme, PaymentSDKConstants} from '@paytabs/react-native-paytabs';
import { paytabsConfig } from "./paytabs-config";

export default class App extends Component {
  pay = () => {
    console.log("paytabsConfig ===>", paytabsConfig())
        RNPaymentSDKLibrary.startCardPayment(JSON.stringify(paytabsConfig())).then( result => {
              if(result["PaymentDetails"] != null) { // Handle transaction details
                let paymentDetails = result["PaymentDetails"]
                console.log(paymentDetails)
              } else if(result["Event"] == "CancelPayment") { // Handle events
                console.log("Cancel Payment Event")
              }
             }, function(error) { // Handle error
              console.log("from error===>", error)
             });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TouchableOpacity onPress={this.pay}>
          <Text>Click me to pay</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
