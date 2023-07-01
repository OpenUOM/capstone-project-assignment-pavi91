import { Selector } from 'testcafe';

fixture`Testing Student UI`
    .page`http://localhost:4200/student`;

test('Testing add students', async t => {
    await t.navigateTo("/addStudent");
    
    // Fill in the form fields and submit
    await t.typeText("#student-id", "999999");
    await t.typeText("#student-name", "Pasindu Basnayaka");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-Hometown", "Catholic");
    await t.click("#student-add");

    await t.navigateTo("/student");

    const table = Selector('#student-table');
    const rowCount = await table.find('tr').count;
    
    // Check if the expected student name is present in any row
    let isStudentFound = false;
    for (let i = 0; i < rowCount; i++) {
        const tdText = await table.find('tr').nth(i).innerText;
        if (tdText.includes("Supun Mihiranga")) {
            isStudentFound = true;
            break;
        }
    }
    
    // Assert if the student is found
    await t.expect(isStudentFound).ok();
});
