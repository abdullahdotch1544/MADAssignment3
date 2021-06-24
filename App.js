import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TextInputComponent,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const history = [{ key: Math.random().toString(), op: 100 }];
  const [showModal, setShowModal] = useState(false);
  const [itemName, setItemName] = useState('');
  const [historylist, sethistorylist] = useState([]);
  const [chack, setchack] = useState(0);
  function clearhistory() {
    sethistorylist([]);
  }
 
  function savecalculation() {
    if (!itemName.trim()) {
      return;
    } else {
      sethistorylist([
        ...historylist,
        {
          key: Math.random().toString(),
          op: itemName,
        },
      ]);
      setItemName('');
    }
  }

  const removeItem = (itemkey) => {
    sethistorylist((list) => historylist.filter((item) => item.key != itemkey));
  };

 

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <View style={{ justifyContent: 'center'}}>
            <TextInput
              style={styles.input}
              placeholder="Enter Item Name"
              keyboardType="numeric"
              value={itemName}
              onChangeText={(val) => {
                setItemName(val);
              }}></TextInput>
          </View>
        </View>

        <Text>{'\n'}</Text>
        <Button title="Update" onPress={savecalculation}></Button>
        <Text>{'\n'}</Text>

        <Text>{'\n'}</Text>
        <View style={styles.container}>
          <Text style={{ alignSelf: 'left', fontWeight: 'bold' }}>
            Shopping Cart
          </Text>
          <ScrollView style={styles.scrollview}>
            {historylist.map((item) => (
              <TouchableOpacity key={item.key} activeOpacity={0.5}>
                <View style={styles.scrollViewItem}>
                  <Text>{item.op}</Text>
                  <Text>{item.dsc}</Text>
                  <Text>{item.fp}</Text>
                  <TouchableOpacity onPress={() => removeItem(item.key)}>
                    <View style={styles.crossview}>
                      <Text style={styles.cross}>X</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <Text>{'\n'}</Text>
        <Button title="Clear Shoppinng Cart" onPress={clearhistory}></Button>
        <Text>{'\n'}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    backgroundColor: '#04aa9e'
  },
  input: {
    alignSelf: 'center',
    borderWidth: 2,
    padding: 8,
    width: 200,
    margin: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  scrollViewItem: {
    borderWidth: 2,
    width: '100%',
    alignSelf: 'center',
    padding: 10,
    margin: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  scrollview: {
    width: '100%',
  },
  cross: {
    fontWeight: 'bold',
    color: 'red',
  },
  crossview: {
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 5,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
