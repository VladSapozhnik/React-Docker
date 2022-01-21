import React from "react";

export default class PostForm extends React.Component {
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
            <form onClick={this.submitHandler} className="mb-5">
                <div className="form-group mb-20">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input
                        type="title"
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