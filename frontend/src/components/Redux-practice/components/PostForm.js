import React from "react";
import {connect} from "react-redux";
import {createPost} from "../../../redux/actions";

class PostForm extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            title: ''
        }

    }

    submitHandler = event => {
        event.preventDefault()
        const {title} = this.state

        const newPost = {
            title, id: Date.now().toString()
        }
        this.props.createPost(newPost)
        console.log(newPost)
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className="mb-5">
                <div className="form-group mb-20">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                        className="form-control"
                        name="title"
                        id="title"/>
                </div>
                <button type="submit" className="btn btn-success">Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {createPost}

export default connect(null, mapDispatchToProps)(PostForm)