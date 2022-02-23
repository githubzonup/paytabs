import {RNPaymentSDKLibrary, PaymentSDKConfiguration, PaymentSDKBillingDetails, PaymentSDKTheme, PaymentSDKConstants} from '@paytabs/react-native-paytabs';

export const paytabsConfig = () => {
  let billingDetails = new PaymentSDKBillingDetails(name= "John Smith",
                                  email= "email@test.com",
                                  phone= "+2011111111",
                                  addressLine= "address line",
                                  city= "Dubai",
                                  state= "Dubai",
                                  countryCode= "ae", // ISO alpha 2
                                  zip= "1234")

  // let shippingDetails = new PaymentSDKShippingDetails(name= "John Smith",
  //                                   email= "email@test.com",
  //                                   phone= "+2011111111",
  //                                   addressLine= "address line",
  //                                   city= "Dubai",
  //                                   state= "Dubai",
  //                                   countryCode= "ae", // ISO alpha 2
  //                                   zip= "1234")

  let configuration = new PaymentSDKConfiguration();
  configuration.profileID = "85527";
  configuration.serverKey= "S6JNBJNDR9-J2TH6JK6N6-MNM2BDLHKG";
  configuration.clientKey = "CHKMP9-2M9V6M-7HG6KG-M2VPP7";
  configuration.cartID = "545454";
  configuration.currency = "SAR";
  configuration.cartDescription = "Flowers";
  configuration.merchantCountryCode = "ae";
  configuration.merchantName = "Flowers Store";
  configuration.amount = 20;
  configuration.screenTitle = "Pay with Card";
  configuration.billingDetails = billingDetails;
  configuration.forceShippingInfo = false;

  configuration.showBillingInfo = true;
  configuration.simplifyApplePayValidation = true;
  // configuration.showShippingInfo = true;
  return configuration;
}
