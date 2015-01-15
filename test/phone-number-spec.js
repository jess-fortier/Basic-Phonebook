describe('phone number field validation', function() {
	beforeEach(function() {browser.get('http://jessfortier.com/tasters/phonebook')});
    
    it('passes a trivial test', function() {
        foo=true;
        expect(foo).toEqual(true);
    });
});