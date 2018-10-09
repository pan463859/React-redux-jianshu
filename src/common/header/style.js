import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
position:relative
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
background:url('${logoPic}');
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
    float:left
    color:#333;
}
&.right{
    float:right
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
)
    `
width:160px;
height:38px;
margin-top:9px;
margin-left:20px;
padding:0px 20px;
box-sizing:border-box
border:none;
outline:none;
border-radius:19px
background:#eee;
font-size:14px;
&::placeholder{
    color:#999;
}
`
export const Addition = styled.div
`
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
font-siza:14px
&.reg{
    color:ec6419;
}
&.writing{
    color:#fff;
    background:#ec6149;
}
`