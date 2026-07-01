const pages = document.querySelectorAll(".page");

function showPage(id){
    pages.forEach(page=>page.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ======================
// PAGE 1
// ======================

const next1 = document.getElementById("next1");
const noBtn = document.getElementById("noBtn");

next1.addEventListener("click", ()=>{
    showPage("page2");
    startCry();
});

noBtn.addEventListener("mouseover", ()=>{
    const w = window.innerWidth - 120;
    const h = window.innerHeight - 80;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * w + "px";
    noBtn.style.top = Math.random() * h + "px";
});

// Opsional: Reset posisi saat mouse keluar
noBtn.addEventListener("mouseout", ()=>{
    noBtn.style.position = "static";
});


// ======================
// PAGE 2
// ======================

function startCry(){
    const emoji = document.getElementById("emoji");
    const water = document.getElementById("water");
    const text = document.querySelectorAll("#text2 p");

    setTimeout(()=>emoji.innerHTML="😭", 1000);
    setTimeout(()=>emoji.innerHTML="😭😭", 2000);
    setTimeout(()=>water.style.height="45%", 2500);

    text.forEach((p, i)=>{
        setTimeout(()=>{
            p.style.opacity = "1";
        }, i * 1000);
    });
}

const next2 = document.getElementById("next2");
next2.addEventListener("click", ()=>{
    showPage("page3");
});


// ======================
// PAGE 3
// ======================

const envelope = document.getElementById("envelope");
const gift = document.getElementById("gift");
const msgs = document.querySelectorAll(".msg");

envelope.addEventListener("click", ()=>{
    envelope.style.display = "none";
    gift.style.display = "block";

    msgs.forEach((m, i)=>{
        setTimeout(()=>{
            m.style.display = "block";
        }, i * 1000);
    });
});

const next3 = document.getElementById("next3");
next3.addEventListener("click", ()=>{
    showPage("page4");
});


// ======================
// PAGE 4
// ======================

const next4 = document.getElementById("next4");
next4.addEventListener("click", ()=>{
    showPage("page5");
    flowerRain();
});


// ======================
// PAGE 5
// ======================

let flowerInterval = null;

function flowerRain(){
    const area = document.getElementById("flowers");

    // Hentikan interval sebelumnya kalau ada
    if(flowerInterval) clearInterval(flowerInterval);

    flowerInterval = setInterval(()=>{
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.innerHTML = "🌸";
        flower.style.left = Math.random() * 100 + "vw";
        
        const duration = Math.random() * 3 + 3;
        flower.style.animationDuration = duration + "s";

        area.appendChild(flower);

        setTimeout(()=>{
            flower.remove();
        }, duration * 1000);

    }, 250);
}
