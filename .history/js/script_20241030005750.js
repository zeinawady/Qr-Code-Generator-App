
let qrImg=document.getElementById('qrImg');
let qrText=document.getElementById('qrText');

function generateQR(){
    if(qrText.value.trim().length>0){
        qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    }
    else{

        qrText.classList.add('error');
        qrText.classList.add('bg-danger,text-white');

        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000)
    }
}