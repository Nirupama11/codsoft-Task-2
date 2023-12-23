const todolist = [];

function rendertodo(){
    let todolistHTML='';

    for (let i=0;i<todolist.length;i++){
        const todoobj = todolist[i];
        const name = todoobj.name;
        const date= todoobj.date;
        const html=`
        <div class="ip-box"> ${name} </div>
        <div class="ip-bx"> ${date} </div>
        <button class="del" onclick="
        todolist.splice(${i},1);
        rendertodo();">
        Delete</button>`;
        todolistHTML+=html;
    }
    
    document.querySelector('.js-dis').innerHTML=todolistHTML;
}

function addto(){
    const inputelement = document.querySelector('.js-input');
    const name = inputelement.value;
    const dateinput = document.querySelector('.js-date');
    const date = dateinput.value;
    todolist.push({
        name :name,
        date : date,
    });
    inputelement.value='';
    rendertodo();
}