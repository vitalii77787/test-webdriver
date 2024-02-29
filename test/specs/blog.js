import blogPage from "../pages/blog-page.js";

describe('Blog', () => {
    it ('Get the list of all recent Posts & assert the length of each list item > 1 & assert the total count',  async () => {
        await blogPage.open();

        // get the recent post list elements
        const recentPostList = await blogPage.listRecentPost;

        // loop  through the list & assert the text length is grater than 10
        for (const item of recentPostList) {
            const text = item.getText();
            await expect(text.length).toBeGreaterThan(10);
        } 

        // assert the total length of the list is 4
        await expect(recentPostList).toHaveLength(4);
    });
});