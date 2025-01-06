function templateRender(template, obj) {
    var newTemplate = template;
    for (var key in obj) {
        newTemplate = newTemplate.replace("{{".concat(key, "}}"), obj[key]);
    }
    return newTemplate;
}
console.log(templateRender('Hi, {{my}} name is {{name}} ', { my: "mera", name: "Abhinav" }));
