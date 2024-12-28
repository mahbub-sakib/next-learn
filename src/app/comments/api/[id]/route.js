export async function PATCH(request, { params }) {
    // console.log(params.id);
    const { id } = await params
    const index = comments.findIndex((c) => c.id === parseInt(id));
    const body = await request.json();
    comments[index] = {
        text: body.text
    }
    return Response.json({
        message: "Comment updated",
        comments

    })
}

export async function DELETE(request, { params }) {
    const { id } = await params
    const newComments = comments.filter((c) => c.id !== parseInt(id))
    return Response.json({
        message: "Comment deleted",
        newComments

    })
}

const comments = [
    {
        id: 1,
        text: "Comment 1"
    },
    {
        id: 2,
        text: "Comment 2"
    },
    {
        id: 3,
        text: "Comment 3"
    }
]