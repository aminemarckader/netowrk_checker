
import React, { Component } from 'react';
import {useNetInfo} from "@react-native-community/netinfo";
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import NoWifi from './NoWifi';
// import NetInfo from "@react-native-community/netinfo";

// import Ping from 'react-native-ping';

// class App extends Component {

//   NetInfoSubscribtion = null;

//   constructor(props) {
//     super(props);
//     this.state = {
//       connection_status: false,
//       connection_type: null,
//       connection_net_reachable: false,
//       connection_wifi_enabled: false,
//       connection_details: null,
//     }
//   }

//   componentDidMount() {

//     this.NetInfoSubscribtion = NetInfo.addEventListener(
//       this._handleConnectivityChange,
//     );

//   }

//   componentWillUnmount() {
//     this.NetInfoSubscribtion && this.NetInfoSubscribtion();
//   }

//   _handleConnectivityChange = (state) => {
//     this.setState({
//       connection_status: state.isConnected,
//       connection_type: state.type,
//       connection_net_reachable: state.isInternetReachable,
//       connection_wifi_enabled: state.isWifiEnabled,
//       connection_details: state.details,
//     })
//   }

//   render() {
//     return (
//       <View style={styles.body}>
//         <Text style={styles.buttonText}>
//           Connection Status : {this.state.connection_status ? 'Connected' : 'Disconnected'}
//         </Text>
//         <Text style={styles.buttonText}>
//           Connection Type : {this.state.connection_type}
//         </Text>
//         <Text style={styles.buttonText}>
//           Internet Reachable : {this.state.connection_net_reachable ? 'YES' : 'NO'}
//         </Text>
//         <Text style={styles.buttonText}>
//           Wifi Enabled : {this.state.connection_wifi_enabled ? 'YES' : 'NO'}
//         </Text>
//         <Text style={styles.buttonText}>
//           Connection Details : {'\n'}
//           {this.state.connection_type === 'wifi' ?
//             (this.state.connection_details.isConnectionExpensive ? 'Connection Expensive: YES' : 'Connection Expensive: NO')
//               + '\n'
//               + 'ssid: ' + this.state.connection_details.ssid
//               + '\n'
//               + 'bssid: ' + this.state.connection_details.bssid
//               + '\n'
//               + 'strength: ' + this.state.connection_details.strength
//               + '\n'
//               + 'ipAddress: ' + this.state.connection_details.ipAddress
//               + '\n'
//               + 'subnet: ' + this.state.connection_details.subnet
//               + '\n'
//               + 'frequency: ' + this.state.connection_details.frequency
//             :
//             this.state.connection_type == 'cellular' ?
//               (this.state.connection_details.isConnectionExpensive ? 'Connection Expensive: YES' : 'Connection Expensive: NO')
//                 + '\n'
//                 + 'cellularGeneration: ' + this.state.connection_details.cellularGeneration
//                 +'\n'
//                 +'carrier: '+this.state.connection_details.carrier
//               :
//               '---'
//           }
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

// export default App;
export default App = () => {
  const netInfo = useNetInfo();
  return (
    <View style={styles.container}>

    {
      netInfo.isWifiEnabled? <Text>True</Text>: <NoWifi />
    }

    </View>
  );
}