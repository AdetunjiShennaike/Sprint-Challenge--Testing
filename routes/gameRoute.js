const express = require('express');
const router = express.Router();

const Games = require('../data/models/listModel');

//err messages
const newError = (sts, msg, res) => {
  res.status(sts).json({ error: `${msg}` })
}

//CRUD requests
//get actions
router.get('/', (req, res) => {
  Games
  .get()
  .then( title => {
    res.status(200).json({ title });
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//by id
router.get('/:id', (req, res) => {
  //set ID
  const ID = req.params.id
  
  Games
  .getById(ID)
  .then( title => {
    if(title === undefined) {
      return missingError(res);
    }
    else {
      return res.status(200).json({ title });
    }
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//post request
router.post('/', (req, res) => {
  //set req body
  const { title, year, system } = req.body;
  const newTitle = { title, year, system };

  //check req body
  if ( !title || !year || !system ) { 
    return newError( 422, 'Missing Title, Year, and/or System!', res );
  }
  Games
  .insert(newTitle)
  .then( title => {
    res.status(201).json({ title });
  })
  .catch( err => {
    return sendError( err , res );
  })
})

//update request
router.put('/:id', (req, res) => {
  //set ID
  const ID = req.params.id
  
  //set req body
  const { title, year, system } = req.body;
  const newTitle = { title, year, system };

  //check req body
  if ( !title && !year && !system ) { 
    return newError( 406, 'Missing Title, Year, and/or System!', res );
  }
  Games
  .update(ID, newTitle) 
  .then( title => {
    if(title === undefined) {
    return missingError(res);
    }
    else {
      return res.status(202).json({ title });
    }
  })
  .catch( err => {
    return sendError( err , res );
  })
})

router.delete('/:id', (req, res) => {
  //set ID
  const ID = req.params.id
  
  Games
  .getById(ID)
  .then( title => {
    if(title === undefined) {
      return missingError(res);
    }
    else {
      Games
      .remove(ID)
      .then( deleted => {
          return res.status(202).json({ title });
      })
      .catch( err => {
        return sendError( err, res );
      })
    }
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//export
module.exports = router;