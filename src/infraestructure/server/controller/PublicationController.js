let {addPublication} = require('../../../application/usecase/publication/addPublication')
let {getPublication} = require('../../../application/usecase/publication/getPublication')
const deletePublication = require('../../../application/usecase/publication/deletePublication')
const updatePublication  = require('../../../application/usecase/publication/updatePublication')

const mongoPublicationRepository = require ('../../repository/mongoPublicationRepository')

async function createPublication (req,res){
    try{
        const {name, category, description}=req.body
        let publication=await addPublication(name, category, description, mongoPublicationRepository.prototype)
        res.json(publication)
    }catch(error){
        res.status(500).send(error);
    }
}

async function listPublications(req,res){
    try{
        let publica=await getPublication(mongoPublicationRepository.prototype)
        res.json(publica)
    }catch(error){
        res.status(500).send(error);
    }
}

async function removePublication(req, res){
    
    const id = req.params.id;
        console.log(id)
        try{
            const publications = await deletePublication(id, mongoPublicationRepository.prototype )
            console.log(publications)
            res.json(publications)
            
        }catch(error){
            res.json(error)
        }
    
}

async function modificPublication(req, res){
    const body = req.body;
    const id = req.params.id;
        console.log(id, body)
        try {
            const modifiedPublication = await updatePublication(mongoPublicationRepository.prototype, id, body)
            console.log(modifiedPublication)
            res.json(modifiedPublication)

        } catch (error) {
            res.json(error)
    
        }
}

module.exports ={createPublication, listPublications, removePublication, modificPublication}