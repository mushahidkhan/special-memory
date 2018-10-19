import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react';
import './styles.css'
class MakePost extends Component {

	state = {
		text:'',
		username: 'guest9999',
 		privPostingKey: '5KRu7cb7WCJoXyJ14KSKK4re1vJf8Z3F5Lf8Xk5BQ6ckMcHSZsN'
	}


  render() {
    return (
      <div>
         <Grid>
  		    <Grid.Column width={4}></Grid.Column>
  		    <Grid.Column width={8}>
            <Grid.Row className="titleRow">
              <Input placeholder='What is the book called?' className="bookTitle"/>
            </Grid.Row>
            <Grid.Row className="bookDetailsRow">
  	         <textarea className="textArea"></textarea>
            </Grid.Row>
            <Grid.Row >
              <Button primary>Post</Button>
            </Grid.Row>
  		    </Grid.Column>
  		    <Grid.Column width={4}></Grid.Column>
  		</Grid>
      </div>
    );
  }
}

export default MakePost;