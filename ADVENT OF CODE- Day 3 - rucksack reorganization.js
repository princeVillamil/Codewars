/*
--- Day 3: Rucksack Reorganization ---

One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw

    The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
    The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
    The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
    The fourth rucksack's compartments only share item type v.
    The fifth rucksack's compartments only share item type t.
    The sixth rucksack's compartments only share item type s.

To help prioritize item rearrangement, every item type can be converted to a priority:

    Lowercase item types a through z have priorities 1 through 26.
    Uppercase item types A through Z have priorities 27 through 52.

In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

Your puzzle answer was 7967.

*/
function test(arr){
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let counter = 0
  arr.forEach((x,i)=>{
    if(i==arr.length) return
    let map = {}
//     if(i>1) return
    let left = x.slice(0, x.length / 2)
    let right = x.slice(x.length / 2, x.length)
    for(letter of left){
      if(!map[letter]) map[letter] = true
    }
    for(letter of right){
      if(map[letter]){
        counter+=alphabet.indexOf(letter)+1
        map[letter] = false
      }
    }
  })
    console.log(counter)
}
// var testArr = ["vJrwpWtwJgWrhcsFMMfFFhFp",
// "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
// "PmmdzqPrVvPwwTWBwg",
// "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
// "ttgJtRGJQctTZtZT",
// "CrZsJsPPZsGzwwsLwLmpwMDw"]
// test(testArr)
// var bod = document.body.innerText.split('\n')
console.log(bod)
test(bod)

/*
--- Part Two ---

As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group. For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges. All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges. The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type. So, in the above example, the first group's rucksacks are the first three lines:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg

And the second group's rucksacks are the next three lines:

wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw

In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges. In the second group, their badge item type must be Z.

Priorities for these items must still be found to organize the sticker attachment efforts: here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?

Your puzzle answer was 2716.
*/
function test(arr){
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  let counter = 0
	let newArr = []
  arr.forEach((x,i)=>{
    if((i+1)%3 == 0) newArr.push([arr[i-2],arr[i-1],arr[i]])
  })
  newArr = newArr.map((x,i)=>{
    let hashMap = {}
    let letters = []
    x = x.map((innerX, innerI)=>{
      innerX = [...new Set(x[innerI].split(''))].join('')
      for(letter of innerX){
        if(hashMap[letter] || hashMap[letter] == 0) hashMap[letter]++
        if(hashMap[letter] >1) letters.push(letter)
        if(!hashMap[letter]) hashMap[letter] = 0;
      }
    })
    letters.forEach(x=> counter+=alphabet.indexOf(x)+1)
  })
  console.log(counter)
}
// var testArr = ["vJrwpWtwJgWrhcsFMMfFFhFp",
// "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
// "PmmdzqPrVvPwwTWBwg",
// "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
// "ttgJtRGJQctTZtZT",
// "CrZsJsPPZsGzwwsLwLmpwMDw"]
// test(testArr)
// var bod = document.body.innerText.split('\n')
// // console.log(bod)
// test(bod)


var bod = `lDDWVvlVVQfDMlWjGJTRjQCgTGLCLj
ZLZpwzLBhwZhSLBsjntGCtgJRjbnJgSG
qppdZzzsdsmZphrNsNwZhllDHLcVVDWFPvFWcWdFlv
ztdhgJDBJghmQtPFQPpmbw
lVlLRcnfllcfVcccGnSQVLcsTPFbpwsPFspTSqmbpswpbF
cCHRGcGcCRGlGrGcVGnrdWHWBDzBNhhQZWWNBhJz
NfnSSQpdnRSSpvWdSsjZDGNDjGDwTGTjHG
wlPzPqzPFbMmqPCFCJmbsjbHLDDHDZjDjbGHsT
gwMlgmtmPcqVVvhVnvcRnn
cBNBBCHhbhNhblBcCCvcBHSwTwDQSqRwDQpDRsjHST
dPmzMVWdmmMnnZJtZVdqjTSrjTjrpQrsTTVwQRSj
qzmZMmdZPtnGqclblGlbGvgBFc
ZfpmNDfRhzbbqDnD
SFtFjTTZVTFvVTjHrsVvqGBJqhnSSnbJznLGJwJq
TjdPPtdMPPWCcZgW
qsbmGCsjHNhmhmhzTDznpnlQZlbWlZ
LTSSfSvggVVgBgfLtvvtTSczzpWnZQZnlnzpBcnWpQWc
FrLvrrrVPgdPftSHHdNsjTHjmGThhm
wGQlMjvMwpvjvZjZTZlWjplWJJTggDTgfCnntPgTJPbtPgSP
qNhJmcVmdJqhHnPnDNtnPDCg
LrrchqhRdLVzRdmhJcFFQWGGMjpGlvZzlQQv
ZqZMbZMfQZptpjlF
PJCggvHlwWHvSSvCJNvSPvDBtFDQThFQjtRQhhFTsVThQtsF
PwWCnBBCClcMMznMdG
rNwwQJrJrnQswrQrRRwCShBSLndZpdnhpGFSdhBp
PvzzWVzbclGFhLFGdZll
VWjPWvbjcVbVcGVzjcgzgwQQRRRrqwRJQwwstCRR
zjBMMzznjbssrBrMBbvHDmrlprlrpwGpwQDV
LhRwPPTLLNRZqScPWPWPTSmQvQQDGGdQHVDlmVpQGD
NtfhNwhLLNwRwRNcTBgnJMCBzsBFjsJfCz
jZjsWNDlPfClfMlM
GjqbVSqjhgvgSVSBCPmMmCmfpwTBfh
nGbjqtqcGzsLDFcJLs
ZQtmZdtdQcLndRncdQQLFjWWDHNPfhpnqhqsHNNDnpHs
TrMBGbJTwwlmDPPPWshWHfJq
wmVzbrwbwvBlBlVGtSVLSdFjdFtdjLVR
LBhZFhRPbbnPddMdPPlD
NQszQNczlCSlJSsg
mwmrVQwpQVWwTlvBpHHHFhZj
pzzDffWpQBzMpHvzMfRnTNhZdrdBcnLrcdrTLZ
msgJgtmbgmqJJcdrGcJjGn
bSVPgwntmVnngQWvWSSMpMMHWH
gmGMDHHdpngdrGmGcwbNCCnNcbbCSLwL
zQPPPffQQlVlsPFQFzQchZZbLZNVcbqbNqbZgq
PRjQzfRgRfjQBTfJQTlPFRHWmmvmWHGWrWvWWtjrdHpD
vfrHfqrLfLwwNHdvnthpnnFFpstn
gWcMclgmcRcWgDMWgBgGGFnntqQnGphdQhtbdFnh
qRWmRDlcDqWBBPwPNrZHrwSHjTfr
HVVbhdCdndhZSShMzRrzSM
qBjWqvtWvDJjTjjGJtJtnqBvZMrgSGZlgfSgSRrMQGQRMgMR
wmwtJsvjtTJwsNnVsHpdnsHdds
FCJNZDMPNCNvzqQJHqzGqv
hwjWcSTHwRpSWnQtGgQgGStgQQ
WpwhRHTRpcLRjwlwwTWBcWdlFbCrsPrrLCMDrZCFsCDPrZPM
DJjjShSGhGDSNdpfrWWcLFzrDWrDlF
wtqZgwMBBPVMCBPQggMwqMMzfLlWrWLLzsWcFzTzVTzLss
tgtwQqZBQQZbBZtPgbHpNJnJShcmJppSHh
tHrWmrdzzdHflmHmHrSmqswlqhqNgssMhGgghssn
pJcCBPPQPCcPpRpgwZNZBMnDhMsMBw
RJCvRRVcQpjLpCJPWrftWvSnrFffWbrz
jzlwwzDzTlQftzlWjfrBGBgVHBgpgBtPGVtP
vhsshbMbNhZpgZrrrpHcZr
qhdMqqSLSSbSJMqqSwwjzFzmjFQQFfHzLQ
gDhHNnphPPPNCprHFhHFdbdczzjNqbzjVcdbQTcc
tVJWBtVVZRWtjQbctjqcdj
RfvlGLvLLLlLMZBmZBRhHDVPnVHPHCgFCnhlpn
RFhZFTZvFdjlqqlRNCPwSSPCNPBSwC
spHGswpnWgJLLJCPGg
cWpDrVVbWfWbVfbsdQqcQzjjzlhdwqll
WWJPpQwWdQQPNpQvqlvvCblbvbvwLL
cmRMBMBTbSrTDRMcGBscTGfLZfvfvsCqhLlChZlLhfsC
TVbzGSMGVVgdpdPJpQ
lwsFfsZWGsGmsnlGQcPdBBdMbcPHfcCN
RVvSLtSTrTVrTFPcBdCHRcPHbNNb
LrqzLFTLrgSJLLLtTgJjVJvWlDDnjDWnWWlhlGWGhZWZhn
GQJCMGbrMbbCGrrGtcwhctGjNSvWpVVVRjNJqVqqBBRRJq
ssnglHHsnHzFmHnzHFPVDDSDRgVjvWDNpSSNpB
PZfHmndFzzfPZPZfCdwchwGcbwwhCdMW
DRGVQGmGQVnnGVmnnFpNbzCNRbRttCbpLztC
qdqHBdjTqPlcTchBjJMvvvLtLCcLggLvtmgb
fqhlHjdwqjjJTwldDmDmrGrrWFrDGZwD
wFscLVLrrVhwWgZPrcswgZWFTnQdtTMnpQtjdpqdqvqQMt
JRbHmmbDDSzDmDNpTnBBdpMHQtqtvp
JmCCbvRGzbbGJsLgZsVhgLwwGW
WDQwsBzWbBlMjdVpzTJVMj
fncRngntnPCpJgmdFpFWgm
RGZPZtZCfvWSvRZGSLvPccHwsrHbwHLrwHHQQsBDbllB
PlNZhwgpppccgrqVvttbBfrlls
CznSDDdHDRnRStVsVfDvfrtDZq
QCddZFSFLTmccQmw
rnwfVnclGPPFfSPSqBWZvvBBWqZvqWFh
zLgLQgJssspmQTJmsgjZNmqqzqdHbthDdDDWHbhqBBqb
QgmmjpNgCCZpjJLpmTrfrSrVRPfnrClfPwnS
zDzPPwvwqvPPBqjnqvDqBffSfcSNJpNVfccLLNffBR
MdTMZbgbmmTWGGdmssRCSNsSNVVVcJsNppsC
MJghbhHhbtMMdWhbJhHgdmWvnFzHDQPDjQDvHHwvQwvzwF
gGbqqRDrqDMdcBpVlpMG
WzhPCnWfqMcpBnnNLZ
fCqPHHJCfJhStwhWHbrrgvjFgbQbSbmbQs
fhcchnSpfsNpjVVqnqjrGHqq
zzlFLlPLWdggFqRBjqsrHrBTzz
FDwgFLZWlbbchpwshsCNcw
CmPlqqRJDHRDDsFv
MfSpBQQNNfBfrfVZsmVVdzzrHZmH
QSBSLSgmQBmwPCtgClhjPP
NPNsHHHNsPsvHwDqgpwlqt
rTRWSRrWRzgTzZrRVVLRQzjpbtmmGLlGDDbDwwmtblvDvw
nRzSRrjSVRrnjrgZfrfzNdPdMPBfBMhJhhBcPhcJ
LLhzQSDHDHNpNzHHJBQBMvMBqBRJBBqw
rmbdtmlWCCMnvJrn
FTVdmVgtjdtbWsvjjmdLSDcgHpDzShzDLPLSHh
VFFJQVWHtQVHHWbJRRRHwqPvpMLpLZZWLwlwMllL
jsngsdGssLvlqnZqZw
hhmfDjDsmDNjjNRNVqNVJRtQHJ
jvTnffrgFTwvqMzqGdMMSW
sPbCtCCQQLffZGdWNLWDDzLzGM
PQPBBtfZCZsmJPPplwwmTwpcTcmcgj
NBmBRCCsBTRNTndGdswnlwvwnw
fvbqrbPLqpGwScGGwbbb
HJDPJFJLJtpJHCvCFBBBBNNWvF
HJHgNQJBSlRRbJDRDb
RptsfnshscWMLMZDZp
njmrnPznnsTRTtPzFzRTswgQwqvVVwBNwwvjqCHqHq
CBMgBJCTNgQcsQspPpWjRrWrsWsn
mwLvHLGbdHbGzSHmvmvHzrhjjjPptjWGqZPPZhPRWWGP
vbbrLFwLFDJFDfFN
TnPvZSnQgQPHnnnQvgMSWppWNfWRpWfMtthMNDhN
wLJmLBmGFBFdLBbCBbVCVlsGsWhtHqthRRhqhtHHGqqf
LmHLbCjjBLVZzZSgzQgjrc
wdSwfpBhtFbStpftjSVhBwFrGrsQnQgnGrQmqCPmDrmmDb
zJvzLJLNZNscLzNHHLrGPvGGPrDDqGgDPDgC
RWsNNRMsHTHLHTlMczLHZLWtpFwfpthSjFtwFhjSVplwtj
QbrBDLGGRJMQJQJDbQbGvNscWNnTdvnvtnLcccvl
fqZgpVPZHPmfgPPjBFgcscvNNccdddtdNvdFTs
CgPpghfjjPgVmfBMMCRJQQJzJBwM
jLWDqLdWdwLfHwJwzSSfwS
gCgRRltMrlrCcCMzcBSVfZQfVNZNVSBVNNNh
gMrcPntccGgzgTMlMPrtDWFvLqqdLnDsmLLFFqvp
ttHJNccRRwmnsnHnHWMSwqfgvgfwSQZfQf
ShpLhhzTPBMpQqQgvM
zhbFjVdrjFjVljrVbdPddSTPHNssHnHlRNCHtRtsctJtGsRJ
zMVTscVhQhGGhClv
LfMJmgSBpLRfHmBPgpmJPSBdvQNtlHvrHvNNtNNNClGdGN
JFJmmSFFbFFbRJPBgFPmSBPMzzWWTDjjTsTqqwjVWbjjVVsZ
HZpCnwnggfFggbgLDcTb
SjvWjGzNGGzRjSGmMcLhvhMhFMCcmv
rjrVJNjVrzVNPrwtPwPCHBPB
SWwFbTzsSjPzpjFbsWPTWTcWLCLgLgLBZjGVDjCVBBgCBGCZ
lrJJttQcHqrHrvggHVBgBLffBC
lnhhcqNRJWzhTdsWFz
vzldvzlclbFjFvmtjZ
DDNMNStMsSsGnhSMwQjTQVgVbwMbVTTQ
DsDSCNNGpLtsNLpnNsqLppDzCBcdJHBzllcJfzJBPBdBlR
qWNfDvffbJBFDpNfmpbwhGhwjLgTrGwhbGGwrj
ZctMVCcVVQtTpthlnLtppw
QMcRSPMZcpCZqDFNRFHNJFFF
RmztpGSssNMzJRpCvqsCrqdHCBlBdw
gffPFDcqVbgqWgjlPlwCCrdBdllnBH
cFFZcbcqfQhgbcNJZRSMRtmNJptS
PZthPBWlPNPSPtmHHggFGgBJJbwg
qqzDvLLrfDpvvDLzqvnLzqpzbrCRGJRHwFCmHRwGwgwbbRCj
nnpnMfpMLTVqfmthmsMNSScMhS
dflvbdvpfffzpnNLNbWqtblqHjmVhVRhHrwrwrswhHnjsmwh
gSGMdMcJBgMTGPSPDVZhHhHZmDZhrwwjVm
CPJQGBGGPcSTFcTCScFtLLdWvptWLbNpNzvWQL
WThqhvvRDJDRhwcrscNDNFgDHNct
fnrZVnfVjrSGGLzZbnLzZLjVHstHHHQtgQbPpPcpHsscsFpN
SVjZSzZdndVCdSSZmTRvMWBRWvvWlrvmhJ
BcllhPPmMMBPcbRwgQtgHHgtmwgzmt
rpLqbrbTnNvqjLqLNqrNLvHzDtwpDCzFwggttFFHCQFQ
LrrrNLqjZSTsZZsvjbLjPhcBBlBsBcGPPcPlPVGP
HHhrggvSHDtCDsfF
ZMpLblppNZBDBwLzLLpMssCntfWdCFCnfCCtRNtq
lbmJlzzLMPMmlBzhSJVccSJhTvSTDh
sdjBBFqHscFnHTzCnRSnzgVTlC
LpWWtvZfrpbLpZpWftprLCCNMzCZMmmzTNNTmSSVSM
pLVtrtbGvpbpGLfPddHBscBQJJGcwsQq
hLcLnVVcfQBLZPVZnThfVVmjqjHNjgvNfdvpNdrrvvfp
lbRlWFHJtGNGpqmrqrCN
DzRRDFsbDtFtDJtWRztzJZVBQMhTsLhQZMZHVLcLcP
WgbdmgMmWDDvcPcpbz
jffpllHSpHRptRRGRntSVwvLSCCJDzcCcDLvCzPP
tRFrnlGfZrQpBpgQQsgF
TpbBZbCCHCGZNHbzGqgFdNlcFSdNlStSqg
wvWnWwLCPjJPJhMWtWdMfFSMgcdM
hhmvmJrJLJJJPvvhDjswCRGHHrHzBBHGVRQBzRRQ
zChCSBbpSsQscDHHQh
LNJJRgGltJDvfcrfgHfZ
lJNRGlLnNJtTGVMlFTbwSWqjBbzWWHSW
NDTJQDVwCTCJhVGDLfbBbBfbGqbfHBfBHb
lMgMrggMrmmtzMcgWdlmMlbsRjSRBsTRBWsSHSBTHRBj
cMPlgztzrPMznnMPpgddgdzpwDDNNwhNFCTwNZQFLTVTwV
ZgshQgzQnnwMtDwBwv
SFWFlFZRRcmlWmWRBCDwvwwftBtLmfLf
PjRFdTdWGddrGlPjcsJZpJzTqhzQJzNHhz
PgHQgddszgdGPWpMjljMcj
bSqTqnZLnDJSmnmZmtllGsnVtnWjGGWtjl
fqSLDbRSfBdHsRwsFdHd
RwHWZpCWhHvwvHCBMBpJMJGPJJnJgc
lztljTFljRRBBzBnBMnJMS
QbRljFtQfljbbFqNFrdZVrZfdCCwVwvddH
sHzztVzLTgnssPggHHsnCtzBmfBMrMccBBmqmrBqBCRqMf
ZhDQJhFDqjmSMrRF
dZpwDhNhhZpQJdDQpwnsGttGwLtRRTLRts
QJNhClVgPTTtPNCJJCtJhlNPZZRVZfvfzZzmvvzvsmZsvmzR
blBWBpdbLBDqBpszzffRsvdzjvvd
BLWpqBbqnDHqBbGlnWGBPcPJcHTTPrhtgNtCtgPc
jWVJqVwgsJcHCVlQVVQNBp
vGhGhTPtSSNCddSBCH
ZCCDtbDftZsqrrcnWW
hJThjThhVzVTZZwnNZRdgmzt
lrbSSddsrbPQpsvNtgPRmtHmvtnR
GQrspWdSGbDcsFFLBhCGVBjhjj
rHdlHdZDlTcflcNfcrCgcTWWpWQFsRWsFjRCsCjWCmhF
BnqbvQPLGLBPwqGmsVshsSWShGms
PzzPPQJPMJtJbbznPnDdrHlNldDNltrgtfDg
SmmMQhPSlmTwPpmnpllMSMPrccFDqFrDFGgqrDcCwfDgwq
bVdLLNvdQWVbJbQLVGfGDGfDgrFrqgqJgg
vjjWsbQdBsszhsHlhhPPSHsM
PqzJqNzsJgsgNqPdLJPPPNVpMMVWGlFWNFGMpWppGF
ZnZBjttQZcQZRTQDjQwGFlWMlGdGWVrWWlGn
ZRDBRSZDSdSLsqJHfSbzzL
rljJqtZlJqlJcvBNJBNQfQ
TVMWznvPMTFWznwPFFvwFbbBNBgbcNpQdNcBFQpb
mDnLWsPLvLMnnnmTzLzVCtlRRtjSljCZhDlhtqSq
fgWMHClGMWfgRWWWGCfmfgCSVQNTDFHTtddVQQDZNLDZtVVL
wSqbsvzpwpbpdFTNLQwLNTFN
zscjPnPqsJlmPJCJSC
GZSwQjGwGrCGwrTjdCTwdTBpqqlmNmVpNrNvplJqNNpl
zMfJnDcbRRDRFbzDFRLFBtqNmqqtNBmNBvNm
sHcJRRHzzfQTjjCjQjCH
wJCVVbJgCLCwGsMbbGTlsRWHsztZPZWtPrPrWrHzrz
DBqdvfqDBqFpWZFrtppZJp
djqNfQcjDQjMgbbwLjlJGn
TSwfZMfpQwcCCCCrbbCZ
PLJmGJnjqjrsCjMMVj
LnNNLLLnFFWmLFMGNMDgfRpDQSfwSfgQzBHwTS
CdjNCMmdCrVmCjJdVjFNMtMzhWwpGbpBhPZZZDbGPpDhpr
QSfHzlvgTQffSSHHclgfHnqPbPPPppBhpWDhwWvPhvbwwh
cQfQRgQnQsnsQSgHRQJsCFMsCjLzJJFjCdNC
ltLlJttmQdfVRhNmhB
gWWDrPSvCSWgMMMZBVBdTQPQZNZVPR
vCbwQzcQrCrLFHwJpHHGpp
VbRVvVHRbJVTzVLBVPtt
cSdgSZSZZFhnFcFwdDQcZZhgzpTlzLDzlWTvBWLztBtpLplT
hZZvdrcSZQZSSwncdHCqHmGHqJrCJqbNbq
lwWmsQlDbCZbVWZq
rRShhhhPjTsjTRvHhqfzqfqvBZZvBCZffC
scPThhRSjQmmNpplcg
FChtDTThDqZtjppjvgNvjl
LBwsVdVHLVvvpVGjjgjS
BbHLBfRcsHcBdMbdWJQPWFCQCZZhWrJPQp
zMtWCstzNrQLpbplFwQwhb
gDTDHGvvHVfVdGZVJGDGdnmbwmWFwfhpbnfjwwjpLl
GJcHVJdvZJVGZWHSSvTZMCzrzzRNSBtBNPBMqNBB
pLzZVVGGZmZVlmDsQglgsllc
WSvrjRjrMMFFnFjnrnrdjBRRgdsblQQPbpggsclNDDbPstDs
SMWRBrrrvSRBSSvWWWBTMTCqpZzLCCTCwJZwwzGZzqHL
TvfGwGZpPnSNgSSnGh
srLVHLcjsjVtHqjjrjFjcCqPBggqNQQnMqhgngnznNNB
VtdmPHLmtVHFLdmZWRJlWpWWWlmWfp
SbSbdTsrVrdhfSdDGJWGmNwWWPwTGP
BqlRpBMmllpmnpvvDJPZWPJwZcJgDD
FFRMCnRFtCMRlMplqMBRBppVbtzdrdhssrmHzVVSsVhVHz
dNrhhLsrshSmmRcPhm
WMCngCzCvzvMMpplQvzWlRBPcVStSmTSQbbVSPQmwm
MpzvWnllglJfqfMgsNdZHqNjdDsPHqqZ
rNvGZRsRcRRBtBCttB
DwPPQWnWWnPQnJlPhmTtBFBmqzhpmnFh
QwQQQlbPPMWwDdDwlVDJJPPdvdSjrjdrsgssLLsZLNBrNNNr
VjMMVzngnjQQfJDchZqGNqFPcg
SWBwTtWSFTHwFClHHmwBPcJJDhNGPJNPPhPPGhJt
CBvSBBBWHdmRTvRWRQFLQRnjnfLLzVbs
flSpvLlmZpCpZmVSBtlvHHjFHTdssZdjHFdTWdNh
RmQMQJRQJQmPgrzJrPcRQRJcWdNTGTGGFhGTdFhHThHGMTsF
RzJrqqcqPRqqJDDqttCpmtlwBpDflSLt
hBjPZbPBbWvTRnLRWntD
MNGQNsQwfzsdGfgTGfzQwwffmnCRDVmJLRLCvnvLDvJCDgRL
wTTdFldNHzTMljjFqphrBqhrZb
wDcMCbZbzPDcZDWQdrJLrQrZBLRBQr
FFSHStjtHgllgFdSNmlfFStBqRRssRsRJrLrjrrJBRVhLJ
fGggtfHtgWMwbCGdCT
RQrQDDbVGrRSfbVbGtmGtwHFWsCCzsJSJJHsJPJvWC
hphQnhZQNjlBBcMMpCsHwFjvvHWHWsFvjC
ppcnnBZqllTQfmrffbtGTDGt
dsDFsBZBhCFhshFrpBFnmLQmHmRgRbLqmmmRQDLm
PPBBNNNtGTwJNfTJffNttfLQgqLgHvHbqRwlgmblRvll
NSNTGTJTWPjGWMPSJJzrBSpzdFSddCFdncrs
bPzRlMPTzTMldJMnhswcjzfQVccQhc
HCCqNmNmQQmQssJn
pHptprtgRStTtMJt
nTmhrsPMsTfmHHGcSgtj
bJJwdlrJQLlvwlQDDwSbgffGVNjfgjNtVbcf
QlpDQFJdvdFqJdFpLvDFpLLnzZMnBMRRzMTqnrzqTRPznz
qRVRqBzgwqRpqRgVqQRPpQJJPrPhPGJnsGrCFdFJrZdG
ZvWDmMvmSvCndssrsJ
WcZcNWlcMjBQpzNTqVBp
DpLPZLDDlcgmDmhVgfgfWWRwhwwt
VrVMdbCrrBTjCMQQtMwQNSqMQW
VCBHdJHdvrrFsbsdrBJTdTzZcpmZGDGPlmzmlccFDZDn`
