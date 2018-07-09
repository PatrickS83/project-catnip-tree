import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Message, Segment, Header, Container } from 'semantic-ui-react';
import * as actions from '../actions/postActions';

class CreatePost extends Component {
  state = {
    form: { subject: '', content: '' },
    loading: false,
    success: false,
    error: false
  };

  // temp validation
  // TODO: More checks and better error messages
  validate = ({ subject, content }) => {
    let error = false;
    if (!subject || !content || subject.length > 200) error = true;
    this.setState({ error });
    return error;
  };

  handleChange = (e, { name, value }) => {
    const { form } = { ...this.state };
    form[name] = value;
    this.setState({ form });
  };

  handleSubmit = async () => {
    this.setState({ loading: true });
    const { form } = this.state;
    const { history, createPost } = this.props;
    const error = this.validate(form);
    if (error) {
      this.setState({ loading: false });
      return;
    }
    createPost(form);
    this.setState({ success: true, loading: false });
    setTimeout(() => {
      history.push('/');
    }, 3000);
  };

  render() {
    const { subject, content, loading, success, error } = this.state;
    return (
      <Container>
        <Header as="h1" textAlign="center">
          Share what you have learned!
        </Header>
        <Segment inverted raised color="teal">
          <Form
            inverted
            loading={loading}
            success={success}
            error={error}
            onSubmit={this.handleSubmit}
          >
            <Message
              success
              header="Post successfully created!"
              content="You are now being redirected to the main page"
            />
            <Message error header="Error" content="An error occured. Your post was not created." />
            <Form.Input
              name="subject"
              value={subject}
              label="Subject"
              placeholder="Subject"
              onChange={this.handleChange}
            />
            <Form.TextArea
              style={{ height: 300 }}
              name="content"
              value={content}
              label="Your Post"
              placeholder="Today I learned ..."
              onChange={this.handleChange}
            />
            <Form.Button content="Create Post" disabled={success} color="orange" size="large" />
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default connect(
  null,
  actions
)(CreatePost);
