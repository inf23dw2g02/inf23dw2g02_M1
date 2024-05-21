var sql = require("../utils/db");

const countDigimon = (req, res) => {
    sql.query("SELECT COUNT(id_digimon) FROM Digimon", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveDigimon = (req, res) => {
  sql.query("SELECT * FROM Digimon", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createDigimon = (req, res) => {
  sql.query(
    "INSERT INTO Digimon (nome, tipo1, tipo2) VALUES (?,?,?)",
    [
      req.body.name
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveDigimonbyID = (req, res) => {
    sql.query(
    "SELECT * FROM Digimon WHERE id_digimon = ?",
    [req.params.id_digimon],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteDigimon = (req, res) => {
    sql.query(
    "DELETE FROM Digimon WHERE id_digimon = ?",
    [req.params.id_digimon],
    function (err, result) {
      if (err) throw err;
      res.send("Digimon " + req.params.id_digimon + " successfully deleted, you monster");
    }
  );
};

const updateDigimon = (req, res) => {
  sql.query(
    "UPDATE Digimon SET nome = ?, tipo1 = ?, tipo2 = ? WHERE id_digimon = ?",
    [
      req.body.nome,
      req.body.tipo1,
      req.body.tipo2,
      req.params.id_digimon
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countDigimon, retrieveDigimon, createDigimon , retrieveDigimonbyID, updateDigimon, deleteDigimon};