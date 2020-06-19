#!/bin/bash
# Infos about local DynamoDB
# - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
mkdir local-db
wget https://s3.sa-east-1.amazonaws.com/dynamodb-local-sao-paulo/dynamodb_local_latest.zip -P ./local-db
unzip ./local-db/dynamodb_local_latest.zip -d ./local-db
java -Djava.library.path=local-db/DynamoDBLocal_lib -jar ./local-db/DynamoDBLocal.jar -sharedDb

# Check local dynamodb
# - aws dynamodb list-tables --endpoint-url http://localhost:8000