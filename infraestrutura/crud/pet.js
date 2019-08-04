const executaQuery = require('../database/queries')

class Pet {
  lista() {
    const sql = 'SELECT pet.*, cli.nome as donoNome, cli.id as donoId, cli.cpf as donoCpf FROM Pets pet INNER JOIN Clientes cli on pet.donoId = cli.id'

    return executaQuery(sql).then(pets => 
      pets.map(pet => ({
        id: pet.id,
        nome: pet.nome,
        tipo: pet.tipo,
        observacoes: pet.observacoes,
        dono: {
          id: pet.donoId,
          nome: pet.donoNome,
          cpf: pet.donoCpf
        }
      })))    
  }

  buscaPorId(id) {
    const sql = `SELECT pet.*, cli.nome as donoNome, cli.id as donoId, cli.cpf as donoCpf FROM Pets pet INNER JOIN Clientes cli on pet.donoId = cli.id WHERE pet.id=${parseInt(id)}`

    return executaQuery(sql).then(pets => ({
      id: pets[0].id,
      nome: pets[0].nome,
      tipo: pets[0].tipo,
      observacoes: pets[0].observacoes,
      dono: {
        id: pets[0].donoId,
        nome: pets[0].donoNome,
        cpf: pets[0].donoCpf
      }
    }))
  }

  adiciona(item) {
    const { nome, donoId, tipo, observacoes } = item

    const sql = `INSERT INTO Pets(nome, donoId, tipo, observacoes) VALUES('${nome}', ${donoId}, '${tipo}', '${observacoes}')`

    return executaQuery(sql).then(resposta => ({
      id: resposta.insertId,
      nome,
      donoId,
      tipo,
      observacoes
    }))
  }

  atualiza(novoItem) {
    const { id, nome, donoId, tipo, observacoes } = novoItem

    const sql = `UPDATE Pets SET nome='${nome}', donoId=${donoId}, tipo='${tipo}', observacoes='${observacoes}' WHERE id=${id}; SELECT * FROM Clientes WHERE id=${donoId}`
    
    return executaQuery(sql).then(dados => {
      const dono = dados[1][0]

      return ({
        ...novoItem, dono
      })
    })
  }

  deleta(id) {
    const sql = `DELETE FROM Pets WHERE id=${id}`

    return executaQuery(sql).then(() => id)
  }
}

module.exports = new Pet
