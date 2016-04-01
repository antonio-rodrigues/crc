// TODO: refactor scaffolding (Services, Filters, Directives, Values/Constants...)
angular.module('CrcApp')
  .constant('appSettings', {
    title: 'CRC – Central de Risco de Crédito',
    version: '0.1.16',
    api: {
      url: 'http://localhost:8080',
      googleCloudKey: 'AIzaSyCp4id0AWX6GJWzXYHFuu3feBiiM7KXGc8',
      googleProjectId: 'api-project-147472434866'
    },
    filemap: {
      DEV: 'Novos Devedores',
      SLD: 'Saldos Devedores',
      RESP: 'Disseminação Saldos Centralizados'
    },
    table: {
      itemsPerPage: 5
    }
  });
