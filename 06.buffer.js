module.exports = function() {
    const buf1 = Buffer.alloc(10);
    buf1.write("hello,");
    const buf2 = Buffer.from("buffer创建方法");
    const buf3 = Buffer.concat([buf1, buf2]);
    console.log("buf1========", buf1.toString());
    console.log("buf2========", buf2.toString());
    console.log("buf3========", buf3.toString());
};
