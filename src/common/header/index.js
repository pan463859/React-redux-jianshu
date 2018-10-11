import React, { Component } from 'react'
import { SearchWrapper,HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style'
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载app</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                    <NavSearch></NavSearch>
                    <i className='iconfont'>  &#xe800;</i>
                    </SearchWrapper>
                    <Addition>
                        <Button className='writing'>
                            <i className='iconfont'>&#xe632;</i>
                            写文章</Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}
export default Header;