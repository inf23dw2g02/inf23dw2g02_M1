var sql = require("../utils/db");


const retrieveTrainerByTeamID = (req, res) => {
  // Updated SQL query to include a join on the Digimon table
  var sqlQuery = `
    SELECT Trainer.*, Digimon.nome AS digimon_name 
    FROM Trainer 
    JOIN Team ON Trainer.id_trainer = Team.id_trainer 
    JOIN Digimon ON Team.id_digimon = Digimon.id_digimon 
    WHERE Team.id_team = ?`;

  sql.query(sqlQuery, [req.params.id], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred while retrieving the trainer and digimon data.");
    }
    if (result.length === 0) {
      return res.status(404).send("Trainer or Digimon not found for the specified team.");
    }
    res.send(result);
  });
}

module.exports = {retrieveTrainerByTeamID};

