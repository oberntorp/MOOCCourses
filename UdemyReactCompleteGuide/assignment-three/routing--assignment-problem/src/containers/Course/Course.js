import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseId: null,
        courseTitle: ""
    }

    componentDidMount() {
        this.getTitleAndIdIfNewId();
        console.log(this.props.match);
    }

    componentDidUpdate() {
        this.getTitleAndIdIfNewId();
        console.log(this.props.match);
    }

    getTitleAndIdIfNewId = () => {
        if(this.props.match.params.id){
            if(!this.state.courseId || (this.state.courseId && this.state.courseId !== this.props.match.params.id)) {
                this.setState({courseId: this.props.match.params.id});
                if(this.props.location.search){
                    const query = new URLSearchParams(this.props.location.search);
                    for (let param of query.entries()) {
                        if(param[0] === "title"){
                            this.setState({courseTitle: param[1]});
                        }
                    }
                }
            }
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>{`You selected the Course with ID: ${this.state.courseId}`}</p>
            </div>
        );
    }
}

export default Course;