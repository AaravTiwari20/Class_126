import * as React from "react";
import {Stylesheet,Text, View } from 'react-native';
import PickImage from "./screens/camera";

export default class App extends React.Component {
  render(){

  return (
    <PickImage/>
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
