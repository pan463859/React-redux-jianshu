import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../home/style'
class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                {this.props.list.map((item) => {
                    return (
                        <TopicItem key={item.get('id')}>
                            {item.get('title')}
                        </TopicItem>
                    )
                })}
            </TopicWrapper>
        )
    }
}
const maState = (state) =>
    ({
        list: state.get('home').get('topicList')
    })
const mapdispath = null
export default connect(maState, mapdispath)(Topic);