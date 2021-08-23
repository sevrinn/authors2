//require model
const Author = require("../models/author.model");
const authorRoutes = require("../routes/author.routes");
// all authors
module.exports.allAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => {
      console.log(allAuthors);
      res.json(allAuthors);
    })
    .catch((err) => {
      console.log("There's been a problem finding all authors", err);
      res.json(err);
    });
};
// create author
module.exports.create = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => {
      console.log(newAuthor);
      res.json(newAuthor);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
// get one author
module.exports.getOne = (req, res) => {
  Author.findById(req.params.id)
    .then((oneAuthor) => {
      console.log(oneAuthor);
      res.json(oneAuthor);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
// edit author
module.exports.update = (req, res) => {
  Author.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true, //return updated obj
    runValidators: true, //use the same validation that was used at creation
  })
    .then((updatedAuthor) => {
      console.log(updatedAuthor);
      res.json(updatedAuthor);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
// delete author
module.exports.delete = (req, res) => {
  Author.findByIdAndDelete(req.params.id)
    .then((deletedAuthor) => {
      console.log(deletedAuthor);
      res.json(deletedAuthor);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
