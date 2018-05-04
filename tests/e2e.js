/* global fixture, window */

import { ClientFunction, Selector } from 'testcafe';

fixture`e2e test`.page`http://localhost:8080/`;

const getPageUrl = ClientFunction(() => window.location.href);

test('list page', async (t) => {
  await t
    .expect(Selector('.item').count).eql(20)
    .wait(1000);
});

test('detail page', async (t) => {
  await t
    .click(Selector('.header').nth(0))
    .expect(Selector('.image').count).eql(1)
    .expect(Selector('.content').count).eql(1)
    .expect(Selector('.description').count).eql(1)
    .wait(1000);
});

test('go to detail page and back', async (t) => {
  await t
    .click(Selector('.header').nth(0))
    .expect(getPageUrl()).contains('http://localhost:8080/article/1')
    .click(Selector('.breadcrumb a').nth(0))
    .expect(getPageUrl()).contains('http://localhost:8080/')
    .wait(1000);
});
