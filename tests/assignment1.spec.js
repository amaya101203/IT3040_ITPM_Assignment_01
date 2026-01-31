const { test, expect } = require('@playwright/test');

test.describe('Swift Translator - Full 35 Case Excel Suite', () => {

    test.beforeEach(async ({ page }) => {
        // Increased timeout for slow page loads
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle', timeout: 60000 });
    });

    // Locators
    const singlishInput = (page) => page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const sinhalaOutput = (page) => page.locator('div.bg-slate-50');

    // --- POSITIVE DATA (001 - 024) ---
    const positiveTests = [
        { id: 'Pos_Fun_0001', input: 'oyaa hodhin innavadha', expected: 'ඔයා හොදින් ඉන්නවද' },
        { id: 'Pos_Fun_0002', input: 'mama kadeeta yanavaa. oyath enavadha?', expected: 'මම කඩේට යනවා. ඔයත් එනවද?' },
        { id: 'Pos_Fun_0003', input: 'mata kathaakaranna epaa.', expected: 'මට කතාකරන්න එපා.' },
        { id: 'Pos_Fun_0004', input: 'ethana kg kochcharak thiyenavadha?', expected: 'එතන kg කොච්චරක් තියෙනවද?' },
        { id: 'Pos_Fun_0005', input: 'karuNaakaralaa mata podi udhavvak karanna', expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න' },
        { id: 'Pos_Fun_0006', input: 'adha dhavasa 1/27/2026.', expected: 'අද දවස 1/27/2026.' },
        { id: 'Pos_Fun_0007', input: 'eyaa SMS godak evala thibunaa', expected: 'එයා SMS ගොඩක් එවල තිබුනා' },
        { id: 'Pos_Fun_0008', input: 'LinkedIn check karalaa balanna.', expected: 'LinkedIn check කරලා බලන්න.' },
        { id: 'Pos_Fun_0009', input: 'hari hari, mama ennam', expected: 'හරි හරි, මම එන්නම්' },
        { id: 'Pos_Fun_0010', input: 'mama Zoom meeting ekin gihin enna oone...', expected: 'මම Zoom meeting එකින් ගිහින් එන්න ඕනෙ...' },
        { id: 'Pos_Fun_0011', input: 'mata OTP ekak avashyayi, PIN number eka 7.30 AM...', expected: 'මට OTP එකක් අවශ්යයි, PIN number එක 7.30 AM...' },
        { id: 'Pos_Fun_0012', input: 'mama gedhara yanavaa (ehema hari nedha?)', expected: 'මම ගෙදර යනවා (එහෙම හරි නේද?)' },
        { 
            id: 'Pos_Fun_0013', 
            input: `adha dhavase karanna vaeda godak thiyee mata. api anidhdhaa yana family trip ekata geniyanna one badutika laeesthi karaganna onee. eth ekkama geniyanna oonee kaeema tikak suudhaanam karaganna oonee. mulinma karanna thiyenne market ekata gihin avashya badutika ganna Keels ekata yanna oonee. ekee hodha products thiyenavaa. mama hadhanna hithagena innavaa cheesy lasagna,ee vageema sandwich, thava monaahari drink ekak. avashya ingredients tika aragena ita passee yanna thiyenava salon ekata. mage eyebrows hadhaaganna.eth ekkama keratin ekakuth karaganna oonee. mata mee lagadhi aasavak avaa color ekak dhaanna kondeta. eth bayay natural hair ekata mokuth veydha kiyala. aasaava thibunata confidence eka nae karanna.iita passee aayee mata yanna thiyenava 4.30 PM vedhdhii library ekatath poth vagayak maaru karaganna.oya tika thamaa dhanata thiyena vaeda tika.`, 
            expected: 'අද දවසෙ කරන්න වැඩ ගොඩක් තියේ මට' 
        },
        { id: 'Pos_Fun_0014', input: 'api heta beach yanna inne', expected: 'අපි හෙට beach යන්න ඉන්නේ' },
        { id: 'Pos_Fun_0015', input: 'oyaa eka baeluvadha?', expected: 'ඔයා එක බැලුවද?' },
        { id: 'Pos_Fun_0016', input: 'mata eeka gaena kiyanna', expected: 'මට ඒක ගැන කියන්න' },
        { id: 'Pos_Fun_0017', input: 'mata eka karanna therenne naehae', expected: 'මට එක කරන්න තෙරෙන්නෙ නැහැ' },
        { id: 'Pos_Fun_0018', input: 'meeka Rs. 500 yi', expected: 'මේක Rs. 500 යි' },
        { id: 'Pos_Fun_0019', input: 'oyaa dhaen yanna.', expected: 'ඔයා දැන් යන්න.' },
        { id: 'Pos_Fun_0020', input: 'oyaata puluvannam mee dhaenmama ee vaedea karanna.', expected: 'ඔයාට පුලුවන්නම් මේ දැන්මම ඒ වැඩේ කරන්න.' },
        { id: 'Pos_Fun_0021', input: 'api help ekak illagamudha?', expected: 'අපි help එකක් ඉල්ලගමුද?' },
        { id: 'Pos_Fun_0022', input: 'mata QR code scan karanna, ID card eka cm 10 venna oone', expected: 'මට QR code scan කරන්න, ID card එක cm 10 වෙන්න ඕනෙ' },
        { id: 'Pos_Fun_0023', input: 'hari, eeka heta dhenna puluvan veyi', expected: 'හරි, ඒක හෙට දෙන්න පුලුවන් වෙයි' },
        { 
            id: 'Pos_Fun_0024', 
            input: `Mata hari aasayi sampradhaayika vidihata naethuva hithee saehaelluven jivath venna.namuth mata kavadavath baee ee vidhihata jiivath venna.boundaries valata yatath vela jiivath vena eka tharam dhukak thavath naee.anyway thamanta oonee vidhihakata saehaelluven ,sathutin nidhahasee inna haemootama laebenna oonee kiyalaa mama wish karanva.`, 
            expected: 'සැහැල්ලුවෙන් ජිවත් වෙන්න' 
        }
    ];

    // --- NEGATIVE DATA ---
    const negativeTests = [
        { id: 'Neg_Fun_001', input: 'mamagedharayanawamatawadakarannaoone', expectedFail: 'මමගෙදරයනwඅමටwඅඩකරන්නඕනෙ' },
        { id: 'Neg_Fun_002', input: 'mata today yanna oone to the bank and then ehema giya hæra', expectedFail: 'හ්æර' },
        { id: 'Neg_Fun_003', input: 'kohomada??????!!!!!!', expectedFail: 'කොහොමඩ' },
        { id: 'Neg_Fun_004', input: 'iPhone15ProMax', expectedFail: 'ඉඵ්හොනෙ15ඵ්‍රොමx' },
        { id: 'Neg_Fun_005', input: 'MaMa YeNaNvA gEdArA', expectedFail: 'Yඑණණ්ව' },
        { id: 'Neg_Fun_006', input: 'mila 5000  k wenawa', expectedFail: 'wඑනwඅ' },
        { id: 'Neg_Fun_007', input: 'Christopher Nolan thamayi writter.', expectedFail: 'wරිට්ටෙර්' },
        { id: 'Neg_Fun_008', input: 'mata need help with my project...', expectedFail: 'need help' },
        { id: 'Neg_Fun_009', input: 'shasanayata anuva pelapali kramaya athi karala', expectedFail: 'ශසනයට' },
        { id: 'Neg_Fun_010', input: 'Heta [Enter] api [Enter] yanawa', expectedFail: 'හෙට [Enter]' },
        { id: 'Neg_Fun_011', input: '1st person, 2nd floor', expectedFail: '2න්ඩ්' }
    ];

    // --- LOOP 1: POSITIVE TESTS ---
    for (const data of positiveTests) {
        test(`${data.id}: ${data.input.substring(0, 20)}`, async ({ page }) => {
            test.setTimeout(80000); 

            const inputField = singlishInput(page);
            const outputField = sinhalaOutput(page);

            await inputField.click();
            await inputField.clear();

            // Slower delay for better synchronization with site API
            await inputField.pressSequentially(data.input, { delay: 60 });
            await inputField.press('Space');
            
            // Wait for processing
            await page.waitForTimeout(2000);

            // Assertions
            await expect(outputField).not.toBeEmpty({ timeout: 30000 });
            await expect(outputField).toContainText(data.expected, { timeout: 20000 });
        });
    }

    // --- LOOP 2: NEGATIVE TESTS ---
    for (const data of negativeTests) {
        test(`${data.id}: Validation of Error/Failure Pattern`, async ({ page }) => {
            test.setTimeout(60000);
            const inputField = singlishInput(page);
            const outputField = sinhalaOutput(page);

            await inputField.click();
            await inputField.clear();
            await inputField.pressSequentially(data.input, { delay: 60 });
            await inputField.press('Space');

            // Wait for processing
            await page.waitForTimeout(2000);

            await expect(outputField).not.toBeEmpty({ timeout: 30000 });
            const actual = await outputField.innerText();
            expect(actual).toContain(data.expectedFail);
        });
    }

    // --- UI TESTS ---
    test('Pos_UI_0001: Real-time character transliteration update', async ({ page }) => {
        const inputField = singlishInput(page);
        await inputField.pressSequentially('suba udhaeesanak', { delay: 60 });
        await page.waitForTimeout(1000);
        await expect(sinhalaOutput(page)).toHaveText(/සුබ උදෑසනක්/, { timeout: 15000 });
    });

    test('Neg_UI_0001: UI response when clearing the input field', async ({ page }) => {
        const input = singlishInput(page);
        const output = sinhalaOutput(page);

        await input.fill('api yamu');
        await input.dispatchEvent('input'); 
        await page.waitForTimeout(1000);
        await expect(output).not.toBeEmpty({ timeout: 10000 });

        await input.clear();
        await input.dispatchEvent('input');
        await page.waitForTimeout(1000);
        await expect(output).toBeEmpty({ timeout: 10000 });
    });
});