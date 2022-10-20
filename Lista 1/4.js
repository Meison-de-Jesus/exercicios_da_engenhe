
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
   
    function media(x){
        const totalidades =dado.reduce((prevVal,elem)=>prevVal+elem.idade,0)
        const totalidade2=(totalidades/3)
        
        return totalidade2
        }
        const totalidades =dado.reduce((prevVal,elem)=>prevVal+elem.idade,0)
    console.log(media(totalidades))
    
