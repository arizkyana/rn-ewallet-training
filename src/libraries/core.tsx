import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '@helpers/auth';

// pages
import LoginScreen from '@pages/login';
import TabsScreen from '@libraries/tabs';
import TopUpScreen from '@pages/topup';

const RootStack = createStackNavigator();

function App() {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    console.log('current token :: ', token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <NavigationContainer>
        <RootStack.Navigator>
          {!token ? (
            <RootStack.Screen name="Login" component={LoginScreen} />
          ) : (
            <>
              <RootStack.Screen name="DompetKu" component={TabsScreen} />
              <RootStack.Screen name="Top Up Wallet" component={TopUpScreen} />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
