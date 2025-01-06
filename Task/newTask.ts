
type AllNewTypes<T> = T extends `${string}{{${infer K}}}${infer Tail}` ? 
    K | AllNewTypes<Tail> : never


function templateRender<T extends string>(template: T, obj: Record<AllNewTypes<T>,string>) {
    let newTemplate: string = template;
    for (let key in obj) {
        
            newTemplate = newTemplate.replace(`{{${key}}}`, obj[key]);
        
    }
    return newTemplate;
}
console.log(templateRender('Hi, {{my}} name is {{name}} ', {my:"mera",name:"Abhinav"}))
