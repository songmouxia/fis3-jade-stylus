fis.config.set('modules.parser.jade','jade');
fis.config.set('roadmap.ext.jade','html');
fis.match('*.styl',{
	 parser:'stylus',
	 rExt:'.css'
});
fis.match('index.jade', {
    parser: fis.plugin('jade', {
        pretty: true,
        // variables you want to give to the template complie function, JSON Format.
    }),
    rExt: 'html'
})