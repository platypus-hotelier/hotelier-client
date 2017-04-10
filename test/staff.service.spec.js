(function() {
  'use strict';
  let expect = chai.expect;

  describe('staff service', function (){
    let StaffService;
    let $httpBackend;

    beforeEach(module('hotel'));

    beforeEach(inject(function(_$httpBackend_, _StaffService_){
      StaffService = _StaffService_;
      $httpBackend = _$httpBackend_;

      $httpBackend
        .whenPOST('https://platypus-hotelier-api.herokuapp.com/api/Staffs/login')
        .respond({
          email: 'jordan@hotelier.com',
          password: 'foobar'
        });
    }));

    it('should be able to log a user in', function(done){
      let result = StaffService.login({email:'Jordan@hotelier.com', password:'foobar'});
      expect(result).to.be.an('object');
      expect(result.then).to.be.a('function');
      expect(result.catch).to.be.a('function');

      result
        .then(function(){
          done('We should not resolve with bad arguments');
        })
        .catch(function(err){
          done(err);
        });
        $httpBackend.flush();
    });
  });
}());
