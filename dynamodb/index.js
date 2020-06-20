var AWS = require('aws-sdk');

AWS.config.update({
    region: 'local',
    endpoint: 'http://localhost:8000'
});

var db = new AWS.DynamoDB();

var params = {
    TableName: 'Test',
    KeySchema: [
        {
            AttributeName: 'partner_id', KeyType: 'HASH'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    },
    AttributeDefinitions: [
        {
            AttributeName: 'partner_id', AttributeType: 'N'
        }
    ]
}

db.createTable(params, function(err, data) {
   if (err) {
       console.log(err, err.stack);
   } else {
       console.log(data);
   } 
});