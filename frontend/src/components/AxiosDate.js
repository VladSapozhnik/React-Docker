import React, {useEffect, useState} from "react";
import axios from "axios";
import Item from "./Item";

function AxiosDate () {
    const [type, setType] = useState('posts')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${type}?_limit=10`)
            .then(response => {
                setPosts(response.data)
            })

    }, [type])

    const styles = {
        label: {
            display: 'block'
        },
        input: {
            width: '300px',
            border: 'none',
            borderBottom: '1px solid',
            marginBottom: '5px'
        }
    }

/*    return this.searchData.filter((Search) => {
        return Search.title.toLowerCase().match(this.searchValue.toLowerCase())
    });*/

/*    function search() {
        return this.type.filter(item => {
            return item.title.toLowerCase().match()
        })
    }*/

    return (
        <div>
            <label style={styles.label}>
                <div>Search</div>
                <input style={styles.input} type="text"/>
            </label>

            <div className="btn" onClick={() => setType('posts')}>Posts</div>
            <div className="btn" onClick={() => setType('todos')}>Todos</div>
            {posts.map(item => (
/*                <div key={item.id}>
                    {item.id}.{item.title};
                </div>*/
                <Item key={item.id} id={item.id} item={item.title} />
            ))}
        </div>
    )
}

export default AxiosDate