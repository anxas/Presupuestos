import React, { useState } from "react";
import { useLocalStorage } from "../../Hooks";

const PruebaUpload = () => {

    const [token] = useLocalStorage('token')

    const [image, setImage] = useState({})

    const fileOnChange = (event) => {
        setImage(event.target.files[0])
    };

    const sendImage = (event) => {
        let formData = new FormData();

        formData.append('avatar', image);

        fetch('http://localhost:3000/users/uploads/uploads', {
            mode: 'cors',
            method: "post",
            body: formData,
        })
            .then((res) => res.text())
            .then((resBody) => {
                console.log(resBody);
            });
    };

    return (
        <div>
            <input type="file" onChange={fileOnChange} />
            <button onClick={sendImage}>Upload</button>
        </div>
    )

}
export default PruebaUpload