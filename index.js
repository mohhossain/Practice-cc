
fetch('http://localhost:3000/users')
.then(res => res.json())
.then(users => {
    console.log(users)

    users.forEach(user => {
        renderUsers(user)
    })
})


function renderUsers(user){
    let user_list = document.querySelector('#user-list')

    let userName = document.createElement('p')
    userName.textContent = user.username

    user_list.append(userName)

    userName.addEventListener('click', () =>{

        // document.getElementById('user-detail').innerHTML = ""
        console.log(user)

        let image= document.getElementById('image')
        image.src = user.avatar
        let username = document.getElementById('username')
        username.textContent = user.username

        let firstName = document.getElementById('first-name')
        firstName.textContent = user.first_name

        let lastName = document.getElementById('last-name')
        lastName.textContent = user.last_name
        
        let email = document.getElementById('email')
        email.textContent = user.email

        let post = document.getElementById('post')
        post.textContent = user.post

        let likes = document.getElementById('likes')
        likes.textContent = user.likes


        let commentList = document.getElementById('comments')
        commentList.innerHTML = ''

        let comments = user.comments
        comments.forEach(comment => {
            let li = document.createElement('li')
            li.textContent = comment

            commentList.append(li)
        })


        let likeButton = document.getElementsByTagName('button')[0]

        let like = user.likes 

        likeButton.addEventListener('click', () => {
            like++
            console.log(like)

            likes.textContent =  like     
            
            //using pareInt 
            //---> 
            // likes.textContent = parseInt(likes.textContent) + 1
        })


        //adding a new comment

        let comment_form = document.querySelector('.comment-form')

        comment_form.addEventListener('submit', (e) => {
            e.preventDefault()

            let li = document.createElement('li')
            li.textContent = e.target.comment_value.value
            commentList.append(li)

            // fetch(`http://localhost:3000/users/${user.id}`, {
            //     method: 'PATCH',
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         comments: [
            //             ...user.comments,
            //             e.target.comment.value
            //         ]
            //     })
            // }
            
            // )
        })

    })


}




let arr = ['a', 'b', 'c']

let newArr = [...arr, 'd']

arr == newArr
