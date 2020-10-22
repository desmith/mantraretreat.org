module.exports = {
    npm: {
        globals: {
            $: 'jquery',
            jQuery: 'jquery',
            bootstrap: 'bootstrap'
        },
        styles: {
            bootstrap: ['scss/bootstrap.scss']
        },
    },

    conventions: {
        assets: /assets\//,
    },

    files: {
        javascripts: {
            joinTo: {
                'js/mantraretreat.js': /^(src\/js)/,
                'js/vendor.js': /node_modules/,
            },
            order: {
                before: [
                    'node_modules/jquery/src/jquery.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js'
                ]
            },
        },
        stylesheets: {
            joinTo: {
                'css/mantraretreat.css': /^(src\/styl)/,
                'css/creative.css': /^(src\/scss\/creative\.scss)|(src\/css\/creative\.css)/,
                'css/vendor.css': /^(src\/css\/vendor)\//,
            },
        },
    },

    modules: {
        nameCleaner: path => path.replace(/^src\//, ''),
    },

    overrides: {
        production: {
          sourceMaps: true
        }
    },

    paths: {
        // Where to compile files to
        public: 'static',

        watched: [
           'src',
        ],
    },

    plugins: {
      babel: {
        // Do not use ES6 compiler in vendor code
        //ignore: [/web\/static\/vendor/],
      }
    },

}
