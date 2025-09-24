describe("Automation Panda Demo Site Tests", () => {
    let testData;
    before(() => {
        cy.fixture("testData").then((data) => {
            testData = data;
        });
    });
    beforeEach(() => {
        cy.visit(testData.url);
    });

    it("a. Verify the Home Page Title", () => {
        cy.title().should("eq", testData.homeTitle);
    });

    it("b. Click on Speaking and Verify Title", () => {
        cy.contains("Speaking").click();
        cy.title().should("eq", testData.speakingTitle);
    });
    it("c. Verify Keynote Addresses Section is Present and Correct", () => {
        cy.contains("Speaking").click();
        cy.contains("Keynote Addresses")
            .should("exist")          // check element is in DOM
            .and("be.visible");       // check element is visible
    });

    after(() => {
        cy.log("✅ All tests completed");
    });
});
