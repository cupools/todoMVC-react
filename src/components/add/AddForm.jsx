'use strict';

import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';

const FormItem = Form.Item;

class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            timeError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((errors, values) => {
            if (errors) {

            } else {
                let payload = this.props.form.getFieldsValue();
                this.props.handleAdd(payload);
                this.props.handleTodoLink();
            }
        });
    }

    render() {
        const {getFieldProps} = this.props.form;
        const timeProps = getFieldProps('time', {
            rules: [
                {
                    required: true,
                    type: 'object'
                }
            ]
        });
        const descProps = getFieldProps('desc', {
            rules: [
                {
                    required: true
                }
            ]
        });
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        };
        const locale = {
            lang: {
                placeholder: 'Please select time'
            }
        };
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label='Desc' required>
                    <Input placeholder='Please input desc' {...descProps}/>
                </FormItem>
                <FormItem {...formItemLayout} label='Date' required>
                    <DatePicker locale={locale} {...timeProps}/>
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                    <Button type='primary' htmlType='submit'>Confirm</Button>
                    <Button type='ghost' onClick={() => this.props.handleTodoLink()} style={{ marginLeft: 15 }}>Back</Button>
                </FormItem>
            </Form>
            );
    }
}

export default Form.create()(AddForm);