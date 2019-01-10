import { fromJS } from 'immutable'
//immutable库
//immutable对象
const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '开黑群号',
        },
        {
            id: 2,
            title: '坑逼排行榜',
        }, {
            id: 3,
            title: 'bb怪说了啥'
        }
    ],
    articleList: [
        {
            id: 1,
            title: '曾ls花费两天时间拼图，结局竟然是。。。。',
            desc: '前段时间，家住江西抚州的曾ls和其未婚妻胡小姐在商店买回来一份1000份的拼图，经过不懈的努力，发现这个拼图拼出图案。。。。',
            imgurl: '../../statics/deer.jpg'
        },
        {
            id: 2,
            title: '曾ls花费两天时间拼图，结局竟然是。。。。',
            desc: '前段时间，家住江西抚州的曾ls和其未婚妻胡小姐在商店买回来一份1000份的拼图，经过不懈的努力，发现这个拼图拼出图案。。。。',
            imgurl: '../../statics/deer.jpg'
        },
        {
            id: 3,
            title: '曾ls花费两天时间拼图，结局竟然是。。。。',
            desc: '前段时间，家住江西抚州的曾ls和其未婚妻胡小姐在商店买回来一份1000份的拼图，经过不懈的努力，发现这个拼图拼出图案。。。。',
            imgurl: '../../statics/deer.jpg'
        },
    ]
})
export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }

}