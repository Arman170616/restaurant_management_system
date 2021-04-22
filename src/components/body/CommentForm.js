import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <Input
                        type='text'
                        name='Author'
                        value={this.state.author}
                        placeholder='Your Name'
                        required />
                    <br />
                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder='Your Comment'
                        required>
                    </Input>
                    <br />
                    <Button type='submit'> Submit Comment</Button>
                </Form>
            </div>
        )
    }
}

export default CommentForm;