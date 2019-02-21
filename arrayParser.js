function parseArray(expr) {
    expr = expr.replace(/\s/g, '');
    if (expr.match(/^\[.*\]$/)) {
      let list = expr.slice(1, expr.length-1);
      let i = 0;
      while (i < list.length) {
        if (list[i].match(/^\d+/)) {
          let idx = list.indexOf(',', i);
          if (idx === -1) {
            break;
          }
          console.log(list.slice(i, idx));
          i = idx + 1;  
        } else if (list[i].match(/^\[/)) {
          console.log("Array")
          let j = i;
          let count = 0;
          let idx = 0;
          while (j < list.length) {
            if (list[j].match(/\[/)) {
              count++;
                if (count ===0) {
                  idx = j;
                  break;
                }
              j++;
            } else if (list[j].match(/\]/)) {
              count--;
                if (count ===0) {
                  idx = j;
                  break;
                }
              j++;
            } else if (list[j].match(/[\d+\,]/)) {
              j++;
            }
          }
          //console.log('j', j);
          //console.log(list.slice(i + 1, j + 1));
          parseArray(list.slice(i + 1, j + 1));
          let idx2 = list.indexOf(',', j);
          if (idx2 === -1) {
            break;
          }
          i = idx2 + 1;
        } else {
          throw new SyntaxError(`Did not expect ${list[i]}`);
        }
      }
    } else if (expr.match(/^\d+/)) {
      //check if digit
      console.log('Number');
    } else {
      throw new SyntaxError(`Did not expect ${expr}`)
    }
  
  }
  
  
  //parseArray("[1,2,3]");
  parseArray("[1,[[2],[3]]");
  //parseArray("[1, a]");
  
  // parseArray("3");
  // parseArray("jkh,jk");
  
  