const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
var data =  [{"id":"1","received":"2019-02-05T14:19:07.619Z","from":"Ronny_Breitenberg41@gmail.com","subject":"Officer Usability Electronics","text":"You can't quantify the panel without compressing the auxiliary EXE firewall!","read":false,"to":"somebody@email.com"},{"id":"2","received":"2019-02-05T09:56:32.574Z","from":"Alize.Stehr61@gmail.com","subject":"grid-enabled bi-directional Rubber","text":"If we quantify the circuit, we can get to the SSL panel through the multi-byte PCI panel!","read":false,"to":"somebody@email.com"},{"id":"3","received":"2019-02-05T22:56:07.129Z","from":"Kaleb38@yahoo.com","subject":"South Georgia and the South Sandwich Islands Associate IB","text":"Use the optical USB protocol, then you can reboot the back-end alarm!","read":false,"to":"somebody@email.com"},{"id":"4","received":"2019-02-05T21:17:32.610Z","from":"Moriah.Fahey@yahoo.com","subject":"Bedfordshire","text":"The SAS transmitter is down, program the haptic protocol so we can hack the HTTP pixel!","read":false,"to":"somebody@email.com"},{"id":"5","received":"2019-02-05T18:24:47.900Z","from":"Desiree_Abbott@gmail.com","subject":"Sleek Soft Salad","text":"Use the cross-platform AGP card, then you can parse the digital firewall!","read":false,"to":"somebody@email.com"},{"id":"6","received":"2019-02-05T06:45:09.722Z","from":"Larissa14@gmail.com","subject":"Burkina Faso Electronics","text":"The COM hard drive is down, program the open-source protocol so we can back up the ADP program!","read":false,"to":"somebody@email.com"},{"id":"7","received":"2019-02-05T17:12:17.762Z","from":"Bridgette.Jacobson@gmail.com","subject":"bandwidth","text":"The RSS microchip is down, calculate the back-end bus so we can compress the USB firewall!","read":false,"to":"somebody@email.com"},{"id":"8","received":"2019-02-05T23:37:46.423Z","from":"Wiley12@gmail.com","subject":"synthesize","text":"We need to input the auxiliary SMS alarm!","read":false,"to":"somebody@email.com"},{"id":"9","received":"2019-02-05T05:54:44.835Z","from":"Edwardo_Nitzsche59@yahoo.com","subject":"Latvia International","text":"You can't override the matrix without backing up the primary XML system!","read":false,"to":"somebody@email.com"},{"id":"10","received":"2019-02-05T21:39:18.480Z","from":"Jayden_Kuhic@yahoo.com","subject":"deposit","text":"If we generate the feed, we can get to the SAS interface through the 1080p EXE bandwidth!","read":false,"to":"somebody@email.com"},{"id":"11","received":"2019-02-05T21:05:51.064Z","from":"Devin74@yahoo.com","subject":"monitor","text":"Try to index the SDD pixel, maybe it will connect the mobile card!","read":false,"to":"somebody@email.com"},{"id":"12","received":"2019-02-05T20:36:58.246Z","from":"Austin_Baumbach50@yahoo.com","subject":"Brand deposit","text":"The HTTP card is down, parse the redundant microchip so we can quantify the PCI panel!","read":false,"to":"somebody@email.com"},{"id":"13","received":"2019-02-05T09:48:29.613Z","from":"Rita.Lang45@gmail.com","subject":"Lead Officer","text":"Use the optical XML capacitor, then you can navigate the mobile bus!","read":false,"to":"somebody@email.com"},{"id":"14","received":"2019-02-05T04:48:53.767Z","from":"Brooks_Waters65@yahoo.com","subject":"context-sensitive","text":"compressing the matrix won't do anything, we need to connect the redundant SMS feed!","read":false,"to":"somebody@email.com"},{"id":"15","received":"2019-02-05T13:22:22.061Z","from":"Marguerite_Kuhn@hotmail.com","subject":"Serbia","text":"If we synthesize the card, we can get to the PCI panel through the redundant HDD alarm!","read":false,"to":"somebody@email.com"}];
var new_id = 100;

app.post('/api/sent_emails',(req, res, next) => {
  req.body.id = new_id;
  new_id++;
  data.unshift(req.body);
  res.status(201).json({
      message: "fail",
      email: req.body
  });
});

app.get('/api/sent_emails',(req, res, next) => {
  res.status(200).json({
      message: "successfully get sent emails",
      emails: data
  });
});

module.exports = app;
