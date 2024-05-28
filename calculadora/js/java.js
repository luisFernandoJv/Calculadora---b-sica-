function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay(){
            this.display.value = '';

        },

        apagarNum(){
            this.display.value = this.display.value.slice(0, -1);
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizarConta();
                }
            });
        },

        realizarConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('conta invalida');
                    return;
                }
                this.display.value = String(conta);

            }catch(e){
                alert('conta invalida');

            }

        },

        

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
          

        },

       

        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagarNum();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizarConta();
                }

            });

        },
        btnParaDisplay(valor){
            this.display.value += valor;

        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();





