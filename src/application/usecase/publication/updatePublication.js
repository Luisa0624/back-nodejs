module.exports = async function updatePublication (id,body,publicationRepository) {
    
    const modifiedPublication= await publicationRepository.update(id, body);
    
    return modifiedPublication
};
