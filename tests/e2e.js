/* global fixture, window */

import { ClientFunction, Selector } from 'testcafe';
import { waitForReact, ReactSelector } from 'testcafe-react-selectors';

fixture`post list`
  .page`http://localhost:8080/`
  .beforeEach(async () => await waitForReact());

test('render Items', async (t) => {
  await t
    .expect(ReactSelector('Items').count).eql(1)
    .wait(1000);
});

test('click post', async (t) => {
  await t
    .click(Selector('.item').nth(0))
    .expect(Selector('.image').count).eql(1)
    .expect(Selector('.content').count).eql(1)
    .expect(Selector('.description').count).eql(1)
    .wait(1000);
});

fixture`post`.page`http://localhost:8080/posts/1`;

test('render Item', async t => {
  await t.expect(ReactSelector('Item').count).eql(1)
    .wait(1000);
});

test('click breadcrumb `post list`', async (t) => {
  const getPageUrl = ClientFunction(() => window.location.href);

  await t
    .click(ReactSelector('Breadcrumb').findReact('a').nth(0))
    .expect(getPageUrl()).contains('http://localhost:8080/')
    .wait(1000);
});
