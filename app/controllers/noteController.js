const Note = require('../models/noteModel.js');

// Create and Save a new Note
exports.create = async (req, res) => {
  // Validate request
  if(!req.body.content) {
      return res.status(400).send({
          message: "Note content can not be empty"
      });
  }

  try {
    const note = new Note({
        title: req.body.title || "Untitled Note", 
        content: req.body.content
    });

    const response = await note.save();
    return res.send(response);

  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the Note."
    });
  }

};

// Retrieve and return all notes from the database.
exports.findAll = async (req, res) => {

  try {
    const notes = await Note.find();
    return res.send(notes);

  } catch (err) {
    return res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes."
    });
  }

};

// Find a single note with a noteId
exports.findOne = async (req, res) => {

  try {
    const note = await  Note.findById(req.params.noteId);
    
    if(!note) {
      return res.status(404).send({
        message: "Note not found with id " + req.params.noteId
      });            
    }
    return res.send(note);
  
  } catch (err) {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
          message: "Note not found with id " + req.params.noteId
      });                
    }
    return res.status(500).send({
        message: "Error retrieving note with id " + req.params.noteId
    });
  }
 
};

// Update a note identified by the noteId in the request
exports.update = async (req, res) => {
  // Validate Request
  if(!req.body.content) {
      return res.status(400).send({
          message: "Note content can not be empty"
      });
  }

  // Find note and update it with the request body

  try {
    const note = await   Note.findByIdAndUpdate(req.params.noteId, {
      title: req.body.title || "Untitled Note",
      content: req.body.content
    }, {new: true});

    if(!note) {
      return res.status(404).send({
          message: "Note not found with id " + req.params.noteId
      });
    }
    return res.send(note);
    
  } catch (err) {
    
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
          message: "Note not found with id " + req.params.noteId
      });                
    }
    return res.status(500).send({
        message: "Error updating note with id " + req.params.noteId
    });
  }

};

// Delete a note with the specified noteId in the request
exports.delete = async (req, res) => {

  try {
    const note = await Note.findByIdAndRemove(req.params.noteId);
    if(!note) {
      return res.status(404).send({
        message: "Note not found with id " + req.params.noteId
      });
    }

    return res.send({message: "Note deleted successfully!"});

  } catch (err) {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
          message: "Note not found with id " + req.params.noteId
      });                
    }
    return res.status(500).send({
      message: "Could not delete note with id " + req.params.noteId
    });
  }
};