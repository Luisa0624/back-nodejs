
const publicationRepository = require('../src/domain/publicationRepository');
const mockPublicationRepository = new publicationRepository();
const {addPublication} = require('../src/application/usecase/publication/addPublication');
const Publication = require('../src/domain/publication');

test('test add publication', async () => {
  // given
  const persistedPublication = new Publication(123, 'El conjuro', 'Terror', 'Expedientes Warren');
  mockPublicationRepository.save = jest.fn(() => persistedPublication);

  // when
  const publica = await addPublication('El conjuro', 'Terror', 'Expedientes Warren', mockPublicationRepository );

  // then
  expect(mockPublicationRepository.save).toHaveBeenCalledWith(new Publication (null, 'El conjuro', 'Terror', 'Expedientes Warren'));
  expect(publica).toEqual(persistedPublication);
});