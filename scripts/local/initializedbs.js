db = db.getSiblingDB('admin');
db.createUser({ user: "openrmf" , pwd: "openrmf1234!", roles: ["readWriteAnyDatabase"]});
db.createUser({ user: "openrmftemplate" , pwd: "openrmf1234!", roles: ["readWriteAnyDatabase"]});
db.createUser({ user: "openrmfscore" , pwd: "openrmf1234!", roles: ["readWriteAnyDatabase"]});
db = db.getSiblingDB('openrmf');
db.createCollection("Artifacts");
db = db.getSiblingDB('openrmftemplate');
db.createCollection("Templates");
db = db.getSiblingDB('openrmfscore');
db.createCollection("Scores");