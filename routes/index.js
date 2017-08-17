const express = require('express');
const router = express.Router();

const toDo = [];
const complete = [];

router.get("/", function(req, res){
  res.render('todo', {todo: todo});
});

router.post("/", function(req, res){
  // toDo.forEach(function({}) {
  //   console.log({});
  //   toDo.push(req.body.)
  // });
  // if intial button is clicked, move text in field to "toDo" form. when in the "toDo" form, it needs to include a new button. should be able to keep current tasks in a list if another item is added to list. if buttonis clicked, it is true, move text into "completedTask" form

  // let id = 1;
  // for (var i = 0; i < toDo.length; i++) {
  //   toDo[i].id += 1;
  //   if (toDo == true) {
  //     toDo.push(req.body.complete)
  //   }
  // }
  toDo.push(req.body.toDo);
  res.redirect('/');
})

module.exports = router;
