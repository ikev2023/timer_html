function temp() 
{
    let tiempo = 15;
    let timer_2;
    document.getElementById("btn_iniciar").style.visibility = "hidden";
    const audioElement = new Audio("sonic.wav");
    const timer = setInterval(() => 
    {
        const hours = Math.floor(tiempo / 3600);
        const minutes = Math.floor((tiempo % 3600) / 60);
        const seconds = tiempo % 60;
        const tiempo_formato = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        document.getElementById("contador").innerText = tiempo_formato;
        tiempo--;

        if (tiempo ==12) {
            document.getElementById("contador").style.color = "red";
            audioElement.play();
            color_efecto();
        }
        if (tiempo == -1) {
            clearInterval(timer);
            clearInterval(timer_2);
            alert("Se acabo el tiempo :c");
            document.getElementById("contador").style.color = "";
            document.getElementById("contador").style.display="block";
            document.getElementById("btn_iniciar").style.visibility = "visible";
        }
    }, 1000);

    function color_efecto() 
    {
        let colorActual = "#444342";
        timer_2 = setInterval(() => 
        {
            let xd = document.getElementById("contador");
            xd.style.color = (colorActual === "#444342") ? "red" : "#444342";
            colorActual = (colorActual === "#444342") ? "red" : "#444342";
        }, 200);
    }
}
