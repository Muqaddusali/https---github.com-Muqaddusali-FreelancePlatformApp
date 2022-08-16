import React from 'react';
import SplashScreen from '../Screens/SplashScreen';
import ScreenOne from '../Screens/ScreenOne';
import ScreenTwo from '../Screens/ScreenTwo';
import ScreenThree from '../Screens/ScreenThree';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';
import ResetPassword from '../Screens/ResetPassword';
import Verification from '../Screens/Verification';
import Services from '../Screens/Services';
import Home from '../Screens/Home';
import AfterSearching from '../Screens/AfterSearching';
import Proposel from '../Screens/Proposel';
import Client from '../Screens/Client';
import Bid from '../Screens/Client'
import About from '../Screens/About';
import ServicesTwo from '../Screens/ServicesTwo';
import AddDelete from '../Screens/AddDelete';
import Reviews from '../Screens/Reviews';
import EditAbout from '../Screens/EditAbout';
import Chats from '../Screens/Chats';
import SubChat from '../Screens/SubChat';
import Notifications from '../Screens/Notifications';
import Filter from '../Screens/Filter';
import ProjectDetail1 from '../Screens/ProjectDetail1';
import ProjectDetail2 from '../Screens/ProjectDetail2';
import ProjectDetail3 from '../Screens/ProjectDetail3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabActions } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import ClientSignIn from '../Screens/ClientSignIn'
import ClientSignUp from '../Screens/ClientSignUp'
import ClientVerification from '../Screens/ClientVerification'
import ClientResetPassword from '../Screens/ClientResetPassword';
import ClientProposel from '../Screens/ClientProposel';
import ClientSideAbout from '../Screens/ClientSideAbout';
import ClientSideServices from '../Screens/ClientSideServices';
import ClientHome from '../Screens/ClientHome';
import ClientTabNav from './ClientTabNav';
import ClientSideReviews from '../Screens/ClientSideReviews';
import ClientChat from '../Screens/ClientChat';
import ClientSubChat from '../Screens/ClientSubChat';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator initialRouteName="SplashScreen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#F4511E',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                animation: 'slide_from_right'
            }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="ScreenThree" component={ScreenThree} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="Services" component={Services} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="AfterSearching" component={AfterSearching} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="Proposel" component={Proposel} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="Client" component={Client} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="Bid" component={Bid} options={{ headerShown: false, animation: 'slide_from_right' }}/>
            <Stack.Screen name="About" component={About} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="ServicesTwo" component={ServicesTwo} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="AddDelete" component={AddDelete} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="Reviews" component={Reviews} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="EditAbout" component={EditAbout} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="Chats" component={Chats} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="SubChat" component={SubChat} options={{ headerShown: false, animation: 'slide_from_right' }}/>
            <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false, animation: 'slide_from_right' }}/>
            <Stack.Screen name="Filter" component={Filter} options={{ headerShown: false, animation: 'slide_from_right' }}/>
            <Stack.Screen name="ProjectDetail1" component={ProjectDetail1} options={{ headerShown: false }}/>
            <Stack.Screen name="ProjectDetail2" component={ProjectDetail2} options={{ headerShown: false }}/>
            <Stack.Screen name="ProjectDetail3" component={ProjectDetail3} options={{ headerShown: false }}/>
            <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientSignIn" component={ClientSignIn} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientSignUp" component={ClientSignUp} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientVerification" component={ClientVerification} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientResetPassword" component={ClientResetPassword} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientProposel" component={ClientProposel} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientSideAbout" component={ClientSideAbout} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientHome" component={ClientHome} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientTabNav" component={ClientTabNav} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientSideServices" component={ClientSideServices} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientSideReviews" component={ClientSideReviews} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientChat" component={ClientChat} options={{ headerShown: false }}/>
            <Stack.Screen name="ClientSubChat" component={ClientSubChat} options={{ headerShown: false }}/>




        </Stack.Navigator>
    )
}
export default RootStack;