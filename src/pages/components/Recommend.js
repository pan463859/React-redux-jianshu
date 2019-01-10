import React, { Component } from 'react';
import { RecommmendItem, RecommmendWrapper } from '../home/style'
class Recommmend extends Component {
    render() {
        return (
            <RecommmendWrapper>
                <RecommmendItem imgUrL="http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"></RecommmendItem>
                <RecommmendItem imgUrl="http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"></RecommmendItem >
            </RecommmendWrapper>
        )
    }
}
export default Recommmend;