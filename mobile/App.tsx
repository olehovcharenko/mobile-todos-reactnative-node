import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AddPage from './components/Pages/AddPage/Form';
import Deleting from './components/Pages/Delete';
import EditTodo from './components/Pages/Edit';
import HomePage from './components/Pages/Home';
import FirstScreen from './components/Pages/FirstScreen';
import LoginPage from './components/Pages/LoginPage';
import RegPage from './components/Pages/RegPage';
import UserAdded from './components/Pages/UserAddedPage';
import Font from './components/styleText/Font';
import { navKeys } from './keys/navKey';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Screen name={navKeys.firstPage}
            options={{ headerShown: false }}
            component={FirstScreen} />
          <Stack.Screen name={navKeys.userAdded}
            options={{ headerTitle: () => <><Font text='Back' /></> }}
            component={UserAdded} />
          <Stack.Screen name={navKeys.loginPage}
            options={{ headerTitle: 'Sign In' }}
            component={LoginPage} />
          <Stack.Screen name={navKeys.regPage}
            options={{ headerTitle: 'Sign Up' }}
            component={RegPage} />
          <Stack.Screen name={navKeys.home} options={{ headerShown: false }}>
            {() => <HomePage client={queryClient} />}
          </Stack.Screen>
          <Stack.Screen name={navKeys.addPage} >{() =>
            <AddPage client={queryClient}
            />}
          </Stack.Screen>
          <Stack.Screen name={navKeys.deletingPage}
            options={{ headerShown: false }}
            component={Deleting} />
          <Stack.Screen name={ navKeys.editPage }>
            {({ route }) => <EditTodo client={queryClient} route={route} />}
          </Stack.Screen>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}


