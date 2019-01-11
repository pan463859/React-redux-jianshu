import React, { PureComponent} from 'react';
import { ListItem, ListInfo } from '../home/style'
import { connect } from 'react-redux'
class List extends PureComponent {
    render() {
        const { list } = this.props
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={item.get('id')} >
                                <img className='pic' src={item.get('imgurl')} alt="" />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'articleList'])
    }
}

export default connect(mapStateToProps)(List);