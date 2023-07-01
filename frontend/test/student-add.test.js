import { Selector } from 'testcafe';

fixture`Testing Student UI`
    .page`http://localhost:4200/addStudent`;

test('Testing add students', async t => {
    
    await t.expect(true).ok();
    
});
