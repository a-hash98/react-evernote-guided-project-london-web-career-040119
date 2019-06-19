const NOTES_URL = 'http://localhost:5000/api/v1/notes'

const getNotes = () => {
    return (
        fetch(NOTES_URL)
        .then(resp => resp.json())
    )
}

const postNote = (note) => {
    return (
        fetch(NOTES_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: note.title,
          body: note.body,
          user_id: 1
        })
      }).then(resp => resp.json())
    )
}

const patchNote = (note) => {
    return (
        fetch(`${NOTES_URL}/${note.id}`, {
        method: "PATCH", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: note.id,
          title: note.title,
          body: note.body,
          user_id: 1
        })})).then(resp => resp.json())
}

export default { getNotes, postNote, patchNote }