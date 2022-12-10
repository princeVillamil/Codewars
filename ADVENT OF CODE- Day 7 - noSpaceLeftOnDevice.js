/*
--- Day 7: No Space Left On Device ---

You can hear birds chirping and raindrops hitting leaves as the expedition proceeds. Occasionally, you can even hear much louder sounds in the distance; how big do the animals get out here, anyway?

The device the Elves gave you has problems with more than just its communication system. You try to run a system update:

$ system-update --please --pretty-please-with-sugar-on-top
Error: No space left on device

Perhaps you can delete some files to make space for the update?

You browse around the filesystem to assess the situation and save the resulting terminal output (your puzzle input). For example:

$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k

The filesystem consists of a tree of files (plain data) and directories (which can contain other directories or files). The outermost directory is called /. You can navigate around the filesystem, moving into or out of directories and listing the contents of the directory you're currently in.

Within the terminal output, lines that begin with $ are commands you executed, very much like some modern computers:

    cd means change directory. This changes which directory is the current directory, but the specific result depends on the argument:
        cd x moves in one level: it looks in the current directory for the directory named x and makes it the current directory.
        cd .. moves out one level: it finds the directory that contains the current directory, then makes that directory the current directory.
        cd / switches the current directory to the outermost directory, /.
    ls means list. It prints out all of the files and directories immediately contained by the current directory:
        123 abc means that the current directory contains a file named abc with size 123.
        dir xyz means that the current directory contains a directory named xyz.

Given the commands and output in the example above, you can determine that the filesystem looks visually like this:

- / (dir)
  - a (dir)
    - e (dir)
      - i (file, size=584)
    - f (file, size=29116)
    - g (file, size=2557)
    - h.lst (file, size=62596)
  - b.txt (file, size=14848514)
  - c.dat (file, size=8504156)
  - d (dir)
    - j (file, size=4060174)
    - d.log (file, size=8033020)
    - d.ext (file, size=5626152)
    - k (file, size=7214296)

Here, there are four directories: / (the outermost directory), a and d (which are in /), and e (which is in a). These directories also contain files of various sizes.

Since the disk is full, your first step should probably be to find directories that are good candidates for deletion. To do this, you need to determine the total size of each directory. The total size of a directory is the sum of the sizes of the files it contains, directly or indirectly. (Directories themselves do not count as having any intrinsic size.)

The total sizes of the directories above can be found as follows:

    The total size of directory e is 584 because it contains a single file i of size 584 and no other directories.
    The directory a has total size 94853 because it contains files f (size 29116), g (size 2557), and h.lst (size 62596), plus file i indirectly (a contains e which contains i).
    Directory d has total size 24933642.
    As the outermost directory, / contains every file. Its total size is 48381165, the sum of the size of every file.

To begin, find all of the directories with a total size of at most 100000, then calculate the sum of their total sizes. In the example above, these directories are a and e; the sum of their total sizes is 95437 (94853 + 584). (As in this example, this process can count files more than once!)

Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?

Your puzzle answer was 1908462.
*/
function createTree(lines){
  const tree = {
    name: '/',
    isDirectory: true,
    children: []
  }//Node : Name, isDirectory, size, children, parent
  
  let currentNode = tree
  let currentCommand = null
  
  for(const line of lines){
    if(line[0] === '$'){
//       line is a Command
      const match = /^\$ (?<command>\w+)(?: (?<arg>.+))?$/.exec(line)
      currentCommand = match.groups.command
      if(currentCommand === 'cd'){
        const target = match.groups.arg
        switch(target){
          case '/':
            currentNode = tree;
            break;
          case '..':
            currentNode = currentNode.parent
            break;
          default:
            currentNode = currentNode.children.find((folder)=>folder.isDirectory && folder.name == target)
        }
      } 
    }else{
      if(currentCommand === 'ls'){
//       For now, it's a file/directory from a "ls" commands
        const fileMatch = /^(?<size>\d+) (?<name>.+)$/.exec(line)
        if(fileMatch){
          const node = {
            name: fileMatch.groups.name,
            size: parseInt(fileMatch.groups.size),
            isDirectory: false,
            parent: currentNode,
          }
          currentNode.children.push(node)
        }
        const dirMatch = /^dir (?<name>.+)$/.exec(line)
        if(dirMatch){
          const node ={
						name: dirMatch.groups.name,
            isDirectory: true,
            children: [],
            parent: currentNode
          }
          currentNode.children.push(node)

        }
      }else{
        throw new Error('Unkown state')
      }
    }
  }
  
  
  return tree
}
function printTree(node, depth=0){
  console.log(`${' '.repeat(depth+2)}- ${node.name} (${node.isDirectory?"dir":`file, size=${node.size}`})`)
  if(node.isDirectory){
    for(const child of node.children){
      printTree(child, depth+1)
    }
  }
}
function getSize(node, directoryCallback){
  if(!node.isDirectory){
    return node.size;
  }
  const directorySize = node.children.map(child=>getSize(child,directoryCallback)).reduce((acc,cur)=>acc+cur, 0)
  directoryCallback(node.name, directorySize)
  return directorySize;
}

function test(input){
  const tree = createTree(input)
  // console.log(tree)
  printTree(tree)

  let sumSmallFolder = 0;

  getSize(tree, (name,size)=>{
    console.log({name, size})
    if(size<100000){
      sumSmallFolder+=size
    }
  })
  console.log(sumSmallFolder)
}
// ==================================
// var placeHolder = [
// '$ cd /',
// '$ ls',
// 'dir a',
// '14848514 b.txt',
// '8504156 c.dat',
// 'dir d',
// '$ cd a',
// '$ ls',
// 'dir e',
// '29116 f',//--
// '2557 g',//--
// '62596 h.lst',//--
// '$ cd e',//Inside dir - e
// '$ ls',
// '584 i',//--
// '$ cd ..',//inside dir - a
// '$ cd ..',//inside dir - /
// '$ cd d',//inside dir - d
// '$ ls',
// '4060174 j',//--
// '8033020 d.log',//--
// '5626152 d.ext',//--
// '7214296 k',//--
// ]
// test(placeHolder)
// console.log( test(placeHolder) === 48381165 )


var bod = `$ cd /
$ ls
dir dtcfhsm
dir hblzj
dir jbssdwf
35442 jrfpjdpw.znd
dir ljv
dir nhp
31592 qtwnndbg.rsh
326062 sjc.mvn
235205 wmtvbq
$ cd dtcfhsm
$ ls
206818 czgnjmw
dir drjhjtm
dir hjlmf
dir jllhmmf
187778 jrfpjdpw.znd
49334 lljh.jhb
dir qtwnndbg
dir sshvc
dir tzhbztd
290622 vmwddb
214581 wmtvbq
dir wqcsrw
dir zjbzdrnd
$ cd drjhjtm
$ ls
dir cvrf
dir gddqh
dir qccmn
dir qjgv
dir sjgwv
$ cd cvrf
$ ls
233913 frfvjtt.dhv
30000 ljcmscc.jvh
61418 mcs.blh
227397 swd.mrf
dir tpwvvbh
120888 vsrfw.gvd
$ cd tpwvvbh
$ ls
266824 qtwnndbg
dir sdwjz
dir vrgjhvrd
88616 wmtvbq
dir wqcsrw
$ cd sdwjz
$ ls
269696 jrfpjdpw.znd
$ cd ..
$ cd vrgjhvrd
$ ls
67409 sddmdd.dsb
$ cd ..
$ cd wqcsrw
$ ls
dir ttgwphbc
$ cd ttgwphbc
$ ls
178435 csjzz.vcd
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd gddqh
$ ls
dir cfvpq
318413 jrfpjdpw.znd
dir wwv
$ cd cfvpq
$ ls
dir ljncp
175740 ljv.nqn
$ cd ljncp
$ ls
146594 rhjlds.nfm
$ cd ..
$ cd ..
$ cd wwv
$ ls
dir zqzch
$ cd zqzch
$ ls
dir jllhmmf
$ cd jllhmmf
$ ls
dir pvqhg
$ cd pvqhg
$ ls
76789 ntdtbnr
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd qccmn
$ ls
dir czpnrsfc
123617 jrcgldd.pvd
$ cd czpnrsfc
$ ls
316779 lqtw.vtp
dir tdwmpl
$ cd tdwmpl
$ ls
84395 rvqgwwz.rbq
$ cd ..
$ cd ..
$ cd ..
$ cd qjgv
$ ls
173535 qtwnndbg.clf
73941 wldfq.rjm
327245 zfqsvs.qwh
$ cd ..
$ cd sjgwv
$ ls
307757 mvgmfhh.thn
$ cd ..
$ cd ..
$ cd hjlmf
$ ls
313069 qlmlvvvg
$ cd ..
$ cd jllhmmf
$ ls
180570 chhgrj
dir fqqnjd
dir hmz
dir ljv
dir lrlqc
dir pfvmhz
299487 tnhwncj.nfv
dir wqcsrw
$ cd fqqnjd
$ ls
131810 mcm.pbj
237810 mvgmfhh.thn
199479 qrqpl
281772 vmwddb.qbh
$ cd ..
$ cd hmz
$ ls
319803 lqtw.vtp
111388 mgdwvvqd
38536 mlqsbjr.npn
85619 vmwddb.vhq
$ cd ..
$ cd ljv
$ ls
dir vmwddb
$ cd vmwddb
$ ls
dir bgdchqwj
$ cd bgdchqwj
$ ls
147734 jrfpjdpw.znd
$ cd ..
$ cd ..
$ cd ..
$ cd lrlqc
$ ls
327255 wmtvbq
$ cd ..
$ cd pfvmhz
$ ls
dir bpdv
dir cgnhzrb
dir cpgvb
71305 mmlbp.hnw
207351 rgwgmtr
223983 sgmlt.nrj
$ cd bpdv
$ ls
50169 stvpjws.pbn
$ cd ..
$ cd cgnhzrb
$ ls
328146 fzd.fgm
307323 gnmgw.rsf
311890 tmrdgzmm
$ cd ..
$ cd cpgvb
$ ls
241313 vzgnlqzh.fcb
$ cd ..
$ cd ..
$ cd wqcsrw
$ ls
dir jllhmmf
$ cd jllhmmf
$ ls
dir jllhmmf
$ cd jllhmmf
$ ls
161384 rvqgwwz.rbq
2778 zlbgrzs.jlv
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd qtwnndbg
$ ls
222554 qtwnndbg
20197 rrnmgz.hsj
135325 rvqgwwz.rbq
dir rzbjntjl
81086 tbsj.zns
275538 wqcsrw
$ cd rzbjntjl
$ ls
315148 lqtw.vtp
$ cd ..
$ cd ..
$ cd sshvc
$ ls
37541 mvgmfhh.thn
27276 vwwpbqq
$ cd ..
$ cd tzhbztd
$ ls
dir gcrfzd
dir ltvhvt
dir qtwnndbg
dir rgqwp
dir wqcsrw
$ cd gcrfzd
$ ls
319338 jrfpjdpw.znd
24471 wmtvbq
77828 zcbwwf
210897 zgfncbmh
169336 zvrfwmgm
$ cd ..
$ cd ltvhvt
$ ls
dir qtwnndbg
1644 rqr
114660 sfvv.frz
dir shl
dir vmwddb
dir wqcsrw
$ cd qtwnndbg
$ ls
dir hgfvpn
dir jcgr
dir ljv
dir scrd
dir zwwclfj
$ cd hgfvpn
$ ls
83476 nrpjcnz.psn
$ cd ..
$ cd jcgr
$ ls
dir jhvqhq
dir zhdch
$ cd jhvqhq
$ ls
dir ljv
$ cd ljv
$ ls
213483 hsjbmv
165211 rvqgwwz.rbq
48993 wmtvbq
$ cd ..
$ cd ..
$ cd zhdch
$ ls
126929 zsmpbnml.qbl
$ cd ..
$ cd ..
$ cd ljv
$ ls
60596 jrfpjdpw.znd
$ cd ..
$ cd scrd
$ ls
313679 nmhhp.bvt
199353 wmtvbq
$ cd ..
$ cd zwwclfj
$ ls
dir czqszmf
dir dmv
dir pgjwmnwf
dir whpmfw
$ cd czqszmf
$ ls
181716 jrfpjdpw.znd
$ cd ..
$ cd dmv
$ ls
303356 qtwnndbg.phh
$ cd ..
$ cd pgjwmnwf
$ ls
59757 cbdggnvh.szc
$ cd ..
$ cd whpmfw
$ ls
102901 lqtw.vtp
162907 rvqgwwz.rbq
dir whd
$ cd whd
$ ls
dir rvqnddsb
$ cd rvqnddsb
$ ls
265936 wmtvbq
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd shl
$ ls
270493 llqj.cvz
199257 lvhrltd.cbq
44404 qqhvstd.vjd
$ cd ..
$ cd vmwddb
$ ls
176668 dsmjtpcm.vfr
$ cd ..
$ cd wqcsrw
$ ls
85545 wqcsrw.llm
$ cd ..
$ cd ..
$ cd qtwnndbg
$ ls
dir ljv
dir psqjqb
dir tnvlnmw
44316 wmtvbq
dir wqcsrw
$ cd ljv
$ ls
205777 jrfpjdpw.znd
279684 mvgmfhh.thn
dir ppw
dir rms
dir tsccztf
dir wqcsrw
$ cd ppw
$ ls
139214 ljv
dir vmwddb
$ cd vmwddb
$ ls
141988 fbgbwp.fwl
$ cd ..
$ cd ..
$ cd rms
$ ls
221170 crlhwdqs.rbp
$ cd ..
$ cd tsccztf
$ ls
dir csrc
dir dbtzwqj
dir vqw
$ cd csrc
$ ls
dir jllhmmf
281285 nwbcqwf.lqw
$ cd jllhmmf
$ ls
337404 qtwnndbg.qhb
$ cd ..
$ cd ..
$ cd dbtzwqj
$ ls
89297 clsblqf.sql
75292 jrfpjdpw.znd
242192 mvgmfhh.thn
$ cd ..
$ cd vqw
$ ls
43526 vrgfvcd.tsc
$ cd ..
$ cd ..
$ cd wqcsrw
$ ls
38096 lqtw.vtp
37490 mvgmfhh.thn
$ cd ..
$ cd ..
$ cd psqjqb
$ ls
9842 wqcsrw
$ cd ..
$ cd tnvlnmw
$ ls
dir cvgs
dir npslzj
dir qtwnndbg
dir tsshp
$ cd cvgs
$ ls
48820 jllhmmf.rjr
2036 sprlcwv
$ cd ..
$ cd npslzj
$ ls
dir bbj
227147 slfq.bdf
$ cd bbj
$ ls
77671 bsmgb
$ cd ..
$ cd ..
$ cd qtwnndbg
$ ls
121924 wmtvbq
$ cd ..
$ cd tsshp
$ ls
33269 jllhmmf
$ cd ..
$ cd ..
$ cd wqcsrw
$ ls
dir jllhmmf
$ cd jllhmmf
$ ls
133114 rvqgwwz.rbq
$ cd ..
$ cd ..
$ cd ..
$ cd rgqwp
$ ls
13207 djgldhd
120394 fpjppcp.sbr
296110 fwwqr.gzz
146254 nprjzt.fml
265873 wqcsrw
$ cd ..
$ cd wqcsrw
$ ls
dir bbjgh
157738 mvgmfhh.thn
dir njdnjmz
dir wqm
179080 wtgpwt.sqm
$ cd bbjgh
$ ls
2285 wqcsrw.cvn
$ cd ..
$ cd njdnjmz
$ ls
dir cfd
$ cd cfd
$ ls
95362 vmwddb.rgq
$ cd ..
$ cd ..
$ cd wqm
$ ls
235077 jrfpjdpw.znd
$ cd ..
$ cd ..
$ cd ..
$ cd wqcsrw
$ ls
11821 rvqgwwz.rbq
$ cd ..
$ cd zjbzdrnd
$ ls
273551 ljv.mtt
73077 ljv.rpz
dir sbqsqw
102241 wmtvbq
$ cd sbqsqw
$ ls
308189 drmlmhb.jqt
$ cd ..
$ cd ..
$ cd ..
$ cd hblzj
$ ls
dir cgm
113128 csgchmtn.drj
dir qlg
dir rsgbjpp
dir tpjpnjg
dir vmwddb
$ cd cgm
$ ls
dir dfm
dir fqhzrms
dir ljv
125604 lqtw.vtp
dir vtrs
56731 wmtvbq
$ cd dfm
$ ls
228574 ljv
$ cd ..
$ cd fqhzrms
$ ls
dir qtwnndbg
$ cd qtwnndbg
$ ls
230853 njvmtghw
$ cd ..
$ cd ..
$ cd ljv
$ ls
68290 fbrm.gdc
117256 jllhmmf.dvj
$ cd ..
$ cd vtrs
$ ls
150365 brt.dqc
313762 chhlg.fst
dir dtmjbfm
92651 ljv.sjz
306760 rrwh
276248 rvqgwwz.rbq
$ cd dtmjbfm
$ ls
270715 jllhmmf.vdw
20878 wmtvbq
$ cd ..
$ cd ..
$ cd ..
$ cd qlg
$ ls
dir fgv
131774 jrfpjdpw.znd
dir ldmpnbt
36604 mvgmfhh.thn
dir prhtj
dir vfsj
dir wqcsrw
$ cd fgv
$ ls
222821 wmtvbq
$ cd ..
$ cd ldmpnbt
$ ls
183619 tbfjvng
$ cd ..
$ cd prhtj
$ ls
201210 lpdvzs.ndv
309785 smmfht
$ cd ..
$ cd vfsj
$ ls
dir bzznmpc
123825 cbzvvdm.rvs
dir ghp
dir gwzm
313610 jrfpjdpw.znd
dir ndsfzz
34270 rjq.ttw
dir rsqhz
108776 rvqgwwz.rbq
dir tsmlpnbc
29065 wwqfpv.fgv
dir zmljzwt
$ cd bzznmpc
$ ls
147394 rft.fsn
$ cd ..
$ cd ghp
$ ls
dir bhvgpz
248463 gwwtl
285955 tccqqtbw.bzv
122937 zwqh
$ cd bhvgpz
$ ls
300057 jllhmmf
137933 jrfpjdpw.znd
170731 pstc.hjq
dir tvpw
$ cd tvpw
$ ls
226913 ltjtlcp.nfj
113485 mvgmfhh.thn
$ cd ..
$ cd ..
$ cd ..
$ cd gwzm
$ ls
33023 jrfpjdpw.znd
dir zwztrgr
$ cd zwztrgr
$ ls
310997 mtrfsv.jgn
$ cd ..
$ cd ..
$ cd ndsfzz
$ ls
dir bhfnclp
dir jllhmmf
15445 lqtw.vtp
68225 rvqgwwz.rbq
46093 spvrn
dir vdfmwrq
dir zwzlr
$ cd bhfnclp
$ ls
174231 mvgmfhh.thn
dir qgtrvmf
202378 qtwnndbg.cnp
124762 sctssqpq
$ cd qgtrvmf
$ ls
65851 mvgmfhh.thn
$ cd ..
$ cd ..
$ cd jllhmmf
$ ls
dir jmqltsd
dir mjzcf
281062 sjdmlqzs
dir vmjjtbl
$ cd jmqltsd
$ ls
327426 ddhs.qsp
$ cd ..
$ cd mjzcf
$ ls
229568 cjq.jss
227699 jrfpjdpw.znd
41949 pjzcq
62253 rvqgwwz.rbq
$ cd ..
$ cd vmjjtbl
$ ls
dir sjqpfc
$ cd sjqpfc
$ ls
dir mbpfvsg
dir vfwvtscb
$ cd mbpfvsg
$ ls
128515 lqtw.vtp
$ cd ..
$ cd vfwvtscb
$ ls
dir ljv
$ cd ljv
$ ls
dir nwbfd
$ cd nwbfd
$ ls
297506 mvgmfhh.thn
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd vdfmwrq
$ ls
dir ntm
$ cd ntm
$ ls
36060 vlvdhw.vlj
$ cd ..
$ cd ..
$ cd zwzlr
$ ls
126975 bfnpq.hzt
$ cd ..
$ cd ..
$ cd rsqhz
$ ls
dir cjzh
238925 crgfccz.hlg
dir dsssbm
197221 ftrdjhcn.grz
171860 jvvcpbh
60237 qtwnndbg.rwr
247770 whwf
$ cd cjzh
$ ls
105519 rvqgwwz.rbq
$ cd ..
$ cd dsssbm
$ ls
128213 dqsrbnjd.bwf
dir frmmlzv
318040 wmtvbq
$ cd frmmlzv
$ ls
127732 mvgmfhh.thn
37436 qtwnndbg.zzg
$ cd ..
$ cd ..
$ cd ..
$ cd tsmlpnbc
$ ls
dir bdb
dir ddjd
dir gbdm
dir grm
273561 hzszqjgf.ggp
$ cd bdb
$ ls
100286 qtwnndbg
$ cd ..
$ cd ddjd
$ ls
dir vmwddb
$ cd vmwddb
$ ls
261837 wqcsrw.mzq
$ cd ..
$ cd ..
$ cd gbdm
$ ls
233279 wmtvbq
$ cd ..
$ cd grm
$ ls
dir cghd
$ cd cghd
$ ls
8883 ncjc.vsj
$ cd ..
$ cd ..
$ cd ..
$ cd zmljzwt
$ ls
274821 lqtw.vtp
dir ltpmzrtf
dir qtwnndbg
dir shfjtm
$ cd ltpmzrtf
$ ls
222040 vmwddb.fcz
$ cd ..
$ cd qtwnndbg
$ ls
245288 lhbjpggt.rfr
dir ltgqs
dir nqngjr
161396 rmlm.psv
130067 vmwddb.ssz
$ cd ltgqs
$ ls
45032 vmwddb.zwl
$ cd ..
$ cd nqngjr
$ ls
296145 fbt
$ cd ..
$ cd ..
$ cd shfjtm
$ ls
dir dqv
dir jhgdb
dir jllhmmf
dir sczqst
dir zngqfcw
$ cd dqv
$ ls
327447 jllhmmf.ndg
$ cd ..
$ cd jhgdb
$ ls
138120 bdbjjfs.rtn
dir nfd
dir qwng
dir zwdbl
$ cd nfd
$ ls
dir tdslfhgq
$ cd tdslfhgq
$ ls
dir jnfrd
45044 jrfpjdpw.znd
133120 sdjzcfhh.dmm
$ cd jnfrd
$ ls
314151 wmtvbq
161805 zzctqr
$ cd ..
$ cd ..
$ cd ..
$ cd qwng
$ ls
202921 zvtlrb.sdf
$ cd ..
$ cd zwdbl
$ ls
219865 wmtvbq
$ cd ..
$ cd ..
$ cd jllhmmf
$ ls
258183 rvqgwwz.rbq
$ cd ..
$ cd sczqst
$ ls
37030 jrfpjdpw.znd
$ cd ..
$ cd zngqfcw
$ ls
dir fmwlfgm
254522 rvqgwwz.rbq
$ cd fmwlfgm
$ ls
229979 jgcr.qlt
282169 wwpwcjgv
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd wqcsrw
$ ls
111251 ghjbjfhg.nqs
$ cd ..
$ cd ..
$ cd rsgbjpp
$ ls
dir dchrnhrl
dir lsqztz
dir lwlh
dir slb
$ cd dchrnhrl
$ ls
45452 ctmp.cmv
dir gqznj
206243 mvgmfhh.thn
166028 szzzlft.lst
156182 trtgnc.gcr
75072 zrh
$ cd gqznj
$ ls
251328 ljv.tpg
24996 lqtw.vtp
$ cd ..
$ cd ..
$ cd lsqztz
$ ls
dir cmrqhlf
$ cd cmrqhlf
$ ls
290574 wzbg.fdp
$ cd ..
$ cd ..
$ cd lwlh
$ ls
dir flc
dir pjm
dir vhs
140257 wqcsrw
dir zqwvr
$ cd flc
$ ls
75721 fbhzn
84992 jrfpjdpw.znd
2018 rvqgwwz.rbq
$ cd ..
$ cd pjm
$ ls
dir bzctws
213358 jllhmmf.vlr
243414 jrfpjdpw.znd
dir ljv
dir vjjhgjmp
$ cd bzctws
$ ls
89520 ljv.nbf
$ cd ..
$ cd ljv
$ ls
210757 fnnbm
$ cd ..
$ cd vjjhgjmp
$ ls
dir ljv
dir qvpcmscg
dir rsbdmvjq
219321 wjcwpt.psz
dir wqcsrw
$ cd ljv
$ ls
137884 jrfpjdpw.znd
$ cd ..
$ cd qvpcmscg
$ ls
36087 gwflqqnm.qjb
82032 pmqfdv
242377 qpth
$ cd ..
$ cd rsbdmvjq
$ ls
223158 wmtvbq
72999 zchc.wfg
$ cd ..
$ cd wqcsrw
$ ls
dir ljv
$ cd ljv
$ ls
dir mrw
$ cd mrw
$ ls
271684 tmnldb.rgb
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd vhs
$ ls
dir hsjs
dir jhvqqcls
172468 rvqgwwz.rbq
$ cd hsjs
$ ls
227982 jrfpjdpw.znd
323849 wmtvbq
$ cd ..
$ cd jhvqqcls
$ ls
dir wqcsrw
$ cd wqcsrw
$ ls
145011 twdzdhrb.nsw
$ cd ..
$ cd ..
$ cd ..
$ cd zqwvr
$ ls
333371 rvqgwwz.rbq
144186 vmwddb.htb
$ cd ..
$ cd ..
$ cd slb
$ ls
101405 jrfpjdpw.znd
80571 lqtw.vtp
212763 rfqt.cvz
242678 ssrbmlwn.rgn
204742 tftbz
$ cd ..
$ cd ..
$ cd tpjpnjg
$ ls
37762 wqcsrw.vhz
$ cd ..
$ cd vmwddb
$ ls
dir ctgzpnn
237933 hhv
dir lwvcw
dir wpw
$ cd ctgzpnn
$ ls
dir jbfqtvhl
100662 jhp
117832 lqtw.vtp
225417 mvgmfhh.thn
21553 rvqgwwz.rbq
240333 sbmzdqrc
dir shnnqff
$ cd jbfqtvhl
$ ls
37115 ljv.rws
73007 wqcsrw
$ cd ..
$ cd shnnqff
$ ls
294441 frghtdtd.qwf
dir srbf
dir vmwddb
$ cd srbf
$ ls
dir fqhhcdcm
$ cd fqhhcdcm
$ ls
142423 vmwddb.snc
$ cd ..
$ cd ..
$ cd vmwddb
$ ls
dir jllhmmf
dir ljv
61218 nsmtdl
58661 wqcsrw
$ cd jllhmmf
$ ls
6984 qdjnldqn
231401 sfcwg
$ cd ..
$ cd ljv
$ ls
110331 jfjsgfn.lvq
269960 mvgmfhh.thn
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd lwvcw
$ ls
115763 mvgmfhh.thn
$ cd ..
$ cd wpw
$ ls
187278 lqtw.vtp
$ cd ..
$ cd ..
$ cd ..
$ cd jbssdwf
$ ls
31839 ljcttp
$ cd ..
$ cd ljv
$ ls
270886 jrfpjdpw.znd
$ cd ..
$ cd nhp
$ ls
dir sgffh
$ cd sgffh
$ ls
76321 psbpb.sqj`
// console.log(bod.split('\n'))

test(bod.split('\n'))
