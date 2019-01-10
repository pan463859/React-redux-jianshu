import styled from 'styled-components'

export const HomeWrapper = styled.div`
width:960px;
margin:0 auto;
overflow:hidden;
`
export const Homeleft = styled.div`
float:left;
width:625px;
margin-left:15px;
padding-top:30px;
.banner-img{
    width:625px;
    height:270px;
}
`

export const HomeRight = styled.div`
width:280px;
float:right;
`

//推荐部分
export const TopicWrapper = styled.div`
overflow: hidden;
padding:20px 0 10px 0;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
float:left;
height:32px;
margin-left:18px;
line-height:32px;
background:#f7f7f7;
font-size:14px;
color:#000;
border:1px solid #dcdcdc;
`
//列表部分
export const ListItem = styled.div`
padding:20px 0;
border-bottom:1px solid #dcdcdc;
overflow:hidden;
.pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
}
`
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color: #999;
    }
`
//推荐部分
export const RecommmendWrapper = styled.div`
margin:30px 0;
width:280px;
`
export const RecommmendItem = styled.div`
width:280px;
height:50px;
background: url(${(props) => props.imgUrl});
background-size:contain;
`

//作者部分
export const WritterWrapper = styled.div`
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
height:300px;
line-height:300px;
text-align:center;
`
export const WritterItem = styled.div`

`
export const BackTop = styled.div`
position:fixed;
right:100px;;
bottom:100px;;
width:60px;
height:60px;
line-height:60px;
text-align:center;
font-size:14px;
`
