// popup.js

// Start Clicked
document.getElementById("query").addEventListener("click", function(){
    chrome.tabs.create({ url: url(), active: true})
})


function url(){

    // Possible Parameters
    const params = [
        "text",
        "site",
        "cache",
        "allintext",
        "inurl",
        "allintitle",
        "filetype",
        "link",
        "-"
    ]
        var url = "https://google.com/search?q=";

        for (i=0; i < params.length; i++){
            if (document.getElementById(params[i]).value){
                console.log(params[i]);
                if (params[i] === "text"){
                    url = url.concat('"' + document.getElementById(params[i]).value + '" ')
                }
                
                else if (params[i] === "-"){
                    let word = document.getElementById(params[i]).value.split(" ")
                    for (j=0; j<word.length; j++){
                        url = url.concat(params[i] + word[j] + " ")
                    }
                }

                else {
                    url = url.concat(params[i] + ":" + document.getElementById(params[i]).value + " ");
                }   
            }
        }

        console.log(url);
        return url;
        /*
        chrome.runtime.sendMessage({ cmd: 'QUERY', url: url });
        console.log("SEND QUERY")*/

        // Perhaps people can dynamically add their parameter from a selection so it doesn't take space
        // Meaning they add the html via this popup.js but the html elements are "params[index]"
        // Make array of items, if the item exists, format it with space after and append to url string
        // exclude words must seperated by a space

}