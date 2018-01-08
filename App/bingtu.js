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
import {PieChart} from 'react-native-charts-wrapper';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

const COLOR_PURPLE = processColor('#697dfb');
export default class bingtu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'济南市最近3个月开盘数量',
            centerT:'',
            ershou:0,
            legend: {
                enabled: true,
                textSize: 8,
                form: 'CIRCLE',
                position: 'RIGHT_OF_CHART',
                wordWrapEnabled: true
            },
            data: {
                dataSets: [{
                    values: [{value: 18, label: '历城(%)'},
                        {value: 5, label: '市中(%)'},
                        {value: 8, label: '历下(%)'},
                        {value: 5, label: '槐荫(%)'},
                        {value: 1, label: '高新(%)'},
                        {value: 4, label: '天桥(%)'},],
                    label: '',
                    config: {
                        colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF'), processColor('#FF8C9D'),processColor('#FF3041')],
                        valueTextSize: 20,
                        valueTextColor: processColor('green'),
                        sliceSpace: 5,
                        selectionShift: 13
                    }
                }],
            },
            description: {
                text: 'This is Pie chart description',
                textSize: 15,
                textColor: processColor('darkgray'),

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
                title:'济南市12月各区域关注度',
                ershou:1,
                data: {
                    dataSets: [{
                        values: [{value: 29.46, label: '历下(%)'},
                            {value: 17.54, label: '历城(%)'},
                            {value: 16.20, label: '市中(%)'},
                            {value: 12.63, label: '高新(%)'},
                            {value: 12.36, label: '槐荫(%)'},
                            {value: 11.79, label: '天桥(%)'},],
                        label: '',
                        config: {
                            colors: [processColor('#FFD08C'), processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FF8C9D'), processColor('#8CEAFF'),processColor('#FF3041')],
                            valueTextSize: 20,
                            valueTextColor: processColor('green'),
                            sliceSpace: 5,
                            selectionShift: 13
                        }
                    }],
                },
            })
        }
        if(ershou===1){
            this.setState({
                title:'济南市最近3个月开盘数量',
                ershou:0,
                data: {
                    dataSets: [{
                        values: [{value: 18, label: '历城(%)'},
                            {value: 5, label: '市中(%)'},
                            {value: 8, label: '历下(%)'},
                            {value: 5, label: '槐荫(%)'},
                            {value: 1, label: '高新(%)'},
                            {value: 4, label: '天桥(%)'},],
                        label: '',
                        config: {
                            colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF'), processColor('#FF8C9D'),processColor('#FF3041')],
                            valueTextSize: 20,
                            valueTextColor: processColor('green'),
                            sliceSpace: 5,
                            selectionShift: 13
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
                    <Text style={{flex: 1, fontSize: 8, marginTop: 10, marginRight: 10}}>单位:个</Text>
                </View>
                <View style={styles.container}>
                    <PieChart
                        style={styles.chart}
                        logEnabled={true}
                        chartBackgroundColor={processColor('white')}
                        chartDescription={this.state.description}
                        data={this.state.data}
                        legend={this.state.legend}
                        entryLabelColor={processColor('black')}
                        entryLabelTextSize={20}
                        rotationEnabled={true}
                        rotationAngle={45}
                        drawSliceText={true}
                        usePercentValues={false}
                        styledCenterText={{text:'', color: processColor('pink'), size: 20}}
                        centerTextRadiusPercent={100}
                        holeRadius={40}
                        holeColor={processColor('#f0f0f0')}
                        transparentCircleRadius={45}
                        transparentCircleColor={processColor('#f0f0f088')}
                        maxAngle={360}
                        onSelect={this.handleSelect.bind(this)}
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