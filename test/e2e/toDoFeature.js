describe('To Do Avenger', function () {
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('has a title', function () {
        expect(browser.getTitle()).toEqual('To Do Avenger');
    });

});
