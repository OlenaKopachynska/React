export class PostService {

    url = 'https://jsonplaceholder.typicode.com/posts';

    GetAllPosts() {
        return fetch(this.url)
            .then(value=>value.json())
            .then(value=> {return value})
    }

    GetPostById(id) {
        return fetch(`${this.url}/${id}`)
            .then(value=>value.json())
            .then(value=> {return value})
    }
}