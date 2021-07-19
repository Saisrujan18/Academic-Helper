const mailer = require("nodemailer");
var transporter =mailer.createTransport(
    {
        service:'gmail',
        auth:{
            user : 'cs19b043@iittp.ac.in',
            pass : 'PASS'
        }
    }
)

var mailoptions={
    to: 'yayisaisrujan@gmail.com',
    from: 'cs19b043@iittp.ac.in',
    subject:'fu',
    text:'test 1'
}

transporter.sendMail(mailoptions,function(err,info){
    if(err){console.log(err);}
    else {console.log("hey");}
})