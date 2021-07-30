const publicationRepository = require('../src/domain/publicationRepository');
const mockPublicationRepository = new publicationRepository();
const {deletePublication} = require('../src/application/usecase/publication/deletePublication');

test('test delete publication', async () => {
  // given
  mockPublicationRepository.delete = jest.fn(() => true);

  // when
  await deletePublication(123, mockPublicationRepository);

  // then
  expect(mockPublicationRepository.delete).toHaveBeenCalledWith(123);
});