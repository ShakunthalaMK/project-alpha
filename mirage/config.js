export default function() {
  this.get('/projects', function() {
    return {
      data: [{
        type: 'projects',
        id: 1,
        attributes: {
         title: 'HAN',
         client: 'Healthcare Asset Network',
         link: 'https://play.google.com/store/apps/details?id=com.hanmobileapp',
         image: 'http://www.filetolink.com/005fd8df84'
        }
      }, {
        type: 'projects',
        id: 2,
        attributes: {
         title: 'storeFlix',
         client: 'Storeflix',
         link: 'https://play.google.com/store/apps/details?id=com.sf.android',
         image: 'http://www.filetolink.com/1d2ab3bbc2'
        }
      }, {
        type: 'projects',
        id: 3,
        attributes: {
         title: 'eSecuritel Mobile Security',
         client: 'NQ Mobile',
         link: 'https://play.google.com/store/apps/details?id=com.nq.esecuritelmobilesecurity',
         image: 'http://www.filetolink.com/d9025519ac'
        }
      }]
    };
  });
}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */

