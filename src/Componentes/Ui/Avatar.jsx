import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Avatar = ({ userId }) => {

    console.log(userId)

    const [image, setImage] = useState(null)

    useEffect(() => {
        async function fetchdata() {
            try {
                const response = await axios.get(`http://localhost:3000/users/groups/avatar/${userId}`)
                if (response) {
                    setImage(response.data.imagePath)
                    console.log(response)
                    console.log(response.data)
                    console.log(response.data.imagePath)
                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchdata();

    }, [])

    return (
        <Marco>

            <figure>
                {image ? <img src={`http://localhost:3000/uploads/${image}`} /> : <img src={require('../img/user.jpg')} />}
            </figure>

        </Marco>
    )
}

const Marco = styled.div`


figure{
    width: 5em;
    height: 5em;
    overflow: hidden;
    margin: 10px;
    border-radius: 50%;
    border:0.2em solid #8d0d58 ;
    :hover{
        border-radius: 30%;
        transition: transform .5s;
         transform: scale(1.2)

     }
    img{
       
        width: 5em; 
        height: 5em; 
        -webkit-filter: grayscale(50%);
        filter: grayscale(50%);
       

        :hover{
            transition: transform .5s;
            transform: scale(1.1);
            -webkit-filter: grayscale(0%);
            filter: grayscale(10%);
        }
    }
}
`

export default Avatar