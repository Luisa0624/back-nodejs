const publicationRepository = require('../src/domain/publicationRepository');
const mockPublicationRepository = new publicationRepository();
const {getPublication} = require('../src/application/usecase/publication/getPublication');

test('getPublication test', async () => {
  // given
  mockPublicationRepository.findAll = () => [
    {
        "name": "Transportador",
        "category": "Accion",
        "description": "esta es la descripcion"
    },
    {
        "name": "El conjuro",
        "category": "Terror",
        "description": "Expedientes Warren"
    }
  ];

  // when
  const publications = await getPublication(mockPublicationRepository);

  // then
  expect(publications).toEqual([
    {
        "name": "Transportador",
        "category": "Accion",
        "description": "esta es la descripcion"
    },
    {
        "name": "El conjuro",
        "category": "Terror",
        "description": "Expedientes Warren"
    }
  ]);
});