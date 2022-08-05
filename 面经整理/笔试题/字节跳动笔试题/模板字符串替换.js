let template = '我叫{{name}}，今年{{age}}岁。'

let context = {

    name: 'yjf',

    age: 22

}
function exchange(template, context) {
    str = template;
    for (const key in context) {
        str = str.replace(`{{${key}}}`, `${context[key]}`)
    }
    return str;
}
console.log(exchange(template, context))