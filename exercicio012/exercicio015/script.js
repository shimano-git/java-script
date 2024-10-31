function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')

    }else {
        var fsex=document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var gênero = ''
        var img= document.createElement('img') 
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src','criancamenino.png' )
            }else if (idade <21){
                //Jovem
                img.setAttribute('src','jovemhomem.png' )
            }else if ( idade < 50){
                //Adulto
                img.setAttribute('src','adultohomem.png' )
            }else {
                //Idoso
                img.setAttribute('src','idosohomem.png' )
            }
                
        }else if (fsex[1].checked){
            gênero =  'Mulher'
            if(idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src','criancamenina.png' )
            }else if (idade <21){
                //Jovem
                img.setAttribute('src','jovemmulher.png' )
            }else if ( idade < 50){
                //Adulto
                img.setAttribute('src','adultomulher.png' )
            }else {
                //Idoso
                img.setAttribute('src','idosomulher.png' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}