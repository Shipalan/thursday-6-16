const bcrypt = require('bcrypt')

const users = []

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body
    
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        const authenticated = bcrypt.compareSync(password, users[i].passwordHash)
        if (authenticated) {
          let userToReturn = {...users[i]}
          delete userToReturn.passwordHash
          res.status(200).send(userToReturn)
        }
      }
    }
    res.status(400).send("User not found.")
  },
    register: (req, res) => {
      const { username, email, firstName, lastName, password} = req.body
      saltRounds = 10
      bcrypt.hash(password, saltRounds, (err, passwordHash) => {
      
  

      if (!err){
        let newDatabaseEntry = {}
        newDatabaseEntry.username = username
        newDatabaseEntry.email = email
        newDatabaseEntry.firstName = firstName
        newDatabaseEntry.lastName = lastName
        newDatabaseEntry.passwordHash = passwordHash
        console.log('Registering User')
        // console.log(passwordHash)
        console.log(newDatabaseEntry)
        users.push(newDatabaseEntry)
        res.status(200).send(req.body)
      } else {
        res.status(400).send('Something in your login sucks!')
      }
      })      
   }
}