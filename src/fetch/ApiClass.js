import {Component} from 'react';

class ApiClass extends Component{
    constructor(props) {
        super(props);

        this.state = {
            postId: null
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: "POST API"}),
            token: ''
        }

        fetch("https://reqres.in/api/posts", requestOptions)
        .then((response)=> response.json())
        .then((data)=> this.setState({postId: data.id}))
    }

    render(){
        const {postId} = this.state;
        return(
            <div>
                <h3>
                    Look at Id here
                </h3>
                <p>Returned post ID : {postId}</p>
            </div>
        )
    }
}

export default ApiClass;