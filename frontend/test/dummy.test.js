import { Selector } from 'testcafe';

fixture`Dummy Test`
    .page`https://devexpress.github.io/testcafe/example`;

test('Dummy Test', async t => {
    // Use a selector to target the <h1> element
    const h1Element = Selector('h1');

    // Assert that the <h1> element exists on the page
    await t.expect(h1Element.exists).ok();
});