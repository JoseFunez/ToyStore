
let dataTable;
let dataTableInitialized = false;

const dataTableOptions ={
    columnDefs:[
        {className:'centered', targets:[0,1,2,3,4,5,6]},
        {orderable:false, targets:[0,1,2,3,4,5,6]}
    ],
    //pageLength:3,
    destroy:true,
};

const initDataTable = async() =>{
    if(dataTableInitialized){
        dataTable.destroy();
    }
    await listUsers();

    dataTable = $('#dataTable_users').dataTable(dataTableOptions);
    dataTableInitialized = true;
};


const listUsers = async() =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        let content = ``;
        users.forEach((user,index) => {
            for(let i=0; i<20; i++){
                content += `
                 <tr>
                     <td>${user.id}</td>
                     <td>${user.name}</td>
                     <td>${user.email}</td>
                     <td>${user.address.city}</td>
                     <td>${user.company.name}</td>
                     <td><i class="fa-solid fa-check" style="color: green;"></i></td>
                     <td>
                         <button type="button" class="btn btn-primary btn-edd" onclick="editar()"><i class="fa-solid fa-pencil"></i></button>
                         <button type="button" class="btn btn-danger btn-det" onclick="eliminar()"><i class="fa-solid fa-trash-can"></i></button>
                     </td>
                 </tr>`;
            }  
        });
        tableBody_users.innerHTML = content;
    } catch(ex){
        alert(ex);
    }
};

window.addEventListener('load', async()=>{
    await initDataTable();
});

//agregar
const openModal = document.querySelector('.btn-add');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');
const agregarEnModal = document.querySelector('.agg');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('lo apretaste');
    modal.classList.add('modal--show');
});
closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
agregarEnModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});


//editar
function editar(){
    const openModal2 = document.querySelectorAll('.btn-edd');
    const modal2 = document.querySelector('.modal2');
    const closeModal2 = document.querySelector('.modal_close2');
    const editarEnModal = document.querySelector('.editt');

    openModal2.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            console.log('estoy presionandolo2');
            modal2.classList.add('modal--show2');
        });
    });

    closeModal2.addEventListener('click', (e) => {
        e.preventDefault();
        modal2.classList.remove('modal--show2');
    });

    editarEnModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal2.classList.remove('modal--show2');
    }); 
}

//eliminar
function eliminar(){
    const openModal3 = document.querySelectorAll('.btn-det');
    const modal3 = document.querySelector('.modal3');
    const closeModal3 = document.querySelector('.modal_close3');
    const eliminarEnModal = document.querySelector('.dett');
    
    openModal3.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            console.log('estoy presionandolo3');
            modal3.classList.add('modal--show3');
        });
    });

    closeModal3.addEventListener('click', (e) => {
        e.preventDefault();
        modal3.classList.remove('modal--show3');
    });

    eliminarEnModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal3.classList.remove('modal--show3');
    }); 
}
