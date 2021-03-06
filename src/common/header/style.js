import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
position:relative;
height:58px;
border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a`
position:absolute;
height:56px;
display:block;
width:100px;
top:0;
left:0;
background:url('${logoPic}') no-repeat;
background-size:contain;
`
export const Nav = styled.div`
width:960px;
margin:0 auto;
height:100%;
padding-right:70px;
box-sizing:border-box;
`
export const NavItem = styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color:#333;
&.left{
    float:left;
    color:#333;
}
&.right{
    float:right;
    color:#969696
}
&.active{
    color:#ea6f5a;
}
`
export const NavSearch = styled.input.attrs(
    {
        placeholder: '搜索'
    }
)`
width:160px;
height:38px;
margin-top:9px;
margin-left:20px;
padding:0px 35px 0px 20px;
box-sizing:border-box;
border:none;
outline:none;
border-radius:19px;
background:#eee;
color:#666;
font-size:14px;
&::placeholder{
    color:#999;
}
&.focused{
    width:200px;
}
`
export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button = styled.div`
float:right;
margin-top:9px;
margin-right:20px;
padding:0 20px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
font-size:14px;

&.reg{
    color:ec6419;
}
&.writing{
    color:#fff;
    background:#ec6149;
}
`
export const Searchinfo = styled.div`
position: absolute;
left: 0;
width: 240px;
top: 56px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0,0,0,.2);
background:#fff;
`

export const SearchinfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size:14px;
color:#969696
`


export const SearchinfoSwich = styled.span`
float: right;
font-size:13px;
cursor: pointer;
.spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:3px;
    transition:all .2s ease;
    transform-origin:center center;
}
`
export const SearchInfoItem = styled.a`
display: block;
float: left;
line-height: 20px;
padding: 0 5px;
font-size:12px;
border:1px solid #ddd;
border-radius:3px;
color: #787878;
margin-right: 15px;
margin-bottom: 15px;
cursor:pointer;
`
export const SearchInfoList = styled.div`
overflow: hidden;
`
export const SearchWrapper = styled.div`
position:relative;
float:left;

.slide-enter{
    transition:all .2s ease-out
}
.slide-enter-active{
    width:200px;
}
.slide-exit{
    transition:all .2s ease-out
}
.slide-exit-active{
    width:160px
}
.zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center
}
`
