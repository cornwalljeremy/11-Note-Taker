const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray){
    let noteSubjectArray = [];
    let filteredResults = notesArray;
    if (query.noteSubject){
        if (typeof query.noteSubject === "string"){
            noteSubjectArray = [query.noteSubject];
        } else {
            noteSubjectArray = query.noteSubject;
        }
        noteSubjectArray.foreach((element) => {
            filteredResults = filteredResults.filter(
              (note) => note.noteSubject.indexOf(element) !== -1  
            )
        })
    } if(query.subject){
        filteredResults = filteredResults.filter(
            (note) => note.subject === query.subject
        )
    }
    return filteredResults;
};
function findById(id, notesArray){
    const result = notesArray.filter((notes) => notes.id === id)[0];
    return result;
}
function createNewNote(body, notesArray){
    const notes = body;
    notesArray.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notes;
}

function validateNotes(notes){
    if(!notes.body || typeof notes.body !== 'string'){
        return false;
    } if(!notes.subject || typeof notes.subject !== 'string'){
        return false
    }
    return true
}
module.export = {
    filterByQuery,
    findById,
    createNewNote,
    validateNotes
}
