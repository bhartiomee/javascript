console.log('This is metaCharacters.js');


let s = 'omee bharti, Omee says hello'
let reg = /omee/;

reg = /^ome/ //-->'^' means starts with
reg = /lo$/ //-->'$' means ends with

reg = /o.ee/ //-->. means any one character in place of dot.(It will search full sentence and show result on basis
// of FIRST MATCED WORD)

reg = /o*ee/ //--> * means any NO. OF any character in place of dot.
reg=/o\*mee/ //-->matches o*mee

let result = reg.test(s);

if (result) {
    console.log(`${reg.source} matches ${s}`);
}
else {
    console.log(`${reg.source} DOES NOT matches ${s}`);
}




