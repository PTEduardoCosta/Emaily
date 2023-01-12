import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount(){
    this.props.fetchSurveys(); 
  }
  
  renderSurveys(){
    return this.props.surveys.reverse().map(({_id, title, body, dateSent, yes, no}) => {
      return(
        <div className="card purple lighten-5" key={_id}>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{body}</p>
          <p className="right">
            Sent On: {new Date(dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <p className="deep-purple-text"><strong>Yes: {yes} &emsp; No: {no}</strong></p>
        </div>
      </div>
      );
    });
  }
  
  render() {
    return(
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }){
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);