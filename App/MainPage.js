/**
 * Created by danding on 16/11/21.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    View,
    TouchableOpacity,
    Text,
    processColor
} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import zhuzhuangtu from './zhuzhuangtu';
import zhexiantu from './zhexiantu';
import bingtu from './bingtu';
import qipaotu from './qipaotu';
import zhuwangtu from './zhuwangtu';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    navigatorTozhuzhuangtu() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'zhuzhuangtu',
                component: zhuzhuangtu,
                params: {}
            })
        }
    }

    navigatorTozhexiantu() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'zhexiantu',
                component: zhexiantu,
                params: {}
            })
        }
    }

    navigatorToqipaotu() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'qipaotu',
                component: qipaotu,
                params: {}
            })
        }
    }

    navigatorTozhuwangtu() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'zhuwangtu',
                component: zhuwangtu,
                params: {}
            })
        }
    }

    navigatorTobingtu() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'bingtu',
                component: bingtu,
                params: {}
            })
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 50, alignItems: 'center', flexDirection: 'row'}}>
                    <Text style={{flex: 8, fontSize: 20, marginLeft: 110}}>济南市房价调查</Text>
                </View>
                <View style={{flex: 1.3, borderBottomWidth: 1, borderColor: '#ccc'}}>
                    <View>
                        <Text style={styles.fontstyle}>调查背景：</Text>
                        <Text style={styles.mianfontstyle}>        住房问题在中国有着无与伦比的震撼力，是关系民生的最核心问题之一，房价涨跌直接影响着千家万户。透过房子，我们可以观察中国的经济走向，了解国内的消费趋势，认识中国人的生活水平。</Text>
                    </View>
                    <View style={{marginTop:14}}>
                        <Text style={styles.fontstyle}>调查结果：</Text>
                        <Text style={styles.mianfontstyle}>        随着房地产价格受到政府的限价干预，粗略估计济南未来一年的房地产价格。历城区，由于开盘的房地产数量较多，房价基本保持稳定状态。历下区商业最发达有或许的涨幅。市中区二手房的价格明显高于新房价格，并且教育条件优秀，涨幅明显。天桥区和槐荫区的房价可能有小部分上涨。</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <ScrollableTabView
                        renderTabBar={() => <DefaultTabBar/>}
                        tabBarInactiveTextColor='black'
                        tabBarActiveTextColor='#FF0000'
                        tabBarUnderlineStyle={styles.lineStyle}
                    >
                        <View tabLabel="柱状图">
                            <Text style={styles.fontstyle}>柱状图介绍：</Text>
                            <Text style={styles.mianfontstyle}> 显示济南市主要区域的房地产均价，和二手房均价。</Text>
                            <TouchableOpacity onPress={() => {
                                this.navigatorTozhuzhuangtu()
                            }}>
                                <Text style={styles.touchstyle}>点我跳到柱状图</Text>
                            </TouchableOpacity>
                        </View>
                        <View tabLabel="蛛网图" style={{paddingRight: 0, marginRight: 0}}>
                            <Text style={styles.fontstyle}>雷达图介绍：</Text>
                            <Text style={styles.mianfontstyle}>        采用雷达图对济南市的历城区，历下区，市中区，三个行政区，在教育，商业，交通，空气质量，环卫五个方面进行评估。
                            </Text>
                            <TouchableOpacity onPress={() => {
                                this.navigatorTozhuwangtu()
                            }}>
                                <Text style={styles.touchstyle}>点我跳到蛛网图</Text>
                            </TouchableOpacity>
                        </View>
                        <View tabLabel="折线图">
                            <Text style={styles.fontstyle}>折线图介绍：</Text>
                            <Text style={styles.mianfontstyle}>        从数据来看，知道济南市的房价在今年持续上涨之后，成交量并没有下降，粗略预测济南市房地产价在未来一年不会有太大的下降幅度。</Text>
                            <TouchableOpacity onPress={() => {
                                this.navigatorTozhexiantu()
                            }}>
                                <Text style={styles.touchstyle}>点我跳到折线图</Text>
                            </TouchableOpacity>
                        </View>
                        <View tabLabel="饼图">
                            <Text style={styles.fontstyle}>饼图介绍：</Text>
                            <Text style={styles.mianfontstyle}>        通过对济南市各个区县的住宅预售数量占比进行分析，历城区的房地产销售可能不会太过紧张，历下区的住宅销售可能会出现紧张的局面，房价还会持续上涨。</Text>
                            <TouchableOpacity onPress={() => {
                                this.navigatorTobingtu()
                            }}>
                                <Text style={styles.touchstyle}>点我跳到饼图</Text>
                            </TouchableOpacity>
                        </View>

                        <View tabLabel="气泡图">
                            <Text style={styles.fontstyle}>气泡图介绍：</Text>
                            <TouchableOpacity onPress={() => {
                                this.navigatorToqipaotu()
                            }}>
                                <Text style={styles.touchstyle}>点我跳到气泡图</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollableTabView>
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
    },
    lineStyle: {
        height: 2,
        backgroundColor: '#FF0000',
    },
    fontstyle: {
        fontSize: 20,
        color:'black',
    },
    mianfontstyle: {
        fontSize: 17,
        marginTop: 10,
    },
    touchstyle: {
        fontSize: 18,
        marginLeft: 4,
        marginTop: 20,
        color: '#4682b4'
    },
});