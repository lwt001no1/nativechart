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
import {LineChart} from 'react-native-charts-wrapper';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

const COLOR_PURPLE = processColor('#697dfb');
export default class zhexiantu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'2017年济南市房地产均价',
            ershou:0,
            danwei:'元',
            xiaoshou:0,
            data: {
                dataSets: [{
                    values: [{y: 10719}, {y: 11125}, {y: 11605}, {y: 13376},{y: 14260},{y: 14603},{y: 14958},{y: 15772},{y: 15772},{y: 15571},{y: 15452},],
                    label: '',
                    config: {
                        lineWidth: 1.5,
                        drawCircles: false,
                        drawCubicIntensity: 0.3,
                        drawCubic: true,
                        drawHighlightIndicators: false,
                        color: COLOR_PURPLE,
                        fillAlpha: 90,
                        valueTextSize: 13,
                    }
                }],

            },
            xAxis: {
                valueFormatter: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月','9月','10月','11月'],
                textColor: processColor('black'),
                textSize: 16,
                gridColor: processColor('red'),
                gridLineWidth: 1,
                axisLineColor: processColor('darkgray'),
                axisLineWidth: 1,
                gridDashedLine: {
                    lineLength: 3,
                    spaceLength: 10
                },
                avoidFirstLastClipping: true,
                position: 'BOTTOM'

            },
            yAxis: {

                left: {
                    drawGridLines: false
                },
                right: {
                    enabled: false
                }

            },

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

    _randomYValues(range: number, size: number) {
        const nextValueMaxDiff = 0.2;
        let lastValue = range / 2;

        return _.times(size, () => {
            let min = lastValue * (1 - nextValueMaxDiff);
            let max = lastValue * (1 + nextValueMaxDiff);
            return {y: Math.random() * (max - min) + min};
        });
    }

    goershoushuju(ershou){
        if(ershou===0){
            this.setState({
                title:'济南市商品房成交趋势',
                ershou:1,
                danwei:'套',
                xiaoshou:0,
                data: {
                    dataSets: [{
                        values: [{y: 12222}, {y: 12312}, {y: 14227}, {y: 13903},{y: 10227},{y: 13456},{y: 11194},{y: 9968},{y: 11139},{y: 12977},{y: 17736},],
                        label: '',
                        config: {
                            lineWidth: 1.5,
                            drawCircles: false,
                            drawCubicIntensity: 0.3,
                            drawCubic: true,
                            drawHighlightIndicators: false,
                            color: COLOR_PURPLE,
                            fillAlpha: 90,
                            valueTextSize: 13,
                        }
                    }],

                },
            })
        }
        if(ershou===1){
            this.setState({
                title:'济南市11月主要区县均价',
                ershou:0,
                danwei:'元',
                xiaoshou:0,
                data: {
                    dataSets: [{
                        values: [{y: 10719}, {y: 11125}, {y: 11605}, {y: 13376},{y: 14260},{y: 14603},{y: 14958},{y: 15772},{y: 15772},{y: 15571},{y: 15452},],
                        label: '',
                        config: {
                            lineWidth: 1.5,
                            drawCircles: false,
                            drawCubicIntensity: 0.3,
                            drawCubic: false,
                            drawHighlightIndicators: false,
                            color: COLOR_PURPLE,
                            fillAlpha: 90,
                            valueTextSize: 13,
                        }
                    }],

                },
            })
        }

    }

    goxiaoshouliang(xiaoshou){
        if(xiaoshou===0){
            this.setState({
                title:'济南市商品房预售数量',
                xiaoshou:1,
                danwei:'项目',
                ershou:0,
                data: {
                    dataSets: [{
                        values: [{y: 18}, {y: 9}, {y: 16}, {y: 8},{y: 14},{y: 20},{y: 10},{y: 20},{y: 26},{y: 17},{y: 17},],
                        label: '',
                        config: {
                            lineWidth: 1.5,
                            drawCircles: false,
                            drawCubicIntensity: 0.3,
                            drawCubic: true,
                            drawHighlightIndicators: false,
                            color: COLOR_PURPLE,
                            fillAlpha: 90,
                            valueTextSize: 13,
                        }
                    }],

                },
            })
        }
        if(xiaoshou===1){
            this.setState({
                title:'济南市商品房成交趋势',
                xiaoshou:0,
                danwei:'套',
                ershou:1,
                data: {
                    dataSets: [{
                        values: [{y: 12222}, {y: 12312}, {y: 14227}, {y: 13903},{y: 10227},{y: 13456},{y: 11194},{y: 9968},{y: 11139},{y: 12977},{y: 17736},],
                        label: '',
                        config: {
                            lineWidth: 1.5,
                            drawCircles: false,
                            drawCubicIntensity: 0.3,
                            drawCubic: true,
                            drawHighlightIndicators: false,
                            color: COLOR_PURPLE,
                            fillAlpha: 90,
                            valueTextSize: 13,
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
                    <Text style={{flex: 8, fontSize: 18, marginLeft: 20}}>{this.state.title}</Text>
                    <TouchableOpacity style={{flex: 1}}
                                      onPress={() => {
                                          this.goershoushuju(this.state.ershou);
                                      }}>
                        <Icon name="eye" size={30} color="#900"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}}
                                      onPress={() => {
                                          this.goxiaoshouliang(this.state.xiaoshou);
                                      }}>
                        <Icon name="eye" size={30} color="#900"/>
                    </TouchableOpacity>
                    <Text style={{flex: 1, fontSize: 8, marginTop: 10, marginRight: 10}}>单位:{this.state.danwei}</Text>
                </View>
                <View style={styles.container}>
                    <LineChart
                        style={styles.chart}
                        data={this.state.data}
                        chartDescription={{text: ''}}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        legend={{enabled: false}}
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