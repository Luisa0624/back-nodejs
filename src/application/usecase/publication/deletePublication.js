async function deletePublication(id, publicationRepository) {
  if (!id) {
      return {
          errorMessage: "La publicacion no existe",
          success: false
      }
  }
  return await publicationRepository.delete(id);
}

module.exports = { deletePublication };