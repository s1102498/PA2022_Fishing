#! /bin/bash
mongoimport --authenticationDatabase admin -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --db $MONGO_INITDB_DATABASE --collection users --type json --file /docker-entrypoint-initdb.d/init_db.json