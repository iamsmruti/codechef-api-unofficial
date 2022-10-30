import Puppeteer from "puppeteer";

const scrapper = async () => {
    const url = "https://www.codechef.com/contests?itm_medium=home&itm_campaign=allcontests";
    const browser = await Puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);

    let ongoingContests = await page.evaluate(() => {
        let results = []
        let items = document.querySelectorAll('#present-contests-data tr')
        items.forEach((item) => {
            results.push({
                code: item.querySelector('td:nth-child(1)').innerText,
                title: item.querySelector('td:nth-child(2)').innerText,
                url: "https://www.codechef.com" + item.querySelector('td:nth-child(2) a').getAttribute('href'),
                startDate: item.querySelector('td:nth-child(3)').innerText.substring(0, 11),
                startTime: item.querySelector('td:nth-child(3)').innerText.substring(12, 21),
                duration: item.querySelector('td:nth-child(4)').innerText,
                endsIn: item.querySelector('td:nth-child(5)').innerText
            })
        })
        return results
    })

    let upcomingContests = await page.evaluate(() => {
        let results = []
        let items = document.querySelectorAll('#future-contests-data tr')
        items.forEach((item) => {
            results.push({
                code: item.querySelector('td:nth-child(1)').innerText,
                title: item.querySelector('td:nth-child(2)').innerText,
                url: "https://www.codechef.com" + item.querySelector('td:nth-child(2) a').getAttribute('href'),
                startDate: item.querySelector('td:nth-child(3)').innerText.substring(0, 11),
                startTime: item.querySelector('td:nth-child(3)').innerText.substring(12, 21),
                duration: item.querySelector('td:nth-child(4)').innerText,
                startsIn: item.querySelector('td:nth-child(5)').innerText
            })
        })
        return results
    })

    let pastContests = await page.evaluate(() => {
        let results = []
        let items = document.querySelectorAll('#past-contests-data tr')
        items.forEach((item) => {
            results.push({
                code: item.querySelector('td:nth-child(1)').innerText,
                title: item.querySelector('td:nth-child(2)').innerText,
                url: "https://www.codechef.com" + item.querySelector('td:nth-child(2) a').getAttribute('href'),
                startDate: item.querySelector('td:nth-child(3)').innerText.substring(0, 11),
                startTime: item.querySelector('td:nth-child(3)').innerText.substring(12, 21),
                duration: item.querySelector('td:nth-child(4)').innerText,
                participants: item.querySelector('td:nth-child(5)').innerText
            })
        })
        return results
    })

    let practiseContests = await page.evaluate(() => {
        let results = []
        let items = document.querySelectorAll('#practice-contests-data tr')
        items.forEach((item) => {
            results.push({
                code: item.querySelector('td:nth-child(1)').innerText,
                title: item.querySelector('td:nth-child(2)').innerText,
                url: "https://www.codechef.com" + item.querySelector('td:nth-child(2) a').getAttribute('href'),
                startDate: item.querySelector('td:nth-child(3)').innerText.substring(0, 11),
                startTime: item.querySelector('td:nth-child(3)').innerText.substring(12, 21),
                duration: item.querySelector('td:nth-child(4)').innerText,
                participants: item.querySelector('td:nth-child(5)').innerText
            })
        })
        return results
    })

    await browser.close();

    return {
        ongoingContests,
        upcomingContests,
        practiseContests,
        pastContests
    }
}

export let codechef = await scrapper();