/**
 * Created by danding on 16/11/21.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    View,
    Text,
    processColor,
    TouchableOpacity
} from 'react-native';
import {BubbleChart} from 'react-native-charts-wrapper';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

const COLOR_PURPLE = processColor('#697dfb');
export default class qipaotu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            legend: {
                enabled: false,
                textSize: 14,
                form: 'CIRCLE',
                wordWrapEnabled: true
            },
            animation: {
                durationX: 1500,
                durationY: 1500,
                easingX: 'EaseInCirc'
            },
            data: {
                dataSets: [{
                    values: [{y:20,size:6}],
                    label: 'DS 1',
                    config: {
                        color: processColor('#C0FF8C'),
                        highlightCircleWidth: 2
                    }
                }],
            }
        };
    }

    goBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _randomYValues(range: number, size: number) {
        return _.times(size, (index) => {
            return {
                y: Math.random() * range,
                size: Math.random() * range
            };
        });
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({...this.state, selectedEntry: null})
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity style={{flex: 2}}
                                      onPress={() => {
                                          this.goBack();
                                      }}>
                        <Text style={{flex: 1, fontSize: 16, marginTop: 10, marginRight: 10}}>back</Text>
                    </TouchableOpacity>
                    <Text style={{flex: 8, fontSize: 20, marginLeft: 60}}>关于XX折线图</Text>
                    <Text style={{flex: 1, fontSize: 8, marginTop: 10, marginRight: 10}}>单位:mi</Text>
                </View>
                <View style={styles.container}>
                    <BubbleChart
                        style={styles.chart}
                        data={this.state.data}
                        legend={this.state.legend}
                        animation={this.state.animation}
                        doubleTapToZoomEnabled={false}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chart: {
        flex: 1
    }
});