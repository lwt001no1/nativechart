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
                        <Text style={styles.mianfontstyle}>        通过下面四个方面的图表，粗略估计济南未来一年的房地产价格。历城区，开盘的房地产数量最多，人民关注度较高，涨幅最大。历下区商业最发达，人民关注度最高，属于济南市繁华地段，房价涨幅其次。市中区教育条件优秀，二手房的价格明显高于新房价格，涨幅次之。天桥区，槐荫区，高新区的房价也会均有涨幅。</Text>
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
                            <Text style={styles.mianfontstyle}>        采用雷达图对济南市的历城区，历下区，市中区，三个行政区，在教育，商业，交通，空气质量，环卫五个方面进行评估。</Text>
                            <TouchableOpacity onPress={() => {
                                this.navigatorTozhuwangtu()
                            }}>
                                <Text style={styles.touchstyle}>点我跳到蛛网图</Text>
                            </TouchableOpacity>
                        </View>
                        <View tabLabel="折线图">
                            <Text style={styles.fontstyle}>折线图介绍：</Text>
                            <Text style={styles.mianfontstyle}>        介绍了济南市12个月以来房价的变化以及二手房变化，另外又添加了商品房预售数量和成交趋势。</Text>
                            <TouchableOpacity onPress={() => {
                                this.navigatorTozhexiantu()
                            }}>
                                <Text style={styles.touchstyle}>点我跳到折线图</Text>
                            </TouchableOpacity>
                        </View>
                        <View tabLabel="饼图">
                            <Text style={styles.fontstyle}>饼图介绍：</Text>
                            <Text style={styles.mianfontstyle}>        介绍了济南市12月份以来近3个月个主要区域开盘所占比重，以及各区域的关注度。</Text>
                            <TouchableOpacity onPress={() => {
                                this.navigatorTobingtu()
                            }}>
                                <Text style={styles.touchstyle}>点我跳到饼图</Text>
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