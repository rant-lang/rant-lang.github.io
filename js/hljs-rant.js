let rant_def = {
    contains: [
        hljs.COMMENT(
          '##',
          '##'
        ),
        hljs.COMMENT(
          '#',
          '$'
        ),
        {
          // String literal
          className: 'string',
          begin: /"/,
          end: /"/
        },
        {
          // Number
          className: 'number',
          begin: /\b\d+(\.\d+)?/,
        },
        {
          // Empty
          className: 'keyword',
          begin: /\<\>/
        },
        {
          // Escape sequence
          className: 'string',
          begin: /\\(x[a-fA-F0-9]{2}|\S)/
        },
        {
          // Closure
          className: 'keyword',
          begin: /\[\?\:?/,
          end: /\]/,
          contains: [{
            begin: /[\w-_]+/,
            end: /\;?/,
          }]
        },
        {
          // Map operator
          className: 'keyword',
          begin: /\@/
        },
        {
          // Function definition
          className: 'variable',
          begin: /(?<=\[)\$[\w-_]+/g
        },
        {
          // Function call
          className: 'title',
          begin: /(?<=\[)([\w-_/]+|\!)/g
        },
        {
          // Variable accessor start
          className: 'variable',
          begin: /\<\$?/
        },
        {
          // Variable accessor end
          className: 'variable',
          begin: /\>/
        }
    ]
  };
  
  hljs.registerLanguage('rant', () => rant_def);