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
import {BarChart} from 'react-native-charts-wrapper';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Feather';

export default class zhuzhuangtu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ershou:0,
            title:'济南市12月主要区县均价',
            legend: {
                enabled: true,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 1,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5,

            },
            animation: {
                durationX: 1500,
                durationY: 1500,
                easingX: 'EaseInCirc',

            },
            data: {
                dataSets: [{
                    values: [{y: 23405}, {y: 19231}, {y: 19063}, {y: 15093}, {y: 13661}, {y: 13060}, {y: 10760}, {y: 10640}],
                    label: '房价',
                    config: {
                        color: processColor('teal'),
                        barSpacePercent: 40,
                        barShadowColor: processColor('lightgrey'),
                        highlightAlpha: 90,
                        highlightColor: processColor('red'),
                        valueTextSize: 15,
                    }
                }],
            },
            xAxis: {
                drawGridLines:false,
                valueFormatter: ['历下', '市中', '高新', '历城', '天桥', '槐荫', '章丘', '长清'],
                granularityEnabled: false,
                granularity: 1,
                textSize:18,
                position: 'BOTTOM'
            },
            yAxis:{
            }
        };
    }

    goBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({...this.state, selectedEntry: null})
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }
    }

    goershoushuju(ershou){
        if(ershou===0){
            this.setState({
                title:'济南市12月二手房均价',
                ershou:1,
                data: {
                    dataSets: [{
                        values: [{y: 26019}, {y: 25204}, {y: 19384}, {y: 17575}, {y: 17619}, {y: 17211}, {y: 10577}, {y: 10120}],
                        label: '房价',
                        config: {
                            color: processColor('teal'),
                            barSpacePercent: 40,
                            barShadowColor: processColor('lightgrey'),
                            highlightAlpha: 90,
                            highlightColor: processColor('red'),
                            valueTextSize: 15,
                        }
                    }],
                },
            })
        }
        if(ershou===1){
            this.setState({
                title:'济南市12月主要区县均价',
                ershou:0,
                data: {
                    dataSets: [{
                        values: [{y: 23405}, {y: 19231}, {y: 19063}, {y: 15093}, {y: 13661}, {y: 13060}, {y: 10760}, {y: 10640}],
                        label: '房价',
                        config: {
                            color: processColor('teal'),
                            barSpacePercent: 40,
                            barShadowColor: processColor('lightgrey'),
                            highlightAlpha: 90,
                            highlightColor: processColor('red'),
                            valueTextSize: 15,
                        }
                    }],
                },
            })
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
                    <Text style={{flex: 8, fontSize: 20, marginLeft: 20}}>{this.state.title}</Text>
                    <TouchableOpacity style={{flex: 1}}
                                      onPress={() => {
                                          this.goershoushuju(this.state.ershou);
                                      }}>
                        <Icon name="eye" size={20} color="#900"/>
                    </TouchableOpacity>
                    <Text style={{flex: 1, fontSize: 8, marginTop: 10, marginRight: 10}}>单位:元</Text>
                </View>
                <View style={styles.container}>
                    <BarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        animation={{durationX: 2000}}
                        legend={this.state.legend}
                        gridBackgroundColor={processColor('#ffffff')}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        drawHighlightArrow={true}
                        onSelect={this.handleSelect.bind(this)}
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