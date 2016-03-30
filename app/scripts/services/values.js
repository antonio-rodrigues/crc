angular.module('CrcApp')
  .constant('appSettings', {
    title: 'CRC – Central de Risco de Crédito',
    version: '0.1.8',
    api: {
      url: 'http://localhost:8080'
    },
    filemap: {
      DEV: 'Novos Devedores',
      SLD: 'Saldos de Devedores',
      RESP: 'Saldos Centralizados'
    }
  });
