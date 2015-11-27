const version = '0.5.3';

Package.describe({
  name: 'akasha:shelljs',
  version: version,
  // Brief, one-line summary of the package.
  summary: 'shelljs package wrapped for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AkashaProject/meteor-shelljs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'shelljs':  version
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('shelljs.js', 'server');
  api.export('Shelljs', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('akasha:shelljs');
  api.addFiles('shelljs-tests.js');
});
