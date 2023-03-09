import axios from "axios";
import { useState } from "react";

const PruebaUpload = () => {

    const [image, setImage] = useState({});

    const fileOnChange = (event) => {
        setImage(event.target.files[0])
    };

    const sendImage = async (event) => {
        let formData = new FormData();

        formData.append('avatar', image);

        // async function fetchData() {
        //     const response = await
        //         axios.get(`http://localhost:3000/users/groups/${groupId}`)
        // }
        // fetchData();

        // fetch("http://localhost:3000/users/uploads/uploads", {
        //     method: "post",
        //     body: formData,
        // }).then((res) => res.json()).catch((res) => res.json())


        await axios.post("http://localhost:3000/users/uploads/uploads", image).then(() => {

        }).catch((error) => { console.log(error) })
    }

    return (
        <div>
            <input type="file" onChange={fileOnChange} />
            <button onClick={sendImage}>Upload</button>
        </div>
    )
}

export default PruebaUpload