const myUrl = "http://example.com/?id=123456&name=Lion&age=20";
myUrl.split("&");
// ['http://example.com/?id=123456','name=Lion','age=20']

myUrl.split(/&|\?/);
// ['http://example.com/','id=123456','name=Lion','age=20']

"javascript".split("");
// ['j','a','v','a','s','c','r','i','p','t']

"javascript".split();
// ['javascript']
