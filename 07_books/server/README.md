in command line:

> node
> var bcrypt = require('bcrypt')
> bcrypt.hashSync('12345', 10)
'$2b$10$FyK4gQpz75LfA6pKPw.mqu/qX0oGG/nB/DDW9i.54UjZHAZynB4/C'


> mongo
> use books <--!!!!!! books is a db name
> db.users.insert({email: "12345@mail.ru", passwordHash: "$2b$10$FyK4gQpz75LfA6pKPw.mqu/qX0oGG/nB/DDW9i.54UjZHAZynB4/C"})
WriteResult({ "nInserted" : 1 })

GR:
key: qjdcRBrFx73nkDlXWNRfHw
secret: YKPpwiN0VPfZz1ZjT02QsGSHWsAL9Wpj0HRzUkeI
