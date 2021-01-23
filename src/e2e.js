/* global fixture */

import { ClientFunction, Selector } from 'testcafe';
import { waitForReact, ReactSelector } from 'testcafe-react-selectors';

fixture`repo list`
  .page`http://localhost:8080/`
  .beforeEach(async () => await waitForReact());

test('initial render', async t => {
  await t.expect(ReactSelector('Repos').count).eql(1);
});

const scrollToBottom = ClientFunction(function() {
  window.scrollBy(0, window.document.body.offsetHeight);
});

test('infinite load', async t => {
  await t.expect(Selector('.item').count).eql(15);
  await scrollToBottom();
  await t.expect(Selector('.item').count).eql(20);
});

test('user not found', async t => {
  await t.navigateTo('http://localhost:8080/404');
  await t.expect(Selector('img[alt="kitty"]').count).eql(1);
});
