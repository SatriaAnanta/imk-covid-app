import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NewsRoute from "./Screens/News";
import HomeRoute from "./Screens/Dashboard";
import HospitalRoute from "./Screens/Hospitals";
import NewsDetailRoute from "./Screens/NewsDetail";
import HospitalDetailRoute from "./Screens/HospitalDetail"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RecentsRoute = () => <Text>Recents</Text>;
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const NewsStack = createStackNavigator();
const HospitalsStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Beranda" component={HomeRoute} options={{ headerShown: false }} />
  </HomeStack.Navigator>
);

const NewsStackScreen = () => (
  <NewsStack.Navigator>
    <NewsStack.Screen name="Berita" component={NewsRoute} options={{ headerShown: false }}/>
    <NewsStack.Screen
      name="NewsDetails"
      component={NewsDetailRoute}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </NewsStack.Navigator>
);

const HospitalsStackScreen = () => (
  <HospitalsStack.Navigator>
    <HospitalsStack.Screen name="Penyedia Vaksin" component={HospitalRoute} options={{ headerShown: false }}/>
    <NewsStack.Screen
      name="HospitalDetails"
      component={HospitalDetailRoute}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HospitalsStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen 
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Beranda',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="Berita"
      component={NewsStackScreen}
      options={{
        tabBarLabel: 'Berita',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="newspaper" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="Hospitals"
      component={HospitalsStackScreen}
      options={{
        tabBarLabel: 'Penyedia Vaksin',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="hospital-building" color={color} size={size} />
        ),
      }}
    />    
  </Tabs.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
  </Drawer.Navigator>
);

const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
  </RootStack.Navigator>
);

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Beranda', icon: 'home' },
    { key: 'news', title: 'Berita', icon: 'newspaper' },
    { key: 'hospital', title: 'Penyedia Vaksin', icon: 'hospital-building' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    news: NewsRoute,
    hospital: HospitalRoute,
    recents: RecentsRoute,
  });

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
