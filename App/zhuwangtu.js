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
import {RadarChart} from 'react-native-charts-wrapper';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

const COLOR_PURPLE = processColor('#697dfb');
export default class zhuwangtu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '济南市主要区的比较',
            quxian: 0,
            data: {
                dataSets: [{
                    values: [{value: 31}, {value: 73}, {value: 85}, {value: 80}, {value: 97}],
                    label: '历城区',
                    config: {
                        color: processColor('#FF8C9D'),
                        drawFilled: true,
                        fillColor: processColor('#FF8C9D'),
                        fillAlpha: 100,
                        lineWidth: 2
                    }
                },
                    {
                        values: [{value: 69}, {value: 100}, {value: 78}, {value: 86}, {value: 99}],
                        label: '历下区',
                        config: {
                            color: processColor('#C0FF8C'),
                            drawFilled: true,
                            fillColor: processColor('#C0FF8C'),
                            fillAlpha: 150,
                            lineWidth: 1.5
                        }
                    },
                    {
                        values: [{value: 100}, {value: 70}, {value: 87}, {value: 96}, {value: 100}],
                        label: '市中区',
                        config: {
                            color: processColor('#8CEAFF'),
                            drawFilled: true,
                            fillColor: processColor('#8CEAFF')
                        }
                    }
                ],
            },
            xAxis: {
                drawAxisLine: false,
                valueFormatter: ['教育', '商业', '交通', '空气质量', '环卫']
            },
            legend: {
                enabled: true,
                textSize: 14,
                form: 'CIRCLE',
                wordWrapEnabled: true
            },
        };
    }

    goBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    goquxian(quxian) {
        if (quxian === 0) {
            this.setState({
                title: '天桥区',
                quxian: 1,
                data: {
                    dataSets: [{
                        values: [{value: 22}, {value: 35}, {value: 95}, {value: 83}, {value: 96}],
                        label: '天桥区',
                        config: {
                            color: processColor('#8CEAFF'),
                            drawFilled: true,
                            fillColor: processColor('#8CEAFF')
                        }
                    },
                        {
                            values: [{value: 79}, {value: 36}, {value: 100}, {value: 74}, {value: 98}],
                            label: '槐荫区',
                            config: {
                                color: processColor('#FF8C9D'),
                                drawFilled: true,
                                fillColor: processColor('#FF8C9D')
                            }
                        }]
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
                    <Text style={{flex: 8, fontSize: 20, marginLeft: 30}}>{this.state.title}</Text>
                </View>
                <View style={styles.container}>
                    <RadarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        yAxis={{drawLabels: false}}
                        chartDescription={{text: ''}}
                        legend={this.state.legend}
                        drawWeb={true}
                        skipWebLineCount={10}
                        doubleTapToZoomEnabled={false}
                    />
                </View>
            </View>
        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        chart: {
            flex: 1
        }
    });