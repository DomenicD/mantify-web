module.exports = function() {
    var client = './src/client/';
    var server = './src/server/';
    var clientApp = client + 'code/app/';
    var genfiles = client + '.gen/';
    var codeGenfiles = genfiles + 'code/';
    var clientAppGenfiles = codeGenfiles + 'app/';    
    var report = './report/';
    var root = './';
    var specRunnerFile = 'specs.html';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];
    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var nodeModules = 'node_modules';
    var typings = './typings/';

    var config = {
        /**
         * File paths
         */
        
        // All typescript settings
        ts: {
            // all typescript that we want to vet
            allts: [
                './src/**/*.ts',
                './*.ts'
            ],
            clientts: [
                './src/client/code/**/*.ts'
            ],
            serverts: [
                './src/server/**/*.ts'
            ],
            defs: typings + '**/*.ts',
            output: '.tmp',
            refs: typings + 'app.d.ts',
            appRefs: '.tmp/typings/app-dts/',
            transformFn: function (filepath) {
                return '/// <reference path="..' + filepath + '" />';
            },
            tscOptions: {
                target: 'ES5',
                declarationFiles: true,
                noExternalResolve: true,
                module: 'commonjs',
                noImplicitAny: true,
                removeComments: false,
                sortOutput: true
            },
            typings: typings            
        },

        // all javascript that we want to vet
        alljs: [
            codeGenfiles + 'test-helpers/*.js',
            './*.js'
        ],
        build: './build/',
        client: client,
        css: genfiles + 'styles.css',
        genfiles: genfiles,        
        html: client + '**/*.html',
        htmltemplates: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        // app js, with no specs
        js: [
            clientAppGenfiles + '**/*.module.js',
            clientAppGenfiles + '**/*.js',
            '!' + clientAppGenfiles + '**/*.spec.js'
        ],
        jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ],        
        report: report,
        root: root,
        sass: [
            client + 'styles/**/*.scss',
            clientApp + '**/*.scss'
        ],
        server: server,
        source: 'src/',
        stubsjs: [
            bower.directory + 'angular-mocks/angular-mocks.js',
            client + 'stubs/**/*.js'
        ],
        // temp: temp,

        /**
         * optimized files
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js',
            styles: 'styles.css'
        },

        /**
         * plato
         */
        plato: {js: clientAppGenfiles + '**/*.js'},

        /**
         * browser sync
         */
        browserReloadDelay: 1000,

        /**
         * template cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                root: 'app/',
                standAlone: false
            }
        },

        /**
         * Bower and NPM files
         */
        bower: bower,
        packages: [
            './package.json',
            './bower.json'
        ],

        /**
         * specs.html, our HTML spec runner
         */
        specRunner: client + specRunnerFile,
        specRunnerFile: specRunnerFile,

        /**
         * The sequence of the injections into specs.html:
         *  1 testlibraries
         *      mocha setup
         *  2 bower
         *  3 js
         *  4 spechelpers
         *  5 specs
         *  6 templates
         */
        testlibraries: [
            nodeModules + '/mocha/mocha.js',
            nodeModules + '/chai/chai.js',
            nodeModules + '/mocha-clean/index.js',
            nodeModules + '/sinon-chai/lib/sinon-chai.js'
        ],
        specHelpers: [client + 'test-helpers/*.js'],
        specs: [clientAppGenfiles + '**/*.spec.js'],
        serverIntegrationSpecs: [client + '/tests/server-integration/**/*.spec.js'],

        /**
         * Node settings
         */
        nodeServer: './src/server/app.js',
        defaultPort: '8001'
    };

    /**
     * wiredep and bower settings
     */
    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    /**
     * karma settings
     */
    config.karma = getKarmaOptions();

    return config;

    ////////////////

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                config.specHelpers,
                clientAppGenfiles + '**/*.module.js',
                clientAppGenfiles + '**/*.js',
                genfiles + config.templateCache.file,
                config.serverIntegrationSpecs
            ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [
                    // reporters not supporting the `file` property
                    {type: 'html', subdir: 'report-html'},
                    {type: 'lcov', subdir: 'report-lcov'},
                    {type: 'text-summary'} //, subdir: '.', file: 'text-summary.txt'}
                ]
            },
            preprocessors: {}
        };
        options.preprocessors[clientAppGenfiles + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    }
};
