'use strict';

process.env.TEST = true;

module.exports = (config) => {
  config.set({

    frameworks: ['jasmine', 'karma-typescript'],

    files: [
            { pattern: 'src/**/*.tsx' },
            { pattern: 'src/**/*.ts' },
    ],

    preprocessors: {
      'src/**/*.tsx': ['karma-typescript'],
      'src/**/*.ts': ['karma-typescript'],
    },

    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
/*            compilerOptions: {
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
                jsx: 'react',
                noImplicitAny: true,
                module: 'commonjs',
                sourceMap: true,
                target: 'ES5',
            }, */
      include: ['**/*.ts', '**/*.tsx'],
      disableCodeCoverageInstrumentation: false,
      /* excludeFromCoverage: /\.(d|spec|test)\.ts/, */
      reports:
      {
        'html': 'coverage',
        'text-summary': '',
      },
     /* transformPath: function(filepath) {
        return filepath.replace(/\.(ts|tsx)$/, '.js');
      },*/
    },

    reporters: ['progress', 'karma-typescript'],

    browsers: ['Chrome'],
  });
};
