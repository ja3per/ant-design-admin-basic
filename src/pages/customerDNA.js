import React from 'react';
import { Table, Modal, Button, Form, Input, message } from 'antd';
import { connect } from 'dva';
// import SampleChart from '../../component/SampleChart';

const FormItem = Form.Item;

class CustomerDNA extends React.Component {
    state = {
        visible: false,
        statisticVisible: false,
        id: null,
    };

    columns = [
        {
            title: 'EasyID',
            dataIndex: 'easyId',
        },
        {
            title: 'Register Time',
            dataIndex: 'regTime',
        },
        {
            title: 'Features',
            dataIndex: 'features',
            // render(value) {
            //     return (
            //         <a href={value}>{value}</a>
            //     );
            // },
        },
        {
            title: '',
            dataIndex: 'statistic',
            render: (_, { id }) => {
                return (
                    <Button onClick={() => this.deleteOne(id)}>Remove</Button>
                );
            },
        },
    ];

    componentDidMount() {
        this.props.dispatch({
            type: 'cards/queryList',
        });
    }

    showModal = () => {
        this.setState({ visible: true });
    };

    showStatistic = (id) => {
        this.props.dispatch({
            type: 'cards/getStatistic',
            payload: id,
        });
        this.setState({ id, statisticVisible: true });
    };

    deleteOne = (id) => {
        this.props.dispatch({
            type: 'cards/deleteOne',
            payload: id,
        }).then(() => {
            message.success('delete success, refresh');
            this.componentDidMount();
        });
    };

    get401 = (id) => {
        this.props.dispatch({
            type: 'cards/get401'
        }).then(() => {
            console.log("401")
        });
    };

    handleOk = () => {
        const { dispatch, form: { validateFields } } = this.props;

        validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type: 'cards/addOne',
                    payload: values,
                });
                this.setState({ visible: false });
            }
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    handleStatisticCancel = () => {
        this.setState({
            statisticVisible: false,
        });
    }

    render() {
        const { visible, statisticVisible, id } = this.state;
        const { cardsList, cardsLoading, form: { getFieldDecorator }, statistic } = this.props;

        return (
            <div>
                <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />

                <Button onClick={this.showModal}>New</Button>
                <Button onClick={this.get401}>401</Button>

                <Modal
                    title="New"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <FormItem label="EasyId">
                            {getFieldDecorator('easyId', {
                                rules: [{ required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="Register Time">
                            {getFieldDecorator('regTime')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="Features">
                            {getFieldDecorator('features', {
                                // rules: [{ type: 'url' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                </Modal>

                {/*<Modal visible={statisticVisible} footer={null} onCancel={this.handleStatisticCancel}>*/}
                    {/*<SampleChart data={statistic[id]} />*/}
                {/*</Modal>*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList'],
        statistic: state.cards.statistic,
    };
}

export default connect(mapStateToProps)(Form.create()(CustomerDNA));
