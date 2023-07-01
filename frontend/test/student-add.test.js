import { Selector } from 'testcafe';

fixture`Testing Student UI`
    .page`https://devexpress.github.io/testcafe/example`;

test('Testing add students', async t => {
    
    await t.expect(true).ok();
    
});
