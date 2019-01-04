import React, { Component } from 'react'
import { SearchWrapper, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, Searchinfo, SearchinfoTitle, SearchinfoSwich, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux'

class Header extends Component {
    getListArea = (show) => {
        if (show) {
            return (
                <Searchinfo>
                    <SearchinfoTitle>
                        热门搜索
                            <SearchinfoSwich>
                            换一批
                            </SearchinfoSwich>
                    </SearchinfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item) => {
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            }
                            )
                        }
                    </SearchInfoList>
                </Searchinfo>
            )
        } else {
            return null
        }
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
                            in={this.props.focused}
                            classNames="slide"
                        >
                            <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur} >
                            </NavSearch>
                        </CSSTransition>
                        <i className='iconfont'>  &#xe800;</i>
                        {this.getListArea(this.props.focused)}
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

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}
const mapDispathToProps = (dispatch) => {

    return {
        handleInputFocus() {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchblur())
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);