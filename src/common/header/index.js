import React from 'react'
import { SearchWrapper, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux'
const Header = (props) => {
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
                        in={props.focused}
                        classNames="slide"
                    >
                        <NavSearch className={props.focused ? 'focused' : ''} onFocus={props.handleInputFocus} onBlur={props.handleInputBlur} >
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
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}
const mapDispathToProps = (dispatch) => {

    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchblur())
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);