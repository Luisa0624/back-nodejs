const publicationRepository = require('../../domain/publicationRepository');
const publicationSchema = require('../db/publicationsSchemas/publicationsSchema')
const publication = require('../../domain/publication');

module.exports = class extends publicationRepository{

    constructor(){
        super();
    }

    async save(publicationEntity){
        const {name, category, description} = publicationEntity

        const mongoosePublication = new publicationSchema({name, category, description})
        await mongoosePublication.save()
        return new publication(mongoosePublication._id,mongoosePublication.name,mongoosePublication.category,mongoosePublication.description )
    }

    async findAll(){
        return publicationSchema.find({})
    }

    async findById(id){
        return publicationSchema.findById({id})
    }

    async delete(id){
        
        return publicationSchema.deleteOne({_id:id})   
        
    }

    async modificPublication(id, publicationEntity){
        
        const exists = await publication.findOne({_id: id}, function (err, doc) {
            
            if(err){
                return ('La publicacion no existe')
            }
            if (publicationEntity.name) {
                doc.name = publicationEntity.name
            }
            if (publicationEntity.category) {
                doc.category = publicationEntity.category
            }
            if (publicationEntity.description) {
                doc.description = publicationEntity.description
            }
            
            doc.__v += 1
            doc.save()
        });
        return exists
    }


   
}