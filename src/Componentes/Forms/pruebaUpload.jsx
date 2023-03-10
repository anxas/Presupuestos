import axios from "axios";
import React, { useState } from "react";
import { useLocalStorage } from "../../Hooks";

const PruebaUpload = () => {

    const [token] = useLocalStorage('token')

    const [image, setImage] = useState({})

    const fileOnChange = (event) => {
        setImage(event.target.files[0])
    };

    const sendImage = async (event) => {
        try {
            let formData = new FormData();
            formData.append('avatar', image);

            const response = await axios({
                url: 'http://localhost:3000/users/uploads/uploads',
                method: 'POST',
                data: formData,
            })

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <h3 style={{ color: "white" }}>Sube tu avatar personalizado</h3>
            <input type="file" onChange={fileOnChange} />
            <button style={{ marginTop: "0.5rem", width: '6rem', backgroundColor: '#0fc359', border: 'none', padding: '0.2rem', borderRadius: '10px' }} onClick={sendImage}>Upload</button>
        </div>
    )

}
export default PruebaUpload