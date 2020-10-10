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

