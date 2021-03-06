Package.describe({
  name: "efhughes:autoform-file",
  summary: "File upload for AutoForm. Modified for Collabor8.",
  description: "File upload for AutoForm.  Modified for Collabor8.",
  version: "0.4.2",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'check',
    'coffeescript',
    'underscore',
    'reactive-var',
    'templating',
    'less@1.0.0 || 2.5.0',
    'aldeed:autoform@5.5.1',
    'fortawesome:fontawesome@4.4.0',
    'cfs:ui@0.1.3'
  ]);

  api.addFiles('lib/client/autoform-file.html', 'client');
  api.addFiles('lib/client/autoform-file.less', 'client');
  api.addFiles('lib/client/autoform-file.coffee', 'client');
  api.addFiles('lib/server/publish.coffee', 'server');
});
