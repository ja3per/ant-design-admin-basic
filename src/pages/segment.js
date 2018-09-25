import React, {Component} from 'react';
import {Card, Button} from 'antd';
import { connect } from 'dva';

const namespace = 'segment';

const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    const style={
        width: '400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #e8e8e8',
    };
    return {
        cardList,style
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return{
        onClickAdd: ( newCard ) => {
            const action = {
                type: `${namespace}/addNewCard`,
                payload: newCard,
            };
            dispatch(action);
        },
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryInitCards`,
            });
        },
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class segmentPage extends Component {
    componentDidMount() {
        this.props.onDidMount();
    }

    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        return (
                            <Card style={this.props.style} actions={[<a>run</a>, <a>stop</a>]}>
                                <Card.Meta key={card.id}
                                           avatar={<img
                                               alt=""
                                               style={{width: '64px', height: '64px', borderRadius: '32px'}}
                                               src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                           />}
                                           title={card.title}
                                           description={card.description}
                                />
                            </Card>
                        );
                    })
                }
                <div>
                    <Button onClick={() => this.props.onClickAdd({
                        title: 'New Title',
                        description: 'New Description',
                    })}> Add </Button>
                </div>
            </div>

        );
    }
}
