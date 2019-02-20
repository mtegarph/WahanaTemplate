import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Animated
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import Scroll from "./app/src/scroll";
import { Constants } from "expo";
import Konter from "./app/src/counter";

const FirstRoute = () => (
  <View style={styles.container}>
    <Scroll />
  </View>
);
const SecondRoute = () => (
  <View style={styles.container}>
    <Konter />
  </View>
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    key: "Tabs",

    routes: [
      { key: "first", title: "Personal" },
      { key: "second", title: "Counter" }
    ]
  };
  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? "#ff7961" : "#d1c4e9"
            )
          });
          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
  });
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        animationEnabled
        onIndexChange={index => this.setState({ index })}
        initialLayout={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1565c0"
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f1cf3e"
  }
});
