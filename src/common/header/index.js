import React, { PureComponent} from 'react'
import { SearchWrapper, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, Searchinfo, SearchinfoTitle, SearchinfoSwich, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux'

class Header extends PureComponent {
    getListArea = (focuse) => {
        const { page, totalPage, list, mouseIn, handleMouseenter, handleMouseleave, handleChangePage } = this.props
        const newList = list.toJS()
        const pagelist = []
        if (newList.length) {
            for (let i = ((page) * 10); i < ((page + 1) * 10); i++) {
                pagelist.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focuse || mouseIn) {
            return (
                <Searchinfo onMouseEnter={handleMouseenter} onMouseLeave={handleMouseleave}>
                    <SearchinfoTitle>
                        热门搜索
                            <SearchinfoSwich onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => { this.spinIcon = icon }} className='iconfont spin'>  &#xe606;</i>
                            换一批
                            </SearchinfoSwich>
                    </SearchinfoTitle>
                    <SearchInfoList>
                        {
                            pagelist
                        }
                    </SearchInfoList>
                </Searchinfo>
            )
        } else {
            return null
        }
    }
    render() {
        const { focused, list } = this.props
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
                            in={focused}
                            classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused' : ''} onFocus={() => { this.props.handleInputFocus(list) }} onBlur={this.props.handleInputBlur} >
                            </NavSearch>
                        </CSSTransition>
                        <i className='iconfont zoom'>  &#xe800;</i>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                    <Addition>
                        <Button className='writing'>
                            <i className='iconfont'>&#xe632;</i>
                            写文章</Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper >
        )
    }
}
//从store中的state中拿数据
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
    }
}
//把所有的dispatch放在一起统一管理
//actioncreators其实就是返回一个TYPE 一个事件名称 一个标志
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchblur())
        },
        handleMouseenter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseleave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            let oriangle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (oriangle) {
                oriangle = parseInt(oriangle, 10)
            } else {
                oriangle = 0;
            }
            spin.style.transform = 'rotate(' + (oriangle + 360) + 'deg)'
            //看完React16.7中大神讲解项目看到的方法！！
            dispatch(actionCreators.changePage((page + 1) % totalPage))

        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);
