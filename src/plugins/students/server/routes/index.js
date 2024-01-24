module.exports = [
  {
    method: 'GET',
    path: '/aashu',//localhost:1337/students/aashu
            //controller.method
    handler: 'myController.index',
    config: {
      auth:false,
      policies: [],
    },
  },
];
