const publication = require('../../../domain/publication')

async function getPublication (publicationRepository){
    let publications = await publicationRepository.findAll()
    return publications.map(publica => new publication(publica._id, publica.name, publica.category, publica.description, publica.image))
}

module.exports = {getPublication}