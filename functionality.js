const catalog = [['Spy x Family',['Anime','Action','SliceofLife'],'Images/Spyxfam.webp','content/spyxfam.html'],
['Sword Art Online',['Anime','Action','MMORPG'],'Images/sao.jpg','content/sao.html'],
['The Disastorous Life of Saiki K',['Anime','SliceofLife','Supernatural'],'Images/saikik.jpg','content/saiki.html'],
['Ouran High School Host Club',['Anime','SliceofLife','Romcom'],'Images/ouran.jpg','content/ouran.html'],
['Castle',['Mystery','Comedy','Drama'],'Images/castle.jpg','content/castle.html'],
['Dr Who',['Adventure','Scifi','Drama'],'Images/drwho.jpg','content/drwho.html'],
['The Big Bang Theory',['Sitcom','Comedy','American'],'Images/bigbangtheory.jpg','content/bbt.html'],
['How I met your mother',['Sitcom','Comedy','Romance'],'Images/howimetyourmother.jpg','content/himym.html']];

/*for(i=0;i<8;i++){
document.getElementById("homeload").innerHTML+="<div id='ihold'><a href='"+catalog[i][3]+"'><img src='"+catalog[i][2]+"'></a><div><h2>"+catalog[i][0]+"</h2><h4>"+catalog[i][1][0]+" "+catalog[i][1][1]+" "+catalog[i][1][2]+"</h4></div></div>";
}*/

function traverse(){
    termlist=document.getElementById("search").value;
    var s=0;
    const reject=[],seek=[],terms=[],active=[0,0,0],eval=[0,0,0,0,0,0,0,0];
    for(var i=0;i<termlist.length;i++){
        if(termlist.charAt(i)==' '){
            var val=termlist.substring(s,i);
            val=val.trim();
                if(val.charAt(0)=='-')
                reject.push(termlist.substring(s+1,i));
                else if(val.charAt(0)=='+')
                seek.push(termlist.substring(s+1,i));
                else
                terms.push(val);
                s=i+1;
        }
        else if(i==termlist.length-1){
            var val=termlist.substring(s,i+1);
            val=val.trim();
                if(val.charAt(0)=='-')
                reject.push(termlist.substring(s+1,i+1));
                else if(val.charAt(0)=='+')
                seek.push(termlist.substring(s+1,i+1));
                else
                terms.push(val);
                s=i+1;
        }
    }
    if(terms.length>0)
    active[0]=1;
    if(seek.length>0)
    active[1]=1;
    if(reject.length>0)
    active[2]=1;

    if(active[2]==1){
        for(let i=0;i<reject.length;i++){
            for(let j=0;j<8;j++){
                for(let k=0;k<3;k++){
                    if(reject[i].toLowerCase()===catalog[j][1][k].toLowerCase()){
                        eval[j]=-1;
                    }
                }
            }
        }
        for(let i=0;i<8;i++){
            if(eval[i]!=-1)
            eval[i]=1;
        }
    }

    if(active[1]==1){
            for(let j=0;j<8;j++){
                var ck=0;
                for(let k=0;k<3;k++){
                    if(seek[0].toLowerCase()===catalog[j][1][k].toLowerCase()&&eval[j]!=-1){
                        ck=1;
                    }
                }
                if(ck==1)
                  eval[j]=1;
                if(ck!=1&&eval[j]==1)
                  eval[j]=-1;
                ck=0;
            }
            for(let i=0;i<8;i++){
                if(eval[i]!=1)
                eval[i]=-1;
            }
            if(seek.length>1){
                var ck=0;
            for(let i=1;i<seek.length;i++){
                for(let j=0;j<8;j++){
                    for(let k=0;k<3;k++){
                        if(seek[i].toLowerCase()===catalog[j][1][k].toLowerCase()){
                           ck=1;                              
                        }
                    }
                    if(eval[j]==1&&ck!=1){
                        eval[j]=-1;
                    }
                    ck=0;
                }
            }
        }
    }

    if(active[0]==1){
        const letter=[[],[],[],[],[],[],[],[]],loclet=[];
        var st=0;
        for(let i=0;i<8;i++){
            for(let l=0;l<catalog[i][0].length;l++){
                if(catalog[i][0].charAt(l)==' '){
                    var val=catalog[i][0].substring(st,l);
                    val=val.trim();
                    loclet.push(val);
                    st=l+1;
                }
                else if(l==catalog[i][0].length-1){
                    var val=catalog[i][0].substring(st,l+1);
                    val=val.trim();
                    loclet.push(val);
                }
            }
            st=0;
            while(loclet.length>0){
                letter[i].push(loclet.pop());
            }
        }

        for(let i=0;i<8;i++){
            var ck=0
            for(let j=0;j<letter[i].length;j++){
                if(letter[i][j].toLowerCase()===terms[0].toLowerCase()&&eval[i]!=-1){
                ck=1;
                }
            }
            if(ck==1)
            eval[i]=1;
            if(ck!=1&&eval[i]==1)
            eval[i]=-1;
            ck=0;
        }
        
        if(terms.length>1){
            var ck=0;
        for(let i=0;i<8;i++){
            for(let j=0;j<letter[i].length;j++){
                for(let k=1;k<terms.length;k++){
                    if(letter[i][j].toLowerCase()===terms[k].toLowerCase())
                    ck=1;
                }
                if(eval[1]==1&&ck!=1)
                eval[i]=-1;
                ck=0;
            }
        }
      }
    }

    var outlist="";
    for(let i=0;i<8;i++){ 
    if(eval[i]==1)
        outlist+=htmltemplate(catalog[i][3],catalog[i][2]);
    }
    document.getElementById("reshold").innerHTML=outlist;
}

function htmltemplate(ref,sauce){
    var template="<span id='ihold'><a href="+ref+"><img src='"+sauce+"'></a></span>";

    return template;
}