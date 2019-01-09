import React, { Component } from 'react';
import { HomeWrapper, Homeleft, HomeRight } from './style'
import Topic from '../components/Topic'
import Recommend from '../components/Recommend'
import List from '../components/List'
import Writer from '../components/Writer'
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <Homeleft><img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4600/67db00190e013279ccac4b00bc5702c5f974b9aa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="嘻嘻" />
                    <Topic />
                    <List />
                </Homeleft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>

            </HomeWrapper>
        )
    }
}
export default Home;