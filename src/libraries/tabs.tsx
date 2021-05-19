import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// pages
import HomeScreen from 'src/pages/tabs/home';
import WalletScreen from '@pages/tabs/wallet';
import HistoryScreen from '@pages/tabs/history';

const TabsStack = createBottomTabNavigator();

function Tabs() {
  return (
    <TabsStack.Navigator>
      <TabsStack.Screen name="Home" component={HomeScreen} />
      <TabsStack.Screen name="Wallet" component={WalletScreen} />
      <TabsStack.Screen name="History" component={HistoryScreen} />
    </TabsStack.Navigator>
  );
}

export default Tabs;
