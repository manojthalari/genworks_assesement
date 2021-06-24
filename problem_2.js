var wordBreak = function(s, wordDict, memo = {}) {
    if(memo[s] !== undefined) return memo[s] 
    if(s === "") return true
    
    for(let i = 0; i < wordDict.length; i++){
        if(s.substring(0, wordDict[i].length) === wordDict[i]){
            let retrunValue = wordBreak(s.slice(wordDict[i].length, s.length), wordDict, memo)
            if(retrunValue === true){
                memo[s] = true
                return memo[s]
            }
                
        }
    }
    memo[s] = false
    return memo[s]
};