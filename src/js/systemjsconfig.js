System.config({
    transpiler: "plugin-babel",
    map: {
        "plugin-babel": "js/libs/systemjs-plugin-babel/plugin-babel.js",
        'systemjs-babel-build': 'js/libs/systemjs-plugin-babel/systemjs-babel-browser.js'
    }
});
System.import('js/app.js');
