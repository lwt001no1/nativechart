/**
 * Created by danding on 16/11/21.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
} from 'react-native';
import MainPage from './MainPage'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'Main', component:MainPage }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    //this.props.dispatch(updateNavigator({route:route.name,navigator:navigator}))
                    return (<Component {...route.params} navigator={navigator} />);
                }}
            />
        );
    }
}
AppRegistry.registerComponent('App', () => App);