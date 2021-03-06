/*var createDiv=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'">'+x.txt+'</div>'
}
var createATag=x=>{
	return '<a id="'+x.id+'" class="'+x.clazz+'" role="'+x.role+'">'+x.txt+'</a>'
}
var createSpan=x=>{
	return '<span id="'+x.id+'" class="'+x.clazz+'"></span>'
}
var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'" role="'+x.role+'"></ul>'
}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>'
}
var createImg=x=>{
	return '<img alt="'+x.alt+'" src="'+x.src+'">'
}
var createButton=x=>{
	return '<button id="'+x.id+'" class="'+x.clazz+'">'+x.txt+'</button>'
}
var createHTag=x=>{
	return '<h'+x.num+' class="'+x.clazz+'">'+x.txt+'</h'+x.num+'>'
}
*/
var createTRJW =x=>{
    var q =0;
    var tr = '';
    $.each(x.list, (i,j)=>{
        tr+='<tr id="jw_'+(q++)+'" class ="'+x.clazz+'">'
        +createTDJW(j)+'</tr>';
    });
    return tr;
}
var createTHJW=x=>{
    var th ='<tr>'
        $.each(x.thList, (i,j)=>{
            th +='<th id="'+x.id+'">'+j+'</th>'       
        })
            th +='</tr>'
        return th;
}
var createTDJW=x=>{
    var td ='';
    var w =0;
    td +='<td id="td_'+w+'" class = "'+'_'+(w++)+'">'
    +x.bID+'</td>';
    td +='<td id="td_'+w+'" class = "'+'_'+(w++)+'" >'
    +x.title+'</td>';
    td +='<td id="td_'+w+'" class = "'+'_'+(w++)+'" >'
    +x.memID+'</td>';
    td +='<td id="td_'+w+'" class = "'+'_'+(w++)+'">'
    +x.viewNum+'</td>';
    td +='<td id="td_'+w+'" class = "'+'_'+(w++)+'">'
    +x.createDate+'</td>';
    return td;
}
var createBorderATag=x=>{
    return '<a id="'+x.id+'" href="'+x.link+'" clazz:"'+x.clazz+'" role="'+x.role+'" data-slide="'+x.slide+'" >'+x.val+'</a>';
}
//추가 만호
var createListTr=x=>{
    var tmep ='';
    
    $.each(x.trNum,(i,j)=>{
        temp +='<tr id="tr-'+x.id+'-'+j+'" class="'+x.clazz+'">'
        +createListTd({
            tdNum:x.tdNum,
            tdClazz:x.tdClazz,
            id:x.id
            
        })+'</tr>';
    });
    return temp;
}
var createListTd=x=>{
    
    var temp ='';
    $.each(x.tdNum,(i,j)=>{
        temp +='<td id ="td-'+x.id+'-'+j+'" class ="'+x.tdClazz+'"></td>'
    });
    return temp;
}
var createListTh=x=>{
    
    var temp ='';
    $.each(x.tdNum,(i,j)=>{
        temp +='<th id ="td-'+x.id+'-'+j+'" class ="'+x.tdClazz+'"></th>'
    });
    return temp;
}
var createMultiTh = x=>{
    var temp ='';
    $.each(x.arr,(i,j)=>{
        temp+='<th id="th-'+i+'" class="'+x.clazz+'"></th>'
    });
    return temp;
}
var createMultiTd = x=>{
    var temp ='';
    $.each(x.arr,(i,j)=>{
        temp+='<td id="td-'+i+'" class="'+x.clazz+'"></td>'
    });
    return temp;
}
var createMultiTr = x=>{
    var temp ='';
    $.each(x.arr,(i,j)=>{
        temp+='<tr id="tr-'+i+'" class="'+x.clazz+'"></tr>'
    });
    return temp;
}
var createMultiATag = x=>{
    var temp = '';
    $.each(x.arr,(i,j)=>{
        temp+='<a id="a-'+x.id+'-'+i+'" href="#">'+j+'</a>'
    });
    return temp;
}
var createMultiLi = x=>{
    var temp = '';
    $.each(x.arr,(i,j)=>{
        temp +='<li id ="li-'+x.id+'-'+i+'" class="'+x.clazz+'"><a href="#" class="'+x.aClazz+'">'+j+'</a></li>'
    })
    return temp;
}
// 기본
var createFont=x=>{
    return '<font>'+x.val+'</font>';
}
var textarea=x=>{
    return '<textarea id="'+x.id+'">'
}
var createSelect=x=>{
    return '<select id="'+x+'"></select>'
}
var createImg=x=>{
    return '<img id="'+x.id+'" alt="'+x.alt+'" src="'+x.src+'" class="'+x.clazz+'">'
}
var createOption=x=>{
    return '<option value="'+x.val+'">'+x.txt+'</option>'
}
var createDiv=x=>{
    return '<div id="'+x.id+'" class="'+x.clazz+'"></div>'
}
var createForm=x=>{
    return '<form id="'+x.id+'" class="'+x.clazz+'"></form>'
}
var createATag=x=>{
    return '<a id="'+x.id+'" href="#"> '+x.val+'</a>';
}
var createTable=x=>{
    return '<table id="'+x.id+'" class = "'+x.clazz+'"></table>'
}
var createTr = x=>{
    return '<tr id="'+x.id+'"></tr>'
}
var createTh = x=>{
    return '<th id="'+x.id+'" class="'+x.clazz+'"></th>';
}
var createTd = x=>{
    return '<td id="'+x.id+'" class="'+x.clazz+'"></td>'
}
var createUL=x=>{
    return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>'
}
var createLI=x=>{
    return '<li id="'+x.id+'" class="'+x.clazz+'"></li>'
}
var createOL=x=>{
    return '<ol id="'+x.id+'"class="'+x.clazz+'"></ol>';
}
var createLabel=x=>{
    return '<label for="'+x.fo+'">'+x.val+'</label>'
}
var createButton=x=>{
    return  '<button id="'+x.id+'" class = "'+x.clazz+'">'+x.val+'</button>';
}
var createInput=x=>{
    return '<input id="'+x.id+'" class="'+x.clazz+'" type = "'+x.type+'"/>'
}
var createSpan=x=>{
    return '<span id="'+x.id+'" class="'+x.clazz+'"></span>';
}
var createHTag=x=>{
    return '<h'+x.size+'>'+x.val+'</h'+x.size+'>';
}