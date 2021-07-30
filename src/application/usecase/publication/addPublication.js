const publication = require('../../../domain/publication')

async function addPublication(name, category, description, publicationRepository){
    if(!name){
        return {errorMessage:"Se debe llenar el campo del nombre",
    succes:false};
    }

    const publi = new publication(null,name, category, description)
    return publicationRepository.save(publi)
}

module.exports = {addPublication}