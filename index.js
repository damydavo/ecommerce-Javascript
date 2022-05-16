const express = require("express")
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
   res.send(`
     <div>
     <form method="post">
      <input name="email" placeholder="email">
      <input name="password" placeholder="password">
      <input name="passwordConfirmation" placeholder="password confirmation">

      <button>Submit</button>

      </div>
   `)
})

app.post('/', (req, res) => {
   console.log(req.body)
   res.send("Account created successfully!!!")


})

app.listen(port, () => console.log(`App is listening on port ${port}`))