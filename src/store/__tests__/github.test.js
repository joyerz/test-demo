import 'jest';
import { fetchGithub } from '../github';

it('test api fetching from github', async (done) => {
  const result = await fetchGithub();
  expect(result?.history?.success).toBe(true);
  done();
});
