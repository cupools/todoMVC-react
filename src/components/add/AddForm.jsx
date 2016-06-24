'use strict';

import React from 'react';
import {Form, Input, Button, DatePicker} from 'antd';

const FormItem = Form.Item;

class AddForm extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let desc = this.props.form.getFieldsValue().desc;
        this.props.handleAdd(desc);
    }

    render() {
        const {getFieldProps} = this.props.form;
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
                <FormItem {...formItemLayout} label="Desc">
                    <Input {...getFieldProps('desc')} placeholder="Please input desc"/>
                </FormItem>
                <FormItem {...formItemLayout} label="Date">
                    <DatePicker {...getFieldProps('date')} locale={locale}/>
                </FormItem>
                <FormItem wrapperCol={{
                    span: 16,
                    offset: 6
                }} style={{
                    marginTop: 24
                }}>
                    <Button type="primary" htmlType="submit">Confirm</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(AddForm);
