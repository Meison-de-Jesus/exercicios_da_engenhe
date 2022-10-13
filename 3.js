const dado = [
  {
  id:1,
  name:"Bartolomeu Santos",
  idade:36,
  created_at:"2022_03_1"
 
  },
  {
  id:2,
  name:"Maria Mesote",
  idade:45,
  created_at:"2022_02_1"
 
  },
  {
  id:3,
  name:"Juliana Silva",
  idade:36,
  created_at:"2018_03_1"
 
  }
  ]
  const nomes =dado.map(nome=>nome.name)
  const idades =dado.map(dados=>dados.idade)
  console.log(nomes,idades);