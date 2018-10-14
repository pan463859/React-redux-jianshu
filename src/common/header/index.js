import React, { Component } from 'react'
import { SearchWrapper,HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style'
import {CSSTransition} from 'react-transition-group';
class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            focused:false
        }
        this.handleInputFocus=this.handleInputFocus.bind(this) 
        this.handleInputBlur=this.handleInputBlur.bind(this) 
    }
   
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
                    <CSSTransition
                    timeout={200}
                    in={this.state.focused}
                    classNames="slide"
                    >
                    <NavSearch className={this.state.focused?'focused':''} onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} >
                    </NavSearch>
                    </CSSTransition>
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
    handleInputFocus(){
        this.setState({
            focused:true
        })
    }

    handleInputBlur(){
        this.setState({
            focused:false
        })
    }
    
}
export default Header;