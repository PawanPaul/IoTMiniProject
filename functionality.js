const catalog = [['Spy x Family',['Anime','Action','SliceofLife'],'Images/Spyxfam.webp','spyxfam.html'],
['Sword Art Online',['Anime','Action','MMORPG'],'Images/sao.jpg','sao.html'],
['The Disastorous Life of Saki K',['Anime','SliceofLife','Supernatural'],'Images/saikik.jpg','saiki.html'],
['Ouran High School Host Club',['Anime','SliceofLife','Romcom'],'Images/ouran.jpg','ouran.html'],
['Castle',['Mystery','Comedy','Drama'],'Images/castle.jpg','castle.html'],
['Dr Who',['Adventure','Scifi','Drama'],'Images/drwho.jpg','drwho.html'],
['The Big Bang Theory',['Sitcom','Comedy','American'],'Images/bigbangtheory.jpg','bigbang.html'],
['How I met your mother',['Sitcom','Comedy','Romance'],'Images/howimetyourmother,jpg','howimet.html']];

for(i=0;i<8;i++){
document.getElementById("homeload").innerHTML+="<div id='ihold'><a href='"+catalog[i][3]+"'><img src='"+catalog[i][2]+"'></a><div><h2>"+catalog[i][0]+"</h2><h4>"+catalog[i][1][0]+" "+catalog[i][1][1]+" "+catalog[i][1][2]+"</h4></div></div>";
}