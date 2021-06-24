var fullJustify = function(words, maxWidth) {
    let rst = [];
    let [tlen,stack] = [0,[]];
    while(words.length>0){
        let w = words.shift();
        if(tlen+w.length>maxWidth){
            let p=0;
            stack[stack.length-1]=stack[stack.length-1].trim();
            while(tlen+1<=maxWidth+1){
                if(p>=stack.length-1) p=0;
                stack[p]+=' ';
                tlen++;
                p++;
            }
            rst.push(stack.join(''));
            stack=[];
            tlen=0;
        }
        stack.push(w+' ');
        tlen+=w.length+1;
    }
    if(stack.length>0){
        stack[stack.length-1]=stack[stack.length-1].trim();
        tlen--;
        while(tlen+1<=maxWidth){
            stack.push(' ');
            tlen++;
        }
        rst.push(stack.join(''));
    }
    return rst;
};