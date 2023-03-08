const Upload = () => {


    return (
        <form action="/users/uploads/images" method="post" enctype="multipart/form-data">
            <input type="file" name="avatar" />
            <button type="submit">Upload</button>
        </form>
    )
}